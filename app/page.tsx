import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Code, Palette, MessageSquare, Zap, ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import FeatureShowcase from "@/components/feature-showcase"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />

      {/* Key Features Section */}
      <section className="container px-4 md:px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Developers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our SDK provides everything you need to create intelligent, interactive bots for your website
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/website-6700615_1280.png?height=550&width=550"
            width={550}
            height={550}
            alt="SDK Features"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Easy Integration</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Integrate our bot with just a few lines of code. No complex setup required.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Auto-Detection</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our SDK automatically detects and interacts with your website data.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Customizable Appearance</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Customize colors, themes, and styles to match your brand identity.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Custom Conversations</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Create custom questions and conversation flows tailored to your users' needs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/features">
            <Button variant="outline" size="lg" className="gap-1">
              Explore All Features <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="container px-4 md:px-6 py-12 bg-mesh rounded-lg">
        <FeatureShowcase />
      </section>

      {/* Pricing Preview */}
      <section className="container px-4 md:px-6 py-12 bg-muted/50">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for your business
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {/* Basic Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>For small websites and startups</CardDescription>
              <div className="mt-4 text-4xl font-bold">
                $29<span className="text-sm font-normal text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
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
            </CardContent>
            <CardFooter>
              <Link href="/pricing" className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col border-primary">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <div className="text-sm font-medium uppercase text-primary-foreground/70">Most Popular</div>
              <CardTitle className="text-primary-foreground">Pro</CardTitle>
              <CardDescription className="text-primary-foreground/90">For growing businesses</CardDescription>
              <div className="mt-4 text-4xl font-bold text-primary-foreground">
                $79<span className="text-sm font-normal text-primary-foreground/70">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
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
            </CardContent>
            <CardFooter>
              <Link href="/pricing" className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4 text-4xl font-bold">Custom</div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
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
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom development support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">All plans include a 10-day free trial. No credit card required.</p>
          <Link href="/pricing">
            <Button size="lg">View Full Pricing Details</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-purple-700 text-primary-foreground rounded-lg shadow-xl">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your website with intelligent bots?
            </h2>
            <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
              Start your 10-day free trial today and see how our SDK can help you engage with your users in a whole new
              way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" variant="secondary">
                  Let's Start
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ChatGPT Image May 12, 2025, 03_45_02 PM.png?height=300&width=500"
              width={500}
              height={300}
              alt="Bot SDK in action"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
