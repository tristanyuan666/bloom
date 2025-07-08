import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Heart, 
  Shield, 
  TrendingUp, 
  Award,
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Campaigns Funded", value: "2,500+", icon: Target },
  { label: "Total Raised", value: "$45M+", icon: TrendingUp },
  { label: "Active Backers", value: "150K+", icon: Users },
  { label: "Success Rate", value: "87%", icon: Award }
];

const values = [
  {
    title: "Community First",
    description: "We believe in the power of community to bring great ideas to life.",
    icon: Users
  },
  {
    title: "Transparency",
    description: "Clear, honest communication about fees, processes, and expectations.",
    icon: Shield
  },
  {
    title: "Innovation",
    description: "Constantly improving our platform to better serve entrepreneurs.",
    icon: TrendingUp
  },
  {
    title: "Impact",
    description: "Focusing on projects that create positive change in communities.",
    icon: Heart
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    bio: "Former VP at Stripe, passionate about democratizing access to capital for small businesses.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    bio: "Ex-Google engineer with 15+ years building scalable platforms and payment systems.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "Head of Operations",
    bio: "Former operations lead at Kickstarter, expert in campaign management and creator success.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Head of Product",
    bio: "Product leader with experience at Airbnb and Uber, focused on user experience and growth.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Bloom Founded",
    description: "Started with a mission to democratize access to capital for small businesses."
  },
  {
    year: "2021",
    title: "First 100 Campaigns",
    description: "Reached our first milestone of 100 successfully funded campaigns."
  },
  {
    year: "2022",
    title: "$10M Raised",
    description: "Helped entrepreneurs raise over $10 million in total funding."
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $25M in Series A to expand our platform and team."
  },
  {
    year: "2024",
    title: "50,000+ Entrepreneurs",
    description: "Now serving over 50,000 entrepreneurs across the United States."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Bloom
            </h1>
                          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We&apos;re on a mission to democratize access to capital for small businesses and entrepreneurs. 
                Since 2020, we&apos;ve helped thousands of dreamers turn their ideas into reality through 
                community-powered funding.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#56D08D] hover:bg-green-600">
                Start Your Campaign
              </Button>
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
                             <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 We believe that great ideas shouldn&apos;t be limited by access to capital. Every entrepreneur 
                 deserves the opportunity to bring their vision to life, regardless of their background 
                 or connections.
               </p>
                             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Bloom connects passionate entrepreneurs with supportive communities who believe in their 
                 vision. Through our platform, we&apos;ve helped create thousands of jobs, launched innovative 
                 products, and built stronger communities across the country.
               </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-[#56D08D] hover:bg-green-600">
                  Learn More
                </Button>
                <Link href="/how-it-works" className="text-[#56D08D] hover:text-green-600 font-medium">
                  How It Works <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Bloom who are dedicated to helping entrepreneurs succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-[#56D08D] font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to democratize access to capital
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
             </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@bloom.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">1-800-BLOOM-1</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#56D08D] to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have successfully raised capital and built their dreams with Bloom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#56D08D] hover:bg-gray-100">
              Start Your Campaign
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