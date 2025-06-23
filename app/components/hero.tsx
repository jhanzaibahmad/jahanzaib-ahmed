"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useRef } from "react"
import clsx from "clsx"

export default function Hero() {
  const { theme, toggleTheme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Star[] = []
    const starCount = 200

    class Star {
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      twinklePhase: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.8 + 0.2
        this.twinkleSpeed = Math.random() * 0.02 + 0.01
        this.twinklePhase = Math.random() * Math.PI * 2
      }

      update() {
        this.twinklePhase += this.twinkleSpeed
        this.opacity = 0.3 + Math.sin(this.twinklePhase) * 0.5
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.opacity)
        ctx.fillStyle = theme === "dark" ? "white" : "#1a1a2e"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.shadowBlur = 10
        ctx.shadowColor = theme === "dark" ? "white" : "#1a1a2e"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      if (theme === "dark") {
        gradient.addColorStop(0, "#0f0f23")
        gradient.addColorStop(0.5, "#1a1a2e")
        gradient.addColorStop(1, "#16213e")
      } else {
        gradient.addColorStop(0, "#e6f3ff")
        gradient.addColorStop(0.5, "#cce7ff")
        gradient.addColorStop(1, "#b3daff")
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const star of stars) {
        star.update()
        star.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight

      stars.forEach((star) => {
        star.x = Math.random() * window.innerWidth
        star.y = Math.random() * window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [theme])

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/Jahanzaib_Ahmed_Resume.pdf"
    link.download = "Jahan_Zaib_Ahmed_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const isLight = theme === "light"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-background/20 backdrop-blur-sm border-white/20"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Resume Button */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <Button
          variant="outline"
          size="sm"
          className={clsx(
            "text-xs sm:text-base backdrop-blur-sm border-white/20",
            isLight
              ? "bg-blue-400 text-white hover:bg-blue-700 hover:text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          )}
          onClick={handleResumeDownload}
        >
          <Download className="mr-1 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
          Resume
        </Button>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative mx-auto mb-6 sm:mb-8 h-32 w-32 sm:h-48 sm:w-48 overflow-hidden rounded-full shadow-2xl ring-4 ring-white/20">
            <img src="/images/profile.jpg" alt="Jahan Zaib Ahmed" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className={clsx(
            "mb-3 text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-lg",
            isLight ? "text-black" : "text-white"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Jahan Zaib Ahmed
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={clsx(
            "mb-6 text-lg sm:text-xl drop-shadow-md",
            isLight ? "text-black/80" : "text-white/90"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Engineer
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              href: "https://github.com/jhanzaibahmad",
              icon: <Github className="mr-2 h-4 w-4" />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/jahanzaib-ahmed-gul-13807a225",
              icon: <Linkedin className="mr-2 h-4 w-4" />,
              label: "LinkedIn",
            },
            {
              href: "#contact",
              icon: <Mail className="mr-2 h-4 w-4" />,
              label: "Contact",
            },
          ].map((btn, idx) => (
            <Button
              key={idx}
              variant="outline"
              size="lg"
              className={clsx(
                "w-full sm:w-auto justify-center backdrop-blur-sm border-white/20 shadow-lg",
                isLight
                  ? "bg-blue-400 text-white hover:bg-blue-700 hover:text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
              asChild
            >
              <a href={btn.href} target="_blank" rel="noopener noreferrer">
                {btn.icon}
                {btn.label}
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
