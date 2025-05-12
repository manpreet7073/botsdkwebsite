import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for your business
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="container px-4 md:px-6">
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-3">
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
                  <ul className="grid gap-3">
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
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Multi-language support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Custom integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/register?plan=basic" className="w-full">
                    <Button className="w-full">Start Free Trial</Button>
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
                  <ul className="grid gap-3">
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
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>5 languages support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Limited custom integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/register?plan=pro" className="w-full">
                    <Button className="w-full">Start Free Trial</Button>
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
                  <ul className="grid gap-3">
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
                      <span>Enterprise analytics & reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Unlimited languages</span>
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
          </TabsContent>

          <TabsContent value="annual" className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Basic Plan Annual */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For small websites and startups</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $23<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Billed annually ($276/year)</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
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
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Multi-language support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Custom integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/register?plan=basic-annual" className="w-full">
                    <Button className="w-full">Start Free Trial</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Pro Plan Annual */}
              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <div className="text-sm font-medium uppercase text-primary-foreground/70">Most Popular</div>
                  <CardTitle className="text-primary-foreground">Pro</CardTitle>
                  <CardDescription className="text-primary-foreground/90">For growing businesses</CardDescription>
                  <div className="mt-4 text-4xl font-bold text-primary-foreground">
                    $63<span className="text-sm font-normal text-primary-foreground/70">/month</span>
                  </div>
                  <p className="text-sm text-primary-foreground/70">Billed annually ($756/year)</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
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
                      <span>Advanced analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>5 languages support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Limited custom integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/register?plan=pro-annual" className="w-full">
                    <Button className="w-full">Start Free Trial</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Enterprise Plan Annual */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Custom</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3">
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
                      <span>Enterprise analytics & reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Unlimited languages</span>
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
          </TabsContent>
        </Tabs>
      </section>

      {/* Feature Comparison */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Compare Plans</h2>
            <p className="max-w-[900px] text-muted-foreground">
              Detailed feature comparison to help you choose the right plan
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
                <td className="p-4 font-medium">Monthly Price</td>
                <td className="p-4 text-center">$29</td>
                <td className="p-4 text-center">$79</td>
                <td className="p-4 text-center">Custom</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Annual Price (per month)</td>
                <td className="p-4 text-center">$23</td>
                <td className="p-4 text-center">$63</td>
                <td className="p-4 text-center">Custom</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Free Trial</td>
                <td className="p-4 text-center">10 days</td>
                <td className="p-4 text-center">10 days</td>
                <td className="p-4 text-center">10 days</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Monthly Conversations</td>
                <td className="p-4 text-center">5,000</td>
                <td className="p-4 text-center">25,000</td>
                <td className="p-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Website Integrations</td>
                <td className="p-4 text-center">1</td>
                <td className="p-4 text-center">5</td>
                <td className="p-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium flex items-center gap-1">
                  Customization
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Ability to customize the bot's appearance, behavior, and conversation flows
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center">Advanced</td>
                <td className="p-4 text-center">Full</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Analytics</td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center">Advanced</td>
                <td className="p-4 text-center">Enterprise</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Support</td>
                <td className="p-4 text-center">Email</td>
                <td className="p-4 text-center">Priority Email & Chat</td>
                <td className="p-4 text-center">24/7 Dedicated</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Multi-language Support</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">5 languages</td>
                <td className="p-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Custom Integrations</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">Limited</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Auto-Detection</td>
                <td className="p-4 text-center">Basic</td>
                <td className="p-4 text-center">Advanced</td>
                <td className="p-4 text-center">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Custom Development</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">SLA</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">—</td>
                <td className="p-4 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground">
              Find answers to common questions about our pricing and plans
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">What happens after my free trial ends?</h3>
              <p className="text-muted-foreground">
                After your 10-day free trial ends, you'll be prompted to select a plan and enter your payment
                information to continue using the service. We'll send you reminders before your trial expires.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be
                available immediately. When downgrading, the changes will take effect at the start of your next billing
                cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, Google Pay, PhonePe, and Stripe. For Enterprise plans, we also offer
                invoice-based payments.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">What counts as a "conversation"?</h3>
              <p className="text-muted-foreground">
                A conversation is defined as a single session between a user and your bot, which may include multiple
                messages back and forth. Each new visitor who interacts with your bot counts as one conversation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Do you offer discounts for non-profits or educational institutions?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact
                our sales team for more information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What happens if I exceed my monthly conversation limit?</h3>
              <p className="text-muted-foreground">
                If you exceed your monthly conversation limit, you'll be charged a small fee for each additional
                conversation. We'll notify you when you're approaching your limit so you can decide whether to upgrade
                your plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12 bg-gradient-to-br from-primary via-purple-600 to-purple-700 text-primary-foreground rounded-lg shadow-xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">
            Ready to transform your website with intelligent bots?
          </h2>
          <p className="text-primary-foreground/90 max-w-[600px]">
            Start your 10-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Start Free Trial
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
      </section>
    </div>
  )
}
