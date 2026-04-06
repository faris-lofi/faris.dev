"use client"

import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:faris@example.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-lg font-semibold text-foreground">
              faris<span className="text-primary">_</span>dev
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm text-center max-w-md">
            Building the future, one line of code at a time.
          </p>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
            <span>&copy; {currentYear} Faris. All rights reserved.</span>
            <span className="text-muted-foreground/30">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-primary inline" /> and lots of code
            </span>
          </div>

          {/* ASCII Art */}
          <div className="mt-4 font-mono text-xs text-muted-foreground/30 text-center hidden sm:block">
            <pre>{`
    ╔═══════════════════════════════╗
    ║   Thanks for visiting! :)     ║
    ╚═══════════════════════════════╝
            `}</pre>
          </div>
        </div>
      </div>
    </footer>
  )
}
