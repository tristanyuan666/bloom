"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Zap, 
  Star, 
  Flame, 
  Crown, 
  Rocket, 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye, 
  DollarSign,
  CheckCircle,
  Shield,
  Clock,
  Target
} from "lucide-react";
import TypewriterText from "@/components/ui/typewriter";
import AnimatedBackground from "@/components/ui/animated-background";

// Mock data for campaigns
const featuredCampaigns = [
  {
    id: 1,
    title: "Eco-Friendly Coffee Shop",
    description: "Opening a sustainable coffee shop in downtown",
    category: "Food & Beverage",
    location: "San Francisco, CA",
    goal: 50000,
    raised: 35000,
    backers: 234,
    daysLeft: 15,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    creator: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: 2,
    title: "Smart Home Security Device",
    description: "AI-powered security camera for modern homes",
    category: "Technology",
    location: "Austin, TX",
    goal: 75000,
    raised: 68000,
    backers: 456,
    daysLeft: 8,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    creator: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: 3,
    title: "Artisan Bakery Expansion",
    description: "Expanding our beloved local bakery",
    category: "Food & Beverage",
    location: "Portland, OR",
    goal: 30000,
    raised: 28000,
    backers: 189,
    daysLeft: 22,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    creator: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  }
];

const testimonials = [
  {
    name: "Alex Rodriguez",
    role: "Restaurant Owner",
    content: "Bloom helped me raise $45,000 to open my dream restaurant. The platform is incredibly user-friendly and the community support was amazing.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    role: "Tech Startup Founder",
    content: "We raised $120,000 for our AI startup through Bloom. The platform's tools and analytics helped us optimize our campaign perfectly.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Fashion Designer",
    content: "Bloom made it possible for me to launch my sustainable fashion line. The community engagement and support exceeded my expectations.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

const stats = [
  { label: "Campaigns Funded", value: "2,500+", icon: Target },
  { label: "Total Raised", value: "$45M+", icon: DollarSign },
  { label: "Active Backers", value: "150K+", icon: Users },
  { label: "Success Rate", value: "87%", icon: CheckCircle }
];

const benefits = [
  {
    title: "Low Fees",
    description: "Only 5% + 30¢ per donation. Keep more of what you raise.",
    icon: DollarSign
  },
  {
    title: "Secure Payments",
    description: "Bank-level security with PCI compliance and fraud protection.",
    icon: Shield
  },
  {
    title: "Quick Payouts",
    description: "Get your funds within 2-5 business days after campaign ends.",
    icon: Clock
  },
  {
    title: "Expert Support",
    description: "Dedicated team to help you succeed with your campaign.",
    icon: Users
  }
];

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden hero-gradient">
        <AnimatedBackground isMounted={isMounted} />
        
        <div className="relative z-10 pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-6xl mx-auto">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-2 glass-premium mb-8 animate-fade-in hover-lift hover-target interactive-element button">
                <Sparkles className="w-4 h-4 text-[#56D08D] mr-2" />
                <span className="text-gray-800 text-sm font-medium">
                  Trusted by 50,000+ Entrepreneurs
                </span>
              </div>

              {/* Enhanced Typewriter Headline */}
              <div className="mb-6">
                <TypewriterText isMounted={isMounted} />
              </div>

              {/* Premium Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-10 max-w-5xl mx-auto leading-relaxed animate-slide-up px-4 sm:px-0">
                Transform your business idea into reality with{" "}
                <span className="gradient-text font-medium">
                  community-powered funding
                </span>
                . Join thousands of entrepreneurs who have successfully raised capital and built their dreams.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 animate-slide-up px-4 sm:px-0">
                <Button size="lg" className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#56D08D] to-green-600 text-white font-semibold text-base rounded-xl shadow-lg hover-lift overflow-hidden transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Campaign
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#56D08D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <Button variant="outline" size="lg" className="group glass-premium w-full sm:w-auto px-8 py-4 text-gray-800 font-semibold text-base transition-all duration-300 hover:bg-white/60 flex items-center justify-center gap-3 hover-lift rounded-xl">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <span>Watch Demo</span>
                </Button>
              </div>

              {/* Stats Counter */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 animate-slide-up">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="glass-premium p-6 text-center hover-lift card-3d micro-bounce group transform-3d hover-target interactive-element card">
                      <Icon className="w-8 h-8 text-[#56D08D] mx-auto mb-3" />
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Campaigns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover inspiring projects from entrepreneurs just like you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="group hover-lift transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {campaign.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {campaign.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 mb-4">
                    {campaign.description}
                  </CardDescription>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>${campaign.raised.toLocaleString()} raised</span>
                      <span>{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#56D08D] to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{campaign.backers} backers</span>
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={campaign.creator.avatar} />
                        <AvatarFallback>{campaign.creator.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{campaign.creator.name}</span>
                    </div>
                    <Button size="sm" className="bg-[#56D08D] hover:bg-green-600">
                      Back Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/explore">
                Explore All Campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get funded in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Campaign",
                description: "Set up your project with compelling story, images, and funding goal",
                icon: Target
              },
              {
                step: "2",
                title: "Share & Promote",
                description: "Spread the word to your network and social media followers",
                icon: Share2
              },
              {
                step: "3",
                title: "Receive Funding",
                description: "Collect pledges from backers throughout your campaign period",
                icon: DollarSign
              },
              {
                step: "4",
                title: "Launch Your Business",
                description: "Get your funds and start building your dream business",
                icon: Rocket
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bloom?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to successfully fund your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from entrepreneurs who turned their dreams into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#56D08D] to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fund Your Dream?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have successfully raised capital and built their businesses with Bloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#56D08D] hover:bg-gray-100">
              Start Your Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#56D08D]">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
