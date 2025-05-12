import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Get in Touch
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-primary/20 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Inquiry Type</Label>
                  <RadioGroup defaultValue="general" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="font-normal">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sales" id="sales" />
                      <Label htmlFor="sales" className="font-normal">
                        Sales
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" />
                      <Label htmlFor="support" className="font-normal">
                        Technical Support
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-normal">
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <Button type="submit" className="w-full group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 group-hover:opacity-90 opacity-0 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">123 Innovation Drive, Tech Park</p>
                    <p className="text-muted-foreground">San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@botsdk.com</p>
                    <p className="text-muted-foreground">support@botsdk.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm PST</p>
                    <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/90 to-purple-600/90 text-white border-none shadow-lg">
              <CardHeader>
                <CardTitle>Enterprise Support</CardTitle>
                <CardDescription className="text-white/80">Dedicated support for enterprise customers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Enterprise customers receive priority support with dedicated account managers and 24/7 technical
                  assistance.
                </p>
                <Link href="/pricing">
                  <Button variant="secondary" className="w-full">
                    Learn About Enterprise
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-full">
          <div className="rounded-lg overflow-hidden h-[400px] border shadow-lg">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 md:px-6 bg-muted/50 py-12 rounded-lg">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2">Find quick answers to common questions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>How quickly will you respond?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 24 hours during business days. Enterprise customers receive
                  priority support with faster response times.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer technical support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide technical support for all our customers. The level of support depends on your plan.
                  Check our pricing page for details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I schedule a demo?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can schedule a personalized demo with our team to see how our Bot SDK can work for your specific
                  needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where can I find documentation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our comprehensive documentation is available in the Support section of our website. It includes
                  guides, API references, and examples.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary via-purple-600 to-purple-700 p-8 md:p-12 rounded-lg shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Try our SDK free for 10 days. No credit card required. See how our intelligent bots can transform your
              website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/integration">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
                >
                  View Integration Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
