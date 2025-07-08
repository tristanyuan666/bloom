'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Phone, Clock, HelpCircle, BookOpen, Users, Shield, TrendingUp } from 'lucide-react';

const SUPPORT_CATEGORIES = [
  {
    title: 'Campaign Creation',
    description: 'Help with setting up and managing your campaign',
    icon: TrendingUp,
    topics: ['Getting started', 'Campaign setup', 'Rewards creation', 'Media upload']
  },
  {
    title: 'Payment & Fees',
    description: 'Questions about payments, fees, and fund transfers',
    icon: Shield,
    topics: ['Fee structure', 'Payment processing', 'Fund transfers', 'Refunds']
  },
  {
    title: 'Account & Security',
    description: 'Account management and security concerns',
    icon: Users,
    topics: ['Account setup', 'Password reset', 'Security', 'Verification']
  },
  {
    title: 'Technical Issues',
    description: 'Platform bugs and technical problems',
    icon: HelpCircle,
    topics: ['Website issues', 'Mobile app', 'Upload problems', 'Performance']
  }
];

const HELP_RESOURCES = [
  {
    title: 'Help Center',
    description: 'Comprehensive guides and tutorials',
    icon: BookOpen,
    link: '/help',
    color: 'blue'
  },
  {
    title: 'How It Works',
    description: 'Step-by-step platform overview',
    icon: TrendingUp,
    link: '/how-it-works',
    color: 'green'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: HelpCircle,
    link: '/faq',
    color: 'purple'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other creators and backers',
    icon: Users,
    link: '/community',
    color: 'orange'
  }
];

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support request submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            We&apos;re Here to Help
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues you might have.
          </p>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
              <p className="text-sm text-gray-600">support@bloom.com</p>
              <p className="text-xs text-gray-500 mt-1">Response within 2 hours</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">Available 24/7</p>
              <p className="text-xs text-gray-500 mt-1">Instant response</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
              <p className="text-sm text-gray-600">1-800-BLOOM</p>
              <p className="text-xs text-gray-500 mt-1">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Help Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers quickly with our comprehensive help resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HELP_RESOURCES.map((resource, index) => {
              const IconComponent = resource.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600'
              };

              return (
                <a
                  key={index}
                  href={resource.link}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[resource.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Can We Help You With?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a category to get started with your support request
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_CATEGORIES.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.title
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category.title)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.topics.map((topic, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our support team will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {SUPPORT_CATEGORIES.map((category) => (
                    <option key={category.title} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide detailed information about your issue..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Send Message
                  <Mail className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Response Times</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div>
                <div className="text-lg font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">Within 2 hours</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Live Chat</div>
                <div className="text-gray-600">Instant</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Phone</div>
                <div className="text-gray-600">Immediate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 