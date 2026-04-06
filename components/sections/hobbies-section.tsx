"use client"

import { useRef, useEffect, useState } from 'react'
import { 
  Gamepad2, 
  BookOpen, 
  Waves, 
  PersonStanding,
  Sword,
  Map,
  ScrollText,
  Brain as BrainIcon,
  Trophy,
  Heart
} from 'lucide-react'

export function HobbiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const gameTypes = [
    { icon: Sword, label: 'Story-Driven RPGs', description: 'Immersive narratives' },
    { icon: Map, label: 'Open World', description: 'Endless exploration' },
    { icon: Trophy, label: 'Competitive', description: 'Testing my skills' },
    { icon: Heart, label: 'Indie Games', description: 'Artistic experiences' },
  ]

  const otherHobbies = [
    {
      icon: BookOpen,
      title: 'Reading & Philosophy',
      description: 'Exploring novels and diving deep into philosophical questions about existence and consciousness',
      tags: ['Fiction', 'Philosophy', 'Sci-Fi'],
      color: 'from-accent to-primary',
    },
    {
      icon: Waves,
      title: 'Swimming',
      description: 'Finding peace and clarity in the water, a perfect way to recharge',
      tags: ['Cardio', 'Meditation', 'Fitness'],
      color: 'from-primary to-chart-3',
    },
    {
      icon: PersonStanding,
      title: 'Running',
      description: 'Clearing my mind and pushing my limits, one step at a time',
      tags: ['Endurance', 'Outdoors', 'Health'],
      color: 'from-chart-4 to-accent',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="hobbies"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
            <Gamepad2 className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-primary">{"The Gamer's Lair"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Beyond the Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When I&apos;m not coding, you&apos;ll find me immersed in these passions
          </p>
        </div>

        {/* Gaming Section - Featured */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 sm:p-8 overflow-hidden group hover:border-primary/50 transition-colors">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <Gamepad2 className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Video Games</h3>
                  <p className="text-muted-foreground">My primary passion and escape</p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
                Gaming isn&apos;t just entertainment for me—it&apos;s art, storytelling, and inspiration. 
                From epic story-driven adventures to vast open worlds waiting to be explored, 
                every game teaches me something new about design, narrative, and interactive experiences.
              </p>

              {/* Game Types Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {gameTypes.map((type, index) => (
                  <div
                    key={type.label}
                    className={`p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 hover:scale-105 cursor-default ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <type.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">{type.label}</h4>
                    <p className="text-xs text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherHobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className={`group bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${hobby.color} mb-4`}>
                <hobby.icon className="w-6 h-6 text-background" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{hobby.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {hobby.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {hobby.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <div
          className={`mt-12 p-6 bg-secondary/20 border border-border rounded-xl text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ScrollText className="w-6 h-6 text-accent mx-auto mb-3" />
          <p className="text-muted-foreground italic font-mono text-sm">
            &ldquo;The unexamined life is not worth living&rdquo; — Socrates
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">A philosophy that drives my curiosity</p>
        </div>
      </div>
    </section>
  )
}
