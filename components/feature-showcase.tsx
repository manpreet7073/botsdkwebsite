import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Settings, Palette } from "lucide-react"

export default function FeatureShowcase() {
  return (
    <section className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our SDK makes it easy to add powerful bots to your website in just a few steps
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="integrate" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="integrate" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Integrate</span>
            </TabsTrigger>
            <TabsTrigger value="customize" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Customize</span>
            </TabsTrigger>
            <TabsTrigger value="configure" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Configure</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="integrate" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Easy Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Add our SDK to your website with just a few lines of code. Our script automatically initializes and
                  configures the bot based on your settings.
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre>{`<script src="https://cdn.botsdk.com/v1/bot.js"></script>
<script>
  BotSDK.init({
    apiKey: "YOUR_API_KEY",
    theme: "light",
    position: "bottom-right"
  });
</script>`}</pre>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/network-7174082_1280.png?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Integration example"
                  className="rounded-lg border"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customize" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Image
                  src="/artificial-intelligence-8953936_1280.png?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Customization example"
                  className="rounded-lg border"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Customize Appearance</h3>
                <p className="text-muted-foreground mb-6">
                  Tailor the bot's appearance to match your brand identity. Customize colors, themes, fonts, and more to
                  create a seamless experience.
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre>{`BotSDK.customize({
  colors: {
    primary: "#0070f3",
    secondary: "#111827",
    background: "#ffffff",
    text: "#374151"
  },
  borderRadius: "8px",
  fontFamily: "Inter, sans-serif",
  iconStyle: "rounded"
});`}</pre>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="configure" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Configure Conversations</h3>
                <p className="text-muted-foreground mb-6">
                  Create custom conversation flows tailored to your users' needs. Define questions, responses, and
                  actions to guide users through their journey.
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre>{`BotSDK.configureFlow({
  greeting: "Hi there! How can I help you today?",
  questions: [
    {
      id: "pricing",
      text: "Tell me about pricing",
      response: "We offer three plans: Basic, Pro, and Enterprise."
    },
    {
      id: "features",
      text: "What features do you offer?",
      response: "Our platform includes..."
    }
  ],
  fallback: "I'm sorry, I couldn't understand that."
});`}</pre>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/analysis-5000776_1280.png?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Configuration example"
                  className="rounded-lg border"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
