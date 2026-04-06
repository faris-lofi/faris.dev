"use client"

import { useRef, useEffect, useState } from 'react'
import { Brain, Zap, Eye, Puzzle, Lightbulb, Target } from 'lucide-react'

export function PerspectiveSection() {
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

  const traits = [
    {
      icon: Eye,
      title: 'Pattern Recognition',
      description: 'Seeing connections and patterns that others might overlook',
    },
    {
      icon: Puzzle,
      title: 'Creative Problem-Solving',
      description: 'Approaching challenges from unconventional angles',
    },
    {
      icon: Target,
      title: 'Hyperfocus',
      description: 'Deep diving into topics with intense concentration',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Thinking',
      description: 'Generating unique solutions and fresh perspectives',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="perspective"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-secondary/30 rounded-full border border-border">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">system.perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Unique Operating System
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        {/* Main Content Card */}
        <div
          className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-10 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Terminal Style Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-primary">ADHD</span>
            </div>
            <span className="text-muted-foreground/50">+</span>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent" />
              <span className="font-mono text-sm text-accent">Autism</span>
            </div>
            <span className="text-muted-foreground/50">=</span>
            <span className="font-mono text-sm text-foreground">unique_perspective.exe</span>
          </div>

          <p className="text-lg text-foreground/90 leading-relaxed mb-8">
            Navigating life with <span className="text-primary font-semibold">ADHD</span> and{' '}
            <span className="text-accent font-semibold">Autism</span> gives me an unconventional, highly creative
            approach to problem-solving and programming. My neurodivergent mind allows me to see{' '}
            <span className="text-primary">patterns</span> and{' '}
            <span className="text-accent">solutions</span> others might miss—turning what some see
            as limitations into my greatest strengths.
          </p>

          {/* Code Block Style */}
          <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm border border-border">
            <div className="text-muted-foreground">
              <span className="text-chart-4">const</span>{' '}
              <span className="text-foreground">mindset</span>{' '}
              <span className="text-muted-foreground">=</span>{' '}
              <span className="text-primary">{'{'}</span>
            </div>
            <div className="pl-4 text-muted-foreground">
              <span className="text-accent">different</span>: <span className="text-chart-4">true</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              <span className="text-accent">creative</span>: <span className="text-chart-4">true</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              <span className="text-accent">limitation</span>: <span className="text-chart-4">false</span>
            </div>
            <div className="text-primary">{'}'};</div>
          </div>
        </div>

        {/* Traits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {traits.map((trait, index) => (
            <div
              key={trait.title}
              className={`group p-6 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <trait.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{trait.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{trait.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
