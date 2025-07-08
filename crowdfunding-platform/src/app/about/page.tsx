'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Shield, Globe, Zap, ArrowRight } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    bio: 'Former VP of Product at Stripe. Passionate about empowering small businesses through technology.',
    image: '/team/sarah.jpg',
    linkedin: '#'
  },
  {
    name: 'Mike Chen',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer with 15+ years building scalable platforms. Led engineering teams at multiple startups.',
    image: '/team/mike.jpg',
    linkedin: '#'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Head of Operations',
    bio: 'Operations expert with deep experience in customer success and business development.',
    image: '/team/emma.jpg',
    linkedin: '#'
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    bio: 'Product leader focused on user experience and growth. Previously at Airbnb and Uber.',
    image: '/team/david.jpg',
    linkedin: '#'
  }
];

const VALUES = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'We believe in the power of community and human connection. Every campaign is a story of people coming together to support a vision.'
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We maintain the highest standards of security and transparency. Your trust is our most valuable asset.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We\'re building a platform that connects entrepreneurs worldwide, creating opportunities across borders and cultures.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously innovate to provide the best tools and experience for both creators and backers.'
  }
];

const MILESTONES = [
  { year: '2020', title: 'Founded', description: 'Bloom was founded with a mission to democratize access to capital for small businesses.' },
  { year: '2021', title: 'First Campaign', description: 'Our first successful campaign raised $50,000 for a local coffee shop.' },
  { year: '2022', title: '1,000 Campaigns', description: 'Reached our first 1,000 successful campaigns with $10M+ in funding.' },
  { year: '2023', title: 'Platform Launch', description: 'Launched our comprehensive platform with advanced features and analytics.' },
  { year: '2024', title: 'Expansion', description: 'Expanding to serve entrepreneurs across all industries and regions.' }
];

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About Bloom
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We&apos;re on a mission to democratize access to capital for small businesses and entrepreneurs worldwide. 
            Through our innovative crowdfunding platform, we connect visionary creators with passionate supporters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Traditional funding sources often overlook small businesses and entrepreneurs. We believe that great ideas 
                deserve a chance to succeed, regardless of where they come from or who has access to traditional capital.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Bloom exists to bridge this gap. We provide the tools, platform, and community that entrepreneurs need 
                to turn their visions into reality. Every successful campaign represents not just funding, but validation, 
                community building, and the first step toward sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
                  <div className="text-gray-600">Campaigns Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$12.4M</div>
                  <div className="text-gray-600">Total Raised</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Mission Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Bloom who are dedicated to empowering entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-2xl mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to empowering thousands of entrepreneurs worldwide
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {MILESTONES.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re an entrepreneur looking to fund your dream or a supporter wanting to make a difference, 
              we invite you to be part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/create" className="btn-primary text-lg px-8 py-4">
                Start Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/campaigns" className="btn-outline text-lg px-8 py-4">
                Discover Campaigns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 