'use client';

import Link from 'next/link';
import { Check, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '5%',
    description: 'Perfect for first-time creators',
    features: [
      'Standard campaign tools',
      'Basic analytics',
      'Email support',
      'Social media integration',
      'Payment processing',
      '30-day campaign duration'
    ],
    popular: false,
    cta: 'Start Free'
  },
  {
    name: 'Professional',
    price: '4%',
    description: 'For serious creators and growing businesses',
    features: [
      'Everything in Starter',
      'Advanced analytics dashboard',
      'Priority support',
      'Custom branding options',
      'Multiple reward tiers',
      '60-day campaign duration',
      'Backer management tools',
      'Marketing resources'
    ],
    popular: true,
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: '3%',
    description: 'For established businesses and high-volume campaigns',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'Advanced security features',
      '90-day campaign duration',
      'API access',
      'Custom reporting',
      'Team collaboration tools'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

const FEATURES = [
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'All transactions are processed with bank-level security and fraud protection.'
  },
  {
    icon: Zap,
    title: 'Fast Payouts',
    description: 'Receive your funds quickly with our streamlined payment processing system.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Access to our community of creators and backers for networking and support.'
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We believe in fair, transparent pricing. You only pay when you succeed, 
            and our fees are among the lowest in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the plan that best fits your project needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-500 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">platform fee</span>
                  </div>
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/create'}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Our Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Here's exactly what you'll pay and when.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Campaign Creators</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700">Platform Fee</span>
                  <span className="font-semibold text-gray-900">3-5% of funds raised</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700">Payment Processing</span>
                  <span className="font-semibold text-gray-900">2.9% + $0.30 per transaction</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700">Setup Fee</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-700">Payout Fee</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Backers</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700">Platform Fee</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700">Payment Processing</span>
                  <span className="font-semibold text-gray-900">2.9% + $0.30 per transaction</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-700">Account Setup</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-700">Support</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every plan includes these essential features to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                When do I pay the platform fee?
              </h3>
              <p className="text-gray-600">
                Platform fees are only charged on successfully funded campaigns. If your campaign doesn't reach its goal, you pay nothing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-600">
                No hidden fees. Our pricing is completely transparent. You'll see exactly what you'll pay before you launch your campaign.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan after launching?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time during your campaign. Downgrades will take effect at the end of your current campaign.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly do I receive my funds?
              </h3>
              <p className="text-gray-600">
                Funds are typically transferred to your account within 5-7 business days after your campaign ends successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Campaign?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have successfully funded their projects. 
            Start your journey today with our simple, transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Create Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 