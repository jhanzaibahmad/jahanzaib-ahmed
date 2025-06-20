"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 px-4 bg-muted/30" id="education">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Education & Certifications
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Bachelors in Computer Science</h3>
                    <p className="text-muted-foreground">
                      National University of Computer and Emerging Sciences - FAST
                    </p>
                    <p className="text-sm text-muted-foreground">
                      OOP, Data-Structures, Technopreneurship, Fundamentals of Management and Project Management
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge
                      variant="outline"
                      className="bg-orange-500/10 text-orange-600 border-orange-500/20 block text-center"
                    >
                      AWS Cloud Practitioner and Fundamentals
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-600 border-blue-500/20 block text-center"
                    >
                      Foundations of Project Management - Coursera
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-600 border-green-500/20 block text-center"
                    >
                      Google Career Certificates
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
