"use client"

import { useEffect, useState } from 'react'
import { MatrixRain } from '@/components/matrix-rain'
import { ChevronDown, Gamepad2, Code2 } from 'lucide-react'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = "Welcome to Faris's Digital World."

  useEffect(() => {
    setMounted(true)
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToJourney = () => {
    const element = document.querySelector('#journey')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matrix Rain Background */}
      {mounted && <MatrixRain />}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-colors group">
            <Gamepad2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
          </div>
          <div className="w-12 h-px bg-gradient-to-r from-primary to-accent" />
          <div className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-accent transition-colors group">
            <Code2 className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Terminal Window */}
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-8 shadow-2xl shadow-primary/10">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">~/faris/welcome.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 sm:p-8 text-left font-mono">
            <div className="text-muted-foreground text-sm mb-2">
              <span className="text-accent">$</span> ./introduce.sh
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {typedText}
              <span className="text-primary animate-blink">|</span>
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed">
          <span className="text-primary font-mono">20</span> years old{' '}
          <span className="text-muted-foreground/60">|</span>{' '}
          <span className="text-accent font-semibold">Computer Science</span> Major
        </p>

        <p className="text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Blending the worlds of <span className="text-primary">gaming</span> and{' '}
          <span className="text-accent">programming</span> to create digital experiences
          that push boundaries.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToJourney}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/50 rounded-lg text-primary font-medium hover:bg-primary/20 hover:border-primary transition-all duration-300"
        >
          <span>Explore My World</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
