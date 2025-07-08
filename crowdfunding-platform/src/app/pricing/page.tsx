import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star,
  Target
} from "lucide-react";

const features = [
  {
    title: "No Upfront Costs",
    description: "Create and launch your campaign completely free",
    icon: DollarSign
  },
  {
    title: "Secure Payments",
    description: "Bank-level security with PCI compliance",
    icon: Shield
  },
  {
    title: "Quick Payouts",
    description: "Receive funds within 2-5 business days",
    icon: Clock
  },
  {
    title: "Expert Support",
    description: "Dedicated team to help you succeed",
    icon: Users
  },
  {
    title: "Real-time Analytics",
    description: "Track your campaign performance",
    icon: TrendingUp
  },
  {
    title: "Community Building",
    description: "Build lasting relationships with backers",
    icon: Target
  }
];

const comparison = [
  {
    feature: "Platform Fee",
    bloom: "5% + 30¢",
    competitors: ["8-10%", "5% + 30¢", "3-5% + fees"]
  },
  {
    feature: "Payment Processing",
    bloom: "Included",
    competitors: ["2.9% + 30¢", "2.9% + 30¢", "2.9% + 30¢"]
  },
  {
    feature: "Setup Fee",
    bloom: "Free",
    competitors: ["$299", "Free", "$99"]
  },
  {
    feature: "Monthly Fee",
    bloom: "None",
    competitors: ["$25/month", "None", "$15/month"]
  },
  {
    feature: "Success Rate",
    bloom: "87%",
    competitors: ["65%", "70%", "75%"]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Eco-Friendly Coffee Shop",
    amount: "$35,000",
    content: "The transparent fee structure was exactly what we needed. No hidden costs, just clear pricing.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Mike Chen",
    business: "Smart Home Security Device",
    amount: "$68,000",
    content: "Bloom's fees are the most competitive in the industry. We saved thousands compared to other platforms.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Simple, transparent fees with no hidden costs. You only pay when you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#56D08D] hover:bg-green-600">
                Start Your Campaign
              </Button>
              <Button variant="outline" size="lg">
                View Fee Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Fee Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear, upfront pricing with no surprises
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  5% + 30¢ per donation
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Only charged when your campaign is successfully funded
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#56D08D] mb-2">$0</div>
                    <div className="text-gray-600">Setup Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#56D08D] mb-2">$0</div>
                    <div className="text-gray-600">Monthly Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#56D08D] mb-2">$0</div>
                    <div className="text-gray-600">Hidden Costs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fee Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly how much you'll keep from your campaign
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Campaign</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Campaign Goal:</span>
                      <span className="font-semibold">$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Raised:</span>
                      <span className="font-semibold">$50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of Donations:</span>
                      <span className="font-semibold">500</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>You Keep:</span>
                      <span className="text-[#56D08D]">$47,350</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform Fee (5%):</span>
                      <span className="font-semibold">$2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction Fees (30¢ × 500):</span>
                      <span className="font-semibold">$150</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Fees:</span>
                      <span className="text-red-600">$2,650</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      That's only 5.3% of your total raised amount!
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to successfully fund your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why Bloom offers the best value for entrepreneurs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Platform Comparison</CardTitle>
                <CardDescription>
                  Total fees for a $50,000 campaign with 500 donations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                        <th className="text-center py-3 px-4 font-semibold text-[#56D08D]">Bloom</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-600">Competitor A</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-600">Competitor B</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-900">{row.feature}</td>
                          <td className="py-3 px-4 text-center font-semibold text-[#56D08D]">{row.bloom}</td>
                          <td className="py-3 px-4 text-center text-gray-600">{row.competitors[0]}</td>
                          <td className="py-3 px-4 text-center text-gray-600">{row.competitors[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entrepreneurs love our transparent pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                                     <p className="text-gray-700 mb-4 italic">
                     &quot;{testimonial.content}&quot;
                   </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-[#56D08D]/10 text-[#56D08D]">
                      {testimonial.amount} raised
                    </Badge>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">When do I pay the fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fees are only charged when your campaign is successfully funded. If you don't reach your goal, 
                  no fees are charged and backers are not charged.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there any hidden costs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No hidden costs! Our 5% + 30¢ per donation fee is all-inclusive. This covers platform fees, 
                  payment processing, and all the tools you need to succeed.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I receive my funds?</CardTitle>
              </CardHeader>
              <CardContent>
                                   <p className="text-gray-600">
                     Once your campaign ends successfully, we&apos;ll process your funds and send them to your bank 
                     account within 2-5 business days.
                   </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I change my funding goal?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can update your funding goal before your campaign launches. Once launched, the goal 
                  cannot be changed to maintain transparency with backers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#56D08D] to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have successfully raised capital with our transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#56D08D] hover:bg-gray-100">
              Start Your Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#56D08D]">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 