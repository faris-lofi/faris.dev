"use client"

import { useRef, useEffect, useState } from 'react'
import { Heart, Gamepad, Music, Tv, Cpu, Sparkles } from 'lucide-react'

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const companions = [
    { icon: Tv, label: 'Cartoons', color: 'text-primary' },
    { icon: Gamepad, label: 'Video Games', color: 'text-accent' },
    { icon: Music, label: 'Music', color: 'text-chart-3' },
    { icon: Cpu, label: 'Technology', color: 'text-chart-4' },
  ]

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">// section.journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Story Card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-10 hover:border-primary/50 transition-colors group">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-xl group-hover:border-primary/60 transition-colors" />
            </div>

            {/* Quote Mark */}
            <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">
              &ldquo;
            </div>

            {/* Story Content */}
            <div className="relative">
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
                Growing up, I often found myself feeling lonely, but I discovered my closest companions in{' '}
                <span className="text-primary font-medium">cartoons</span>,{' '}
                <span className="text-accent font-medium">video games</span>,{' '}
                <span className="text-chart-3 font-medium">music</span>, and{' '}
                <span className="text-chart-4 font-medium">technology</span>.
              </p>

              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
                They were my escape and my window to creativity. Although I faced bullying, these passions defined me and sparked my dream of becoming a{' '}
                <span className="text-primary font-semibold">creator</span> in the digital space, not just a consumer.
              </p>

              {/* Companions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {companions.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                    <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Sparkle */}
            <Sparkles className="absolute bottom-4 right-4 w-5 h-5 text-primary/40" />
          </div>
        </div>

        {/* Timeline Accent */}
        <div
          className={`flex items-center gap-4 mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
          <span className="text-xs text-muted-foreground font-mono px-4 py-2 bg-secondary/30 rounded-full border border-border">
            from consumer → to creator
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
        </div>
      </div>
    </section>
  )
}
