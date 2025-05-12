"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const chatBubbleRef = useRef(null)

  useEffect(() => {
    // Add floating animation to the chat bubble
    if (chatBubbleRef.current) {
      const element = chatBubbleRef.current
      element.classList.add("animate-float")
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-100 via-background to-blue-100 dark:from-purple-950/40 dark:via-background dark:to-blue-950/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Transform Your Website with Intelligent Bots
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our Custom Bot SDK enables developers to easily integrate intelligent, customizable bots that enhance
                user experience and drive engagement.
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="gap-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                >
                  Let's Start <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/integration">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  View Integration Guide
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Easy setup</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>10-day free trial</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>No credit card required</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-600/40 rounded-full blur-3xl opacity-50"></div>
              <Image
                src="/ai-generated-9440737_1280.png?height=600&width=600"
                width={600}
                height={600}
                alt="Bot SDK Demo"
                className="mx-auto rounded-lg object-cover relative z-10 shadow-xl"
              />
              <div
                ref={chatBubbleRef}
                className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 border border-primary/20 z-20"
              >
                <div className="flex items-start gap-4 max-w-xs">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-primary-foreground font-bold">
                    B
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">How can I help you today?</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 rounded-full text-xs border-primary/20 hover:bg-primary/5 transition-all duration-300"
                      >
                        Product Info
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 rounded-full text-xs border-primary/20 hover:bg-primary/5 transition-all duration-300"
                      >
                        Pricing
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
