"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: "Frontend & Backend",
      skills: ["JavaScript", "React", "Node.js", "MERN Stack"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "GitHub"],
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    },
    {
      title: "Programming & Technologies",
      skills: ["Python", "Blockchain", "PyTorch"],
      color: "bg-green-500/10 text-green-600 border-green-500/20",
    },
    {
      title: "Project Management",
      skills: ["SCRUM", "JIRA", "Notion", "Agile Methodologies"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Skills & Technologies</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`${category.color} hover:scale-105 transition-transform duration-200`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
