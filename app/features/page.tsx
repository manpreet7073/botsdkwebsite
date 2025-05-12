import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Zap, Palette, MessageSquare, BarChart, Shield, Globe, Cpu, Layers, ArrowRight } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Developers</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our SDK provides everything you need to create intelligent, interactive bots for your website
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <Code className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Easy Integration</CardTitle>
              <CardDescription>Integrate our bot with just a few lines of code</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our SDK is designed to be developer-friendly, with simple installation and initialization. No complex
                setup required.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Zap className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Auto-Detection</CardTitle>
              <CardDescription>Automatically detects and interacts with website data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our intelligent bot can scan your website content to provide relevant responses without manual
                configuration.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Palette className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Customizable Appearance</CardTitle>
              <CardDescription>Customize colors, themes, and styles to match your brand</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tailor the bot's appearance to seamlessly integrate with your website design and brand identity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <MessageSquare className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Custom Conversations</CardTitle>
              <CardDescription>Create custom questions and conversation flows</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Design conversation paths tailored to your users' needs, with custom questions, responses, and actions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="container px-4 md:px-6">
        <Tabs defaultValue="developer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="developer">For Developers</TabsTrigger>
            <TabsTrigger value="business">For Businesses</TabsTrigger>
            <TabsTrigger value="enterprise">For Enterprise</TabsTrigger>
          </TabsList>

          <TabsContent value="developer" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Developer-Friendly Features</h2>
                <p className="text-muted-foreground mb-6">
                  Our SDK is built with developers in mind, providing a seamless integration experience with powerful
                  customization options.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Code className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Simple API</h3>
                      <p className="text-sm text-muted-foreground">
                        Clean, well-documented API with intuitive methods and properties.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Modular Architecture</h3>
                      <p className="text-sm text-muted-foreground">
                        Import only the components you need to keep your bundle size small.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Cpu className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Event System</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive event system for tracking user interactions and bot behavior.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/artificial-intelligence-8953936_1280.png?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Developer features"
                  className="rounded-lg border"
                />
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Code Example</h3>
              <div className="bg-background p-4 rounded-md font-mono text-sm overflow-x-auto">
                <pre>{`// Initialize the bot with custom settings
BotSDK.init({
  apiKey: "YOUR_API_KEY",
  theme: "light",
  position: "bottom-right",
  initialMessage: "How can I help you today?",
  autoDetect: true,
  debug: process.env.NODE_ENV === "development"
});

// Listen for events
BotSDK.on("conversation:started", (data) => {
  console.log("New conversation started", data);
  analytics.track("bot_conversation_started");
});

// Add custom commands
BotSDK.addCommand("showPricing", () => {
  // Show pricing modal or navigate to pricing page
  window.location.href = "/pricing";
});`}</pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <Image
                  src="/work-8744593_1280.png?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Business features"
                  className="rounded-lg border"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">Business-Focused Features</h2>
                <p className="text-muted-foreground mb-6">
                  Drive engagement, increase conversions, and provide better customer support with our business-focused
                  features.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <BarChart className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Analytics Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        Track user interactions, popular questions, and conversion rates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Lead Generation</h3>
                      <p className="text-sm text-muted-foreground">
                        Capture user information and qualify leads through conversational flows.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Automation</h3>
                      <p className="text-sm text-muted-foreground">
                        Automate common customer service tasks and frequently asked questions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Increase Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Interactive bots keep users engaged with your website longer, increasing the chances of conversion.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reduce Support Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automate answers to common questions, reducing the load on your customer support team.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>24/7 Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Provide instant responses to customer inquiries at any time, even outside business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="enterprise" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Enterprise-Grade Features</h2>
                <p className="text-muted-foreground mb-6">
                  Scale with confidence using our enterprise-ready features designed for large organizations with
                  complex needs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Advanced Security</h3>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade security with data encryption, compliance features, and access controls.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Multi-language Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Support global audiences with bots that can communicate in multiple languages.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Custom Integrations</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with your existing systems like CRM, help desk, and knowledge bases.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/analysis-5000776_1280.png?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Enterprise features"
                  className="rounded-lg border"
                />
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Enterprise Benefits</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Scalability</h4>
                  <p className="text-sm text-muted-foreground">
                    Handle millions of conversations across multiple websites and applications with our scalable
                    infrastructure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dedicated Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Get priority support with a dedicated account manager and technical support team.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Custom Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Work with our team to develop custom features and integrations specific to your business needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Advanced Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Get deep insights into user behavior, conversation patterns, and business impact.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Feature Comparison */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Feature Comparison</h2>
            <p className="max-w-[900px] text-muted-foreground">
              Compare our plans to find the right fit for your business
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Feature</th>
                <th className="p-4 text-center">Basic</th>
                <th className="p-4 text-center">Pro</th>
                <th className="p-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Easy Integration</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Auto-Detection</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Customizable Appearance</td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center">Advanced</td>
                <td className="p-4 text-center">Full</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Custom Conversations</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Analytics</td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center">Advanced</td>
                <td className="p-4 text-center">Enterprise</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Multi-language Support</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">5 languages</td>
                <td className="p-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Website Integrations</td>
                <td className="p-4 text-center">1</td>
                <td className="p-4 text-center">5</td>
                <td className="p-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Custom Integrations</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Dedicated Support</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12 bg-gradient-primary rounded-lg shadow-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to get started?</h2>
          <p className="text-muted-foreground max-w-[600px]">Try our SDK free for 10 days. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Let's Start <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
