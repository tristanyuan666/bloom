'use client';

import Link from 'next/link';
import { ArrowRight, Users, DollarSign, Rocket, Shield, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    icon: Rocket,
    title: 'Create Your Campaign',
    description: 'Set up your project with compelling content, images, and videos. Define your funding goal and timeline.',
    details: [
      'Write a compelling story about your project',
      'Upload high-quality images and videos',
      'Set realistic funding goals and deadlines',
      'Create attractive rewards for backers'
    ]
  },
  {
    icon: Users,
    title: 'Build Your Community',
    description: 'Share your campaign with friends, family, and social networks to build momentum and attract backers.',
    details: [
      'Share on social media platforms',
      'Reach out to your personal network',
      'Engage with potential backers',
      'Update your community regularly'
    ]
  },
  {
    icon: DollarSign,
    title: 'Receive Funding',
    description: 'Collect pledges from backers throughout your campaign. Funds are held securely until your campaign ends.',
    details: [
      'Backers pledge money to your project',
      'Funds are held securely in escrow',
      'Track your progress in real-time',
      'Communicate with your backers'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Deliver on Promises',
    description: 'Once funded, fulfill your rewards and keep your backers updated on your project\'s progress.',
    details: [
      'Fulfill all promised rewards',
      'Keep backers updated regularly',
      'Deliver on time and as promised',
      'Build lasting relationships'
    ]
  }
];

const FEATURES = [
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'All transactions are processed securely with industry-standard encryption and fraud protection.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Build a community around your project with our social features and engagement tools.'
  },
  {
    icon: Rocket,
    title: 'Easy Setup',
    description: 'Get your campaign live in minutes with our intuitive campaign creation tools.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Fees',
    description: 'Clear, upfront fees with no hidden costs. You know exactly what you\'ll pay.'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            How Crowdfunding Works
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Turn your ideas into reality with the power of community funding. 
            Learn how to create, launch, and successfully fund your campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/explore" className="btn-outline">
              Explore Campaigns
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Crowdfunding Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to bring your project to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    {index < STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-4">
                        <div className="w-full h-full bg-blue-600 transform scale-x-0 animate-pulse"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bloom?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to succeed in crowdfunding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how others have used Bloom to bring their ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$45,000</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Coffee Shop</h3>
              <p className="text-gray-600 mb-4">A sustainable coffee shop that sources beans directly from local farmers.</p>
              <div className="text-sm text-gray-500">234 backers • 12 days left</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$28,500</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Home Security</h3>
              <p className="text-gray-600 mb-4">An innovative home security system with AI-powered monitoring.</p>
              <div className="text-sm text-gray-500">156 backers • 8 days left</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$67,200</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational App</h3>
              <p className="text-gray-600 mb-4">A mobile app that makes learning fun and accessible for children.</p>
              <div className="text-sm text-gray-500">421 backers • 5 days left</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have successfully funded their projects on Bloom. 
            Your next big idea is just a campaign away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Create Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/explore" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 