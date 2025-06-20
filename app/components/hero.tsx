"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useRef } from "react"

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

        // Add a subtle glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = theme === "dark" ? "white" : "#1a1a2e"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
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

      // Update and draw stars
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

      // Reposition stars on resize
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

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="absolute top-8 right-8 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-background/20 backdrop-blur-sm border-white/20"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="absolute top-8 left-8 z-20">
        <Button
          variant="outline"
          size="lg"
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          onClick={handleResumeDownload}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative mx-auto mb-8 h-48 w-48 overflow-hidden rounded-full shadow-2xl ring-4 ring-white/20">
            <img src="/images/profile.jpg" alt="Jahan Zaib Ahmed" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Jahan Zaib Ahmed
        </motion.h1>

        <motion.p
          className="mb-8 text-xl text-white/90 sm:text-2xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Engineer
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <a href="https://github.com/jhanzaibahmad" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <a href="https://linkedin.com/in/jahanzaib-ahmed-gul-13807a225" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
