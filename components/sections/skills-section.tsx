"use client"

import { useRef, useEffect, useState } from 'react'
import { Code2, Terminal, Globe, Database, Wrench, Sparkles } from 'lucide-react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: typeof Code2
  skills: Skill[]
}

export function SkillsSection() {
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90, color: 'bg-chart-4' },
        { name: 'C++', level: 75, color: 'bg-primary' },
        { name: 'JavaScript', level: 85, color: 'bg-chart-4' },
        { name: 'TypeScript', level: 80, color: 'bg-primary' },
        { name: 'Java', level: 70, color: 'bg-chart-5' },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'HTML/CSS', level: 95, color: 'bg-chart-5' },
        { name: 'React', level: 80, color: 'bg-primary' },
        { name: 'Next.js', level: 75, color: 'bg-foreground' },
        { name: 'Node.js', level: 70, color: 'bg-accent' },
        { name: 'Tailwind', level: 85, color: 'bg-primary' },
      ],
    },
    {
      title: 'Tools & More',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 85, color: 'bg-chart-5' },
        { name: 'Linux', level: 75, color: 'bg-chart-4' },
        { name: 'SQL', level: 70, color: 'bg-primary' },
        { name: 'Docker', level: 60, color: 'bg-primary' },
        { name: 'VS Code', level: 95, color: 'bg-primary' },
      ],
    },
  ]

  const codeSnippet = `// skills.ts
interface Developer {
  name: string;
  age: number;
  role: "student" | "creator";
  passions: string[];
}

const faris: Developer = {
  name: "Faris",
  age: 20,
  role: "creator",
  passions: [
    "gaming",
    "programming", 
    "problem-solving"
  ]
};

export default faris;`

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <Terminal className="w-5 h-5 text-accent" />
            <span className="font-mono text-sm text-accent">Code & Creation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Snippet Display */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-full">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">skills.ts</span>
                <Sparkles className="w-4 h-4 text-primary ml-auto" />
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">
                  {codeSnippet.split('\n').map((line, index) => (
                    <div key={index} className="flex">
                      <span className="w-8 text-right text-muted-foreground/40 select-none pr-4">
                        {index + 1}
                      </span>
                      <CodeLine line={line} />
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>

          {/* Skills Progress */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${300 + catIndex * 100 + skillIndex * 50}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div
          className={`mt-12 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border rounded-xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-accent" />
            <span className="font-mono text-sm text-accent">currently_learning</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Machine Learning', 'Rust', 'Game Development', 'System Design', 'Cloud Architecture'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 rounded-lg text-sm text-foreground border border-border hover:border-primary/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Token types for syntax highlighting
type TokenType = 'keyword' | 'type' | 'string' | 'number' | 'bracket' | 'comment' | 'text'

interface Token {
  type: TokenType
  value: string
}

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = []
  
  // Handle comments first
  if (line.includes('//')) {
    const commentIndex = line.indexOf('//')
    if (commentIndex > 0) {
      tokens.push(...tokenizeCode(line.slice(0, commentIndex)))
    }
    tokens.push({ type: 'comment', value: line.slice(commentIndex) })
    return tokens
  }
  
  return tokenizeCode(line)
}

function tokenizeCode(code: string): Token[] {
  const tokens: Token[] = []
  const keywords = ['interface', 'const', 'export', 'default', 'type']
  const types = ['string', 'number', 'boolean']
  
  // Simple tokenizer - split by special characters while preserving them
  const regex = /("[^"]*"|\b\w+\b|[{}[\]:;,=|]|\s+)/g
  let match
  
  while ((match = regex.exec(code)) !== null) {
    const value = match[0]
    
    if (value.startsWith('"')) {
      tokens.push({ type: 'string', value })
    } else if (keywords.includes(value)) {
      tokens.push({ type: 'keyword', value })
    } else if (types.includes(value)) {
      tokens.push({ type: 'type', value })
    } else if (/^\d+$/.test(value)) {
      tokens.push({ type: 'number', value })
    } else if (/^[{}[\]]$/.test(value)) {
      tokens.push({ type: 'bracket', value })
    } else {
      tokens.push({ type: 'text', value })
    }
  }
  
  return tokens
}

function CodeLine({ line }: { line: string }) {
  const tokens = tokenizeLine(line)
  
  const getTokenClass = (type: TokenType): string => {
    switch (type) {
      case 'keyword': return 'text-chart-3'
      case 'type': return 'text-chart-4'
      case 'string': return 'text-accent'
      case 'number': return 'text-chart-5'
      case 'bracket': return 'text-primary'
      case 'comment': return 'text-muted-foreground/60'
      default: return ''
    }
  }
  
  return (
    <span>
      {tokens.map((token, i) => (
        <span key={i} className={getTokenClass(token.type)}>
          {token.value}
        </span>
      ))}
    </span>
  )
}
