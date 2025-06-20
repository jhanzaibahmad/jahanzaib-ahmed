"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jahanzaibahmedgul@gmail.com",
      href: "mailto:jahanzaibahmedgul@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 303 9665165",
      href: "tel:+923039665165",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jahanzaib-ahmed-gul",
      href: "https://linkedin.com/in/jahanzaib-ahmed-gul-13807a225",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "jhanzaibahmad",
      href: "https://github.com/jhanzaibahmad",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>

          <Card className="bg-card/50 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-xl">Let's work together on your next project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="h-auto w-full justify-start p-4 bg-background/50 hover:bg-accent"
                      asChild
                    >
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <contact.icon className="mr-3 h-5 w-5" />
                        <div className="text-left">
                          <div className="text-sm font-medium">{contact.label}</div>
                          <div className="text-xs text-muted-foreground">{contact.value}</div>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
