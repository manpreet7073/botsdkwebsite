import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, ArrowRight, Code, Palette, MessageSquare } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function IntegrationGuidePage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Integration Guide</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to integrate our Bot SDK into your website
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Before You Begin</CardTitle>
                <CardDescription>Make sure you have the following ready:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>
                      An active BotSDK account (sign up for a{" "}
                      <Link href="/register" className="text-primary hover:underline">
                        free trial
                      </Link>{" "}
                      if you don't have one)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Your API key (found in your account dashboard)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Access to your website's HTML code</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Alert>
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                The Bot SDK works with any website, regardless of the technology stack you're using. Whether you're
                using WordPress, Shopify, React, or a custom solution, the integration process is the same.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Integration Steps</h2>

          <div className="grid gap-8">
            {/* Step 1 */}
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-8 w-8 text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Add the SDK to your website</h3>
              </div>
              <p className="text-muted-foreground">
                Add the following script tag to the{" "}
                <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">&lt;head&gt;</code> section of your
                HTML:
              </p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`<script src="https://cdn.botsdk.com/v1/bot.js"></script>`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-8 w-8 text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Initialize the SDK</h3>
              </div>
              <p className="text-muted-foreground">
                Add the initialization code right before the closing{" "}
                <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">&lt;/body&gt;</code> tag:
              </p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`<script>
  BotSDK.init({
    apiKey: "YOUR_API_KEY",
    theme: "light", // or "dark"
    position: "bottom-right", // or "bottom-left", "top-right", "top-left"
    initialMessage: "Hi there! How can I help you today?"
  });
</script>`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground">
                Replace <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">YOUR_API_KEY</code> with your
                actual API key from your BotSDK dashboard.
              </p>
            </div>

            {/* Step 3 */}
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-8 w-8 text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Customize the bot (optional)</h3>
              </div>
              <p className="text-muted-foreground">
                Customize the appearance and behavior of your bot by adding the following code after the initialization:
              </p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`<script>
  BotSDK.customize({
    colors: {
      primary: "#0070f3",
      secondary: "#111827",
      background: "#ffffff",
      text: "#374151"
    },
    borderRadius: "8px",
    fontFamily: "Inter, sans-serif",
    iconStyle: "rounded" // or "square", "circle"
  });
</script>`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-8 w-8 text-sm font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Configure conversation flows (optional)</h3>
              </div>
              <p className="text-muted-foreground">
                Define custom conversation flows to guide users through specific interactions:
              </p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`<script>
  BotSDK.configureFlow({
    greeting: "Hi there! How can I help you today?",
    questions: [
      {
        id: "pricing",
        text: "Tell me about pricing",
        response: "We offer three plans: Basic, Pro, and Enterprise. You can view details on our pricing page."
      },
      {
        id: "features",
        text: "What features do you offer?",
        response: "Our platform includes auto-detection, customization options, and more. Check out our features page for details."
      }
    ],
    fallback: "I'm sorry, I couldn't understand that. Would you like to speak with a human?"
  });
</script>`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework-specific Instructions */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Framework-specific Instructions</h2>

          <Tabs defaultValue="react" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="nextjs">Next.js</TabsTrigger>
              <TabsTrigger value="wordpress">WordPress</TabsTrigger>
              <TabsTrigger value="shopify">Shopify</TabsTrigger>
            </TabsList>

            <TabsContent value="react" className="space-y-4">
              <h3 className="text-xl font-bold">React Integration</h3>
              <p className="text-muted-foreground">
                For React applications, you can create a custom component to load and initialize the Bot SDK:
              </p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`// BotSDK.js
import { useEffect } from 'react';

const BotSDK = ({ apiKey }) => {
  useEffect(() => {
    // Load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.botsdk.com/v1/bot.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize once the script is loaded
    script.onload = () => {
      window.BotSDK.init({
        apiKey,
        theme: 'light',
        position: 'bottom-right',
        initialMessage: 'Hi there! How can I help you today?'
      });
      
      // Optional customization
      window.BotSDK.customize({
        colors: {
          primary: '#0070f3',
          secondary: '#111827',
          background: '#ffffff',
          text: '#374151'
        },
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        iconStyle: 'rounded'
      });
    };

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return null;
};

export default BotSDK;`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mt-4">Then use the component in your app:</p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`// App.js
import BotSDK from './BotSDK';

function App() {
  return (
    <div className="App">
      {/* Your app content */}
      <BotSDK apiKey="YOUR_API_KEY" />
    </div>
  );
}

export default App;`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="nextjs" className="space-y-4">
              <h3 className="text-xl font-bold">Next.js Integration</h3>
              <p className="text-muted-foreground">
                For Next.js applications, create a component that loads the SDK on the client side:
              </p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`// components/BotSDK.js
'use client';

import { useEffect } from 'react';

export default function BotSDK({ apiKey }) {
  useEffect(() => {
    // Load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.botsdk.com/v1/bot.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize once the script is loaded
    script.onload = () => {
      window.BotSDK.init({
        apiKey,
        theme: 'light',
        position: 'bottom-right',
        initialMessage: 'Hi there! How can I help you today?'
      });
    };

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey]);

  return null;
}`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mt-4">Then use it in your layout or page:</p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`// app/layout.js
import BotSDK from '@/components/BotSDK';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BotSDK apiKey="YOUR_API_KEY" />
      </body>
    </html>
  );
}`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="wordpress" className="space-y-4">
              <h3 className="text-xl font-bold">WordPress Integration</h3>
              <p className="text-muted-foreground">
                For WordPress sites, you can add the Bot SDK by editing your theme's{" "}
                <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">header.php</code> and{" "}
                <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">footer.php</code> files:
              </p>
              <div className="grid gap-4">
                <div>
                  <p className="font-medium mb-2">1. Add to header.php:</p>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                      {`<!-- In header.php, before the closing </head> tag -->
<script src="https://cdn.botsdk.com/v1/bot.js"></script>`}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                      aria-label="Copy code"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">2. Add to footer.php:</p>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                      {`<!-- In footer.php, before the closing </body> tag -->
<script>
  BotSDK.init({
    apiKey: "YOUR_API_KEY",
    theme: "light",
    position: "bottom-right",
    initialMessage: "Hi there! How can I help you today?"
  });
</script>`}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                      aria-label="Copy code"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">Alternatively, you can create a simple plugin:</p>
              <div className="relative">
                <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                  {`<?php
/**
 * Plugin Name: BotSDK Integration
 * Description: Integrates BotSDK into your WordPress site
 * Version: 1.0
 * Author: Your Name
 */

function botsdk_enqueue_scripts() {
    wp_enqueue_script('botsdk', 'https://cdn.botsdk.com/v1/bot.js', array(), '1.0', false);
    
    wp_add_inline_script('botsdk', '
        BotSDK.init({
            apiKey: "YOUR_API_KEY",
            theme: "light",
            position: "bottom-right",
            initialMessage: "Hi there! How can I help you today?"
        });
    ', 'after');
}

add_action('wp_enqueue_scripts', 'botsdk_enqueue_scripts');`}
                </pre>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 h-8 w-8 p-0" aria-label="Copy code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="shopify" className="space-y-4">
              <h3 className="text-xl font-bold">Shopify Integration</h3>
              <p className="text-muted-foreground">
                For Shopify stores, you can add the Bot SDK by editing your theme:
              </p>
              <div className="grid gap-4">
                <div>
                  <p className="font-medium mb-2">
                    1. Go to your Shopify admin panel and navigate to "Online Store" &rarr; "Themes"
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">2. Click "Actions" &rarr; "Edit code" for your active theme</p>
                </div>
                <div>
                  <p className="font-medium mb-2">
                    3. Open the theme.liquid file and add the following code before the closing &lt;/head&gt; tag:
                  </p>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                      {`<!-- In theme.liquid, before the closing </head> tag -->
<script src="https://cdn.botsdk.com/v1/bot.js"></script>`}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                      aria-label="Copy code"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">
                    4. Add the initialization code before the closing &lt;/body&gt; tag:
                  </p>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                      {`<!-- In theme.liquid, before the closing </body> tag -->
<script>
  BotSDK.init({
    apiKey: "YOUR_API_KEY",
    theme: "light",
    position: "bottom-right",
    initialMessage: "Hi there! How can I help you with your shopping today?"
  });
</script>`}
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                      aria-label="Copy code"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">5. Save the changes</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advanced Configuration */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Advanced Configuration</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Code className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Custom Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Listen for and respond to bot events:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                  <pre>{`BotSDK.on("conversation:started", (data) => {
  console.log("New conversation", data);
  // Track in analytics
});

BotSDK.on("message:received", (data) => {
  console.log("User message", data.text);
});`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Palette className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Advanced Styling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Apply custom CSS to the bot interface:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                  <pre>{`BotSDK.customize({
  css: \`
    .bot-container {
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    .bot-message {
      font-weight: 500;
    }
  \`
});`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <MessageSquare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Dynamic Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Create dynamic responses based on user input:</p>
                <div className="bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto">
                  <pre>{`BotSDK.addHandler("product", (query) => {
  // Fetch product info from your API
  return fetchProduct(query)
    .then(product => {
      return {
        text: \`\${product.name}: $\${product.price}\`,
        actions: [{
          text: "View Details",
          url: product.url
        }]
      };
    });
});`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Your Integration */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Testing Your Integration</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Verify Your Integration</CardTitle>
                <CardDescription>Follow these steps to ensure your bot is working correctly:</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="grid gap-3 list-decimal pl-5">
                  <li className="pl-2">
                    <span>Visit your website and check that the bot icon appears in the position you specified</span>
                  </li>
                  <li className="pl-2">
                    <span>Click the icon to open the chat interface</span>
                  </li>
                  <li className="pl-2">
                    <span>Verify that the initial message appears correctly</span>
                  </li>
                  <li className="pl-2">
                    <span>Test the conversation flow by sending messages and checking the responses</span>
                  </li>
                  <li className="pl-2">
                    <span>Check that the bot's appearance matches your customization settings</span>
                  </li>
                  <li className="pl-2">
                    <span>Test on different devices and browsers to ensure responsive behavior</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Alert>
              <AlertTitle>Troubleshooting</AlertTitle>
              <AlertDescription>
                If you encounter any issues, check the browser console for error messages. Common issues include
                incorrect API keys, script loading errors, or conflicts with other JavaScript on your page. For
                additional help, visit our{" "}
                <Link href="/support" className="text-primary hover:underline">
                  support page
                </Link>{" "}
                or contact our support team.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Customize Your Bot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Now that your bot is integrated, visit your BotSDK dashboard to:
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Customize appearance and behavior</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Create and manage conversation flows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Set up auto-detection rules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>View analytics and performance data</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/register">
                    <Button className="w-full">Go to Dashboard</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Explore Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Take your bot to the next level with these advanced features:
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Integrate with your CRM or help desk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Set up lead generation forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Create conditional logic for complex conversations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Implement multi-language support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/features">
                    <Button variant="outline" className="w-full">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12 bg-muted rounded-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Need Help with Integration?</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Our support team is ready to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/support">
              <Button size="lg">Visit Support Center</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
