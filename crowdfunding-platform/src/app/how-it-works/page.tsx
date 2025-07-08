import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Share2, 
  DollarSign, 
  Rocket, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";


const steps = [
  {
    step: "1",
    title: "Create Your Campaign",
    description: "Set up your project with compelling story, images, and funding goal",
    details: [
      "Write a compelling campaign story",
      "Upload high-quality images and videos",
      "Set realistic funding goals and timeline",
      "Create attractive reward tiers",
      "Add your business details and credentials"
    ],
    icon: Target,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "2",
    title: "Share & Promote",
    description: "Spread the word to your network and social media followers",
    details: [
      "Share on social media platforms",
      "Email your network and contacts",
      "Use our built-in sharing tools",
      "Engage with potential backers",
      "Update your campaign regularly"
    ],
    icon: Share2,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "3",
    title: "Receive Funding",
    description: "Collect pledges from backers throughout your campaign period",
    details: [
      "Backers pledge support with rewards",
      "Funds are held securely during campaign",
      "Track progress in real-time",
      "Communicate with your backers",
      "Provide updates and milestones"
    ],
    icon: DollarSign,
    color: "from-green-500 to-green-600"
  },
  {
    step: "4",
    title: "Launch Your Business",
    description: "Get your funds and start building your dream business",
    details: [
      "Receive funds if goal is reached",
      "Fulfill rewards to your backers",
      "Start building your business",
      "Keep backers updated on progress",
      "Build lasting relationships"
    ],
    icon: Rocket,
    color: "from-orange-500 to-orange-600"
  }
];

const features = [
  {
    title: "Easy Setup",
    description: "Create your campaign in minutes with our intuitive builder",
    icon: Target
  },
  {
    title: "Secure Payments",
    description: "Bank-level security with PCI compliance and fraud protection",
    icon: Shield
  },
  {
    title: "Real-time Analytics",
    description: "Track your campaign performance with detailed insights",
    icon: TrendingUp
  },
  {
    title: "Expert Support",
    description: "Get help from our team of crowdfunding experts",
    icon: Users
  },
  {
    title: "Quick Payouts",
    description: "Receive your funds within 2-5 business days",
    icon: Clock
  },
  {
    title: "Community Building",
    description: "Build lasting relationships with your backers",
    icon: Star
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Eco-Friendly Coffee Shop",
    amount: "$35,000",
    content: "Bloom made it incredibly easy to launch our campaign. The platform is intuitive and the support team was amazing throughout the process.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Mike Chen",
    business: "Smart Home Security Device",
    amount: "$68,000",
    content: "The analytics and insights helped us optimize our campaign strategy. We exceeded our goal by 40%!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emma Davis",
    business: "Artisan Bakery Expansion",
    amount: "$28,000",
    content: "The community support was incredible. Our backers became our biggest advocates and customers.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get funded in 4 simple steps. Our platform makes it easy for entrepreneurs 
              to turn their dreams into reality through community-powered funding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#56D08D] hover:bg-green-600">
                Start Your Campaign
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From idea to funding in just 4 simple steps
            </p>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 text-center lg:text-left">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-[#56D08D] mr-3 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-gray-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Step {step.step} Preview
                        </h4>
                        <p className="text-gray-600">
                          This is what your campaign will look like at this stage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Bloom?
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

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how entrepreneurs like you have successfully funded their businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about crowdfunding with Bloom
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much does it cost to create a campaign?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creating a campaign on Bloom is completely free. We only charge a 5% fee plus 30¢ per donation 
                  when your campaign is successfully funded.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens if I don't reach my funding goal?</CardTitle>
              </CardHeader>
              <CardContent>
                                   <p className="text-gray-600">
                     If you don&apos;t reach your funding goal, no fees are charged and backers are not charged. 
                     You can always try again with a revised campaign strategy.
                   </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does it take to receive my funds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Once your campaign ends successfully, you&apos;ll receive your funds within 2-5 business days 
                  after the campaign period ends.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I update my campaign after launching?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! You can update your campaign description, add new rewards, and post updates to keep 
                  your backers informed throughout the campaign.
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
            Join thousands of entrepreneurs who have successfully raised capital and built their dreams with Bloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#56D08D] hover:bg-gray-100">
              Start Your Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#56D08D]">
              Explore Campaigns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 