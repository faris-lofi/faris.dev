"use client"

import { useState, useRef, useEffect, createContext, useContext } from "react"
import { Volume2, VolumeX } from "lucide-react"

// Context to manage audio state across components
interface AudioContextType {
  isPlaying: boolean
  isMuted: boolean
  toggleMute: () => void
}

const AudioContext = createContext<AudioContextType | null>(null)

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within GameEntryProvider")
  }
  return context
}

interface GameEntryProviderProps {
  children: React.ReactNode
}

export function GameEntryProvider({ children }: GameEntryProviderProps) {
  const [hasEntered, setHasEntered] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }
  }, [])

  const handleEnter = () => {
    setIsExiting(true)
    
    // Start music immediately on click
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((err) => {
        console.log("Audio play failed:", err)
      })
    }

    // Fade out overlay
    setTimeout(() => {
      setHasEntered(true)
    }, 800)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <AudioContext.Provider value={{ isPlaying, isMuted, toggleMute }}>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        preload="auto"
      />

      {/* Game Entry Overlay */}
      {!hasEntered && (
        <div
          onClick={handleEnter}
          className={`fixed inset-0 z-[100] cursor-pointer transition-all duration-700 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-background">
            {/* Animated grid lines */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--accent)) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                animation: 'gridMove 20s linear infinite',
              }}
            />
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            
            {/* Scanline effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 4px)',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            {/* Glowing title */}
            <div className="mb-8 text-center">
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl font-mono font-bold tracking-wider"
                style={{
                  color: 'hsl(var(--accent))',
                  textShadow: `
                    0 0 10px hsl(var(--accent) / 0.8),
                    0 0 20px hsl(var(--accent) / 0.6),
                    0 0 40px hsl(var(--accent) / 0.4),
                    0 0 80px hsl(var(--accent) / 0.2)
                  `,
                }}
              >
                FARIS.DEV
              </h1>
              <div className="mt-4 font-mono text-muted-foreground text-sm sm:text-base tracking-widest">
                PORTFOLIO v1.0
              </div>
            </div>

            {/* Animated decorative lines */}
            <div className="w-64 sm:w-80 h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-12 animate-pulse" />

            {/* Start Game text */}
            <div className="relative">
              <div 
                className="font-mono text-xl sm:text-2xl md:text-3xl tracking-[0.3em] uppercase animate-pulse"
                style={{
                  color: 'hsl(var(--foreground))',
                  textShadow: '0 0 10px hsl(var(--accent) / 0.5)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              >
                Press Start
              </div>
              
              {/* Blinking cursor */}
              <span 
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-3 h-6 sm:h-8 bg-accent"
                style={{
                  animation: 'blink 1s step-end infinite',
                }}
              />
            </div>

            {/* Click anywhere hint */}
            <div className="mt-16 font-mono text-xs sm:text-sm text-muted-foreground/60 tracking-wider animate-bounce">
              [ CLICK ANYWHERE TO CONTINUE ]
            </div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/30" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent/30" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/30" />

            {/* Status bar at bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground/40 flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                SYSTEM READY
              </span>
              <span>|</span>
              <span>AUDIO ENABLED</span>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`transition-opacity duration-500 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </AudioContext.Provider>
  )
}

// Minimal mute toggle button for the main site
export function MuteToggle() {
  const { isMuted, toggleMute, isPlaying } = useAudio()

  if (!isPlaying) return null

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 group"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
      
      {/* Subtle pulse when not muted */}
      {!isMuted && (
        <span className="absolute inset-0 rounded-full border border-accent/30 animate-ping opacity-30" />
      )}
    </button>
  )
}
