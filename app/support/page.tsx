import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, FileText, MessageSquare, Video } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Support & FAQ</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions and get help with your BotSDK implementation
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search for answers..." className="pl-10 h-12 rounded-full" />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col items-center text-center p-6">
            <FileText className="h-10 w-10 text-primary mb-4" />
            <CardTitle className="mb-2">Documentation</CardTitle>
            <CardDescription className="mb-4">Comprehensive guides and API references</CardDescription>
            <Link href="/docs" className="mt-auto">
              <Button variant="outline" size="sm">
                View Docs
              </Button>
            </Link>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <MessageSquare className="h-10 w-10 text-primary mb-4" />
            <CardTitle className="mb-2">FAQ</CardTitle>
            <CardDescription className="mb-4">Answers to commonly asked questions</CardDescription>
            <Link href="#faq" className="mt-auto">
              <Button variant="outline" size="sm">
                View FAQ
              </Button>
            </Link>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <Video className="h-10 w-10 text-primary mb-4" />
            <CardTitle className="mb-2">Tutorials</CardTitle>
            <CardDescription className="mb-4">Step-by-step video guides and walkthroughs</CardDescription>
            <Link href="/tutorials" className="mt-auto">
              <Button variant="outline" size="sm">
                Watch Tutorials
              </Button>
            </Link>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <MessageSquare className="h-10 w-10 text-primary mb-4" />
            <CardTitle className="mb-2">Contact Support</CardTitle>
            <CardDescription className="mb-4">Get in touch with our support team</CardDescription>
            <Link href="/contact" className="mt-auto">
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2">Find quick answers to common questions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">How do I get my API key?</h3>
                <p className="text-muted-foreground">
                  After signing up, you can find your API key in your account dashboard under the "API Keys" section.
                  You'll need this key to integrate the bot into your website.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I customize the appearance of the bot?</h3>
                <p className="text-muted-foreground">
                  Yes, you can fully customize the bot's appearance including colors, fonts, and styles to match your
                  brand. Check our integration guide for details.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">How does the auto-detection feature work?</h3>
                <p className="text-muted-foreground">
                  Our auto-detection technology scans your website content to understand context and provide relevant
                  responses to user queries without manual configuration.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Is there a limit to the number of conversations?</h3>
                <p className="text-muted-foreground">
                  Each plan has different conversation limits. The Basic plan includes 5,000 conversations per month,
                  Pro includes 25,000, and Enterprise offers unlimited conversations.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I integrate the bot with my CRM?</h3>
                <p className="text-muted-foreground">
                  Yes, our Pro and Enterprise plans support integration with popular CRM systems like Salesforce,
                  HubSpot, and more. Custom integrations are available for Enterprise customers.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">How do I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  You can change your plan at any time from your account dashboard. When upgrading, new features are
                  available immediately. When downgrading, changes take effect at the start of your next billing cycle.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="container px-4 md:px-6 bg-muted/50 py-12 rounded-lg">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Support Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our comprehensive resources to help you get the most out of BotSDK
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/getting-started" className="text-primary hover:underline">
                    Getting Started Guide
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api-reference" className="text-primary hover:underline">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/docs/customization" className="text-primary hover:underline">
                    Customization Options
                  </Link>
                </li>
                <li>
                  <Link href="/docs/advanced" className="text-primary hover:underline">
                    Advanced Usage
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tutorials/installation" className="text-primary hover:underline">
                    Installation Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/customization" className="text-primary hover:underline">
                    Customization Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/conversation-flows" className="text-primary hover:underline">
                    Creating Conversation Flows
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials/integrations" className="text-primary hover:underline">
                    Third-party Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/community/forum" className="text-primary hover:underline">
                    Developer Forum
                  </Link>
                </li>
                <li>
                  <Link href="/community/showcase" className="text-primary hover:underline">
                    User Showcase
                  </Link>
                </li>
                <li>
                  <Link href="/community/blog" className="text-primary hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/community/events" className="text-primary hover:underline">
                    Upcoming Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
              >
                Contact Support
              </Button>
            </Link>
            <Link href="/docs/faq">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                View Full FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
