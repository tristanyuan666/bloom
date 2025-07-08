import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How much does it cost to use Bloom?",
        answer: "Bloom charges a 5% platform fee plus a $0.30 processing fee per transaction. This is only charged on successful campaigns, so you only pay when you reach your funding goal. There are no upfront costs to create your campaign."
      },
      {
        question: "What types of businesses can use Bloom?",
        answer: "Bloom is designed for small businesses, startups, and entrepreneurs across all industries. From restaurants and retail to technology and creative projects, we support a wide range of business types. We focus on legitimate business ventures that comply with our terms of service."
      },
      {
        question: "How long does it take to set up a campaign?",
        answer: "You can create a basic campaign in under 30 minutes. However, we recommend taking time to craft compelling content, add high-quality images, and set realistic funding goals. Most successful campaigns spend 1-2 weeks preparing before going live."
      }
    ]
  },
  {
    category: "Campaign Management",
    items: [
      {
        question: "What happens if I don't reach my funding goal?",
        answer: "If you don't reach your funding goal by the end of your campaign, no fees are charged and all pledges are returned to your backers. You can always try again with a new campaign, and many entrepreneurs learn from their first attempt and succeed on their second try."
      },
      {
        question: "Can I run multiple campaigns?",
        answer: "Yes! You can run multiple campaigns on Bloom. Many entrepreneurs use our platform for different projects or to fund different aspects of their business. Each campaign is independent, so you can have several active campaigns at once."
      },
      {
        question: "How do I update my backers on my progress?",
        answer: "You can post updates to your campaign page at any time. These updates are automatically sent to your backers via email and appear on your campaign page. Regular updates help maintain trust and engagement with your community."
      }
    ]
  },
  {
    category: "Funding & Payments",
    items: [
      {
        question: "How long does it take to receive my funds?",
        answer: "Once your campaign ends successfully, funds are typically transferred to your account within 5-7 business days. We use secure payment processing to ensure safe and timely transfers. You'll receive an email notification when the transfer is initiated."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal. All payments are processed securely through our trusted payment partners. Backers can also use Apple Pay and Google Pay on supported devices."
      },
      {
        question: "Are there any restrictions on how I can use the funds?",
        answer: "Funds raised through Bloom should be used for the purposes described in your campaign. While we don't monitor individual spending, we expect you to honor your commitments to backers. Misuse of funds could result in account suspension."
      }
    ]
  },
  {
    category: "Support & Resources",
    items: [
      {
        question: "How do I get help with my campaign?",
        answer: "Our support team is available 24/7 to help you with any questions. We also offer campaign coaching, marketing resources, and best practices to help you succeed. You can contact us through live chat, email, or phone."
      },
      {
        question: "Do you provide marketing support?",
        answer: "Yes! We offer comprehensive marketing resources including social media templates, email campaign guides, and promotional strategies. Our team can also provide personalized advice to help you reach your funding goals."
      },
      {
        question: "Can I get feedback on my campaign before launching?",
        answer: "Absolutely! We offer campaign review services where our experts can provide feedback on your campaign page, funding goal, timeline, and marketing strategy. This service is free and can significantly improve your chances of success."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                <HelpCircle className="h-3 w-3 mr-1" />
                Support Center
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about crowdfunding with Bloom. Can&apos;t find what you&apos;re looking for? Contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* FAQ Categories */}
            <div className="lg:col-span-2 space-y-8">
              {FAQ_ITEMS.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {category.category}
                    </CardTitle>
                    <CardDescription>
                      Common questions about {category.category.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                          <AccordionTrigger className="text-left">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Need Help?
                  </CardTitle>
                  <CardDescription>
                    Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Live Chat:</strong> Available 24/7
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Email:</strong> support@bloom.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Phone:</strong> 1-800-BLOOM-1
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link href="/contact">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Support
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/support">
                        View All Resources
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>
                    Popular support resources and guides
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/how-it-works" className="block text-sm text-primary hover:underline">
                    How Crowdfunding Works
                  </Link>
                  <Link href="/pricing" className="block text-sm text-primary hover:underline">
                    Pricing & Fees
                  </Link>
                  <Link href="/campaign-guide" className="block text-sm text-primary hover:underline">
                    Campaign Creation Guide
                  </Link>
                  <Link href="/success-stories" className="block text-sm text-primary hover:underline">
                    Success Stories
                  </Link>
                  <Link href="/terms" className="block text-sm text-primary hover:underline">
                    Terms of Service
                  </Link>
                  <Link href="/privacy" className="block text-sm text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Stats</CardTitle>
                  <CardDescription>
                    Trusted by thousands of entrepreneurs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Campaigns Funded</span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Raised</span>
                    <span className="font-semibold">$12.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Active Backers</span>
                    <span className="font-semibold">45,231</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Campaign?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of entrepreneurs who have successfully funded their business ideas through crowdfunding.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/create">
                  Create Your Campaign
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/explore">
                  Explore Campaigns
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 