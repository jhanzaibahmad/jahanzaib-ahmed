"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>

          <Card className="bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Software Engineer with a strong aptitude for learning and implementing innovative technologies. Proven
                ability to lead projects from initiation to delivery, with a focus on user-centric solutions and cross-
                functional team coordination. Skilled in utilizing modern tools and agile methodologies to optimize
                workflows, drive efficiency, and enhance stakeholder satisfaction.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
