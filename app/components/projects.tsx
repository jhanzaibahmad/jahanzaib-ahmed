"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "Cloud Hosted Blog Application - MERN",
      description:
        "Built a full-stack blog platform using React, Node.js and DynamoDB supporting user authentication and post CRUD operations. Deployed backend via Docker on AWS EC2, and frontend via Elastic Beanstalk.",
      techStack: ["React", "Node.js", "DynamoDB", "AWS EC2", "Docker", "Elastic Beanstalk", "AWS S3"],
    },
    {
      title: "Ethereum Based Blockchain System – Go",
      description:
        "Built a scalable blockchain with adaptive Merkle forests, dynamic sharding, and cross-shard state synchronization. Designed a hybrid consensus mechanism combining PoW and dBFT with Byzantine fault tolerance.",
      techStack: ["Go", "Blockchain", "Ethereum", "PoW", "dBFT", "Zero-Knowledge Proofs"],
    },
    {
      title: "Coronary Artery Blockage Detection",
      description:
        "Website Development using Node.js and React. Deep-learning model using PyTorch. Fusion model to combine results of two deep-learning models to deduce final result.",
      techStack: ["Node.js", "React", "PyTorch", "Deep Learning", "Medical Imaging"],
    },
    {
      title: "FAST University Management and Events Portal",
      description:
        "Built a full-stack university management platform using Node.js, React and MongoDB. Coordinated testing and validation, ensuring compliance with industry standards.",
      techStack: ["Node.js", "React", "MongoDB", "JavaScript"],
    },
    {
      title: "IRIS: The Plant Management System",
      description:
        "Designed and optimized a plant inventory and management system. Coordinated testing and validation, ensuring compliance with industry standards.",
      techStack: ["JavaScript", "MongoDB", "React"],
    },
  ]

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
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
