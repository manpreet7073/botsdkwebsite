import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content:
        "The BotSDK has transformed how we interact with our customers. Integration was seamless, and the customization options allowed us to create a bot that perfectly matches our brand.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Lead Developer at StartupX",
      content:
        "As a developer, I appreciate how well-documented and easy to implement the SDK is. It took me less than an hour to get our bot up and running with custom conversation flows.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at E-commerce Plus",
      content:
        "Our customer support inquiries decreased by 35% after implementing the bot on our website. The auto-detection feature is particularly impressive.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
    },
  ]

  return (
    <section className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Trusted by developers and businesses worldwide
          </p>
        </div>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
