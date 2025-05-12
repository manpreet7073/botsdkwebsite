"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Check, Lock, Mail, User } from "lucide-react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")
  const [selectedPlan, setSelectedPlan] = useState(planParam || "basic")
  const [step, setStep] = useState(1)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div className="space-y-2" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Let's Get Started
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Create your account and start your 10-day free trial. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="flex justify-between mb-8 relative"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2"></div>
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-purple-600 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>

            {/* Step Indicators */}
            {[1, 2, 3].map((stepNumber) => (
              <motion.div key={stepNumber} className="relative z-10 flex flex-col items-center gap-2" variants={fadeIn}>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    step >= stepNumber
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30 bg-background text-muted-foreground"
                  } transition-all duration-300`}
                >
                  {step > stepNumber ? <Check className="h-5 w-5" /> : stepNumber}
                </div>
                <span
                  className={`text-sm ${step >= stepNumber ? "text-primary font-medium" : "text-muted-foreground"}`}
                >
                  {stepNumber === 1 ? "Account" : stepNumber === 2 ? "Plan" : "Confirmation"}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Step 1: Account Information */}
          {step === 1 && (
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                  <CardDescription>Enter your information to create your BotSDK account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNextStep} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">First name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="first-name"
                            placeholder="Enter your first name"
                            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="last-name"
                            placeholder="Enter your last name"
                            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a password"
                          className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters long and include a number and a special character.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <Label
                        htmlFor="terms"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/legal/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/legal/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <Button type="submit" className="w-full group relative overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        Continue <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                      Log in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Plan Selection */}
          {step === 2 && (
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle>Choose Your Plan</CardTitle>
                  <CardDescription>Select the plan that works best for your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="basic">Basic</TabsTrigger>
                      <TabsTrigger value="pro">Pro</TabsTrigger>
                      <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                    </TabsList>

                    <TabsContent value="basic" className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Basic Plan</h3>
                          <p className="text-muted-foreground">For small websites and startups</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            $29<span className="text-sm font-normal text-muted-foreground">/month</span>
                          </div>
                          <p className="text-xs text-muted-foreground">After 10-day free trial</p>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">Plan includes:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Up to 5,000 conversations/month</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Basic customization options</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Email support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>1 website integration</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="pro" className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Pro Plan</h3>
                          <p className="text-muted-foreground">For growing businesses</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            $79<span className="text-sm font-normal text-muted-foreground">/month</span>
                          </div>
                          <p className="text-xs text-muted-foreground">After 10-day free trial</p>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">Plan includes:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Up to 25,000 conversations/month</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Advanced customization options</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Priority email & chat support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>5 website integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Analytics dashboard</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="enterprise" className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">Enterprise Plan</h3>
                          <p className="text-muted-foreground">For large organizations</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">Custom</div>
                          <p className="text-xs text-muted-foreground">Contact sales for pricing</p>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <h4 className="font-medium mb-2">Plan includes:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Unlimited conversations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Full customization capabilities</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>24/7 dedicated support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Unlimited website integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Advanced analytics & reporting</span>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button variant="outline" onClick={handlePrevStep} className="w-full sm:w-auto">
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="w-full sm:w-auto group relative overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        Continue <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="border-primary/20 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Registration Complete!</CardTitle>
                  <CardDescription>Your 10-day free trial has started</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-6 bg-muted rounded-lg">
                      <h3 className="font-medium mb-2">Next Steps:</h3>
                      <ol className="space-y-4 text-left list-decimal pl-5">
                        <li className="pl-2">
                          <span>Check your email for a verification link</span>
                        </li>
                        <li className="pl-2">
                          <span>Log in to your dashboard to get your API key</span>
                        </li>
                        <li className="pl-2">
                          <span>Follow our integration guide to add the bot to your website</span>
                        </li>
                        <li className="pl-2">
                          <span>Customize your bot's appearance and conversation flows</span>
                        </li>
                      </ol>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/dashboard">
                        <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
                          <span className="relative">Go to Dashboard</span>
                        </Button>
                      </Link>
                      <Link href="/integration">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                          View Integration Guide
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="text-sm text-muted-foreground">
                    Need help?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact our support team
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      {step < 3 && (
        <section className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Sarah Johnson"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground">CTO at TechCorp</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The BotSDK has transformed how we interact with our customers. Integration was seamless, and the
                      customization options are fantastic."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Michael Chen"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Michael Chen</h3>
                        <p className="text-sm text-muted-foreground">Lead Developer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "As a developer, I appreciate how well-documented and easy to implement the SDK is. It took me
                      less than an hour to get our bot running."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Emily Rodriguez"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">Emily Rodriguez</h3>
                        <p className="text-sm text-muted-foreground">Product Manager</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Our customer support inquiries decreased by 35% after implementing the bot on our website. The
                      auto-detection feature is particularly impressive."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
