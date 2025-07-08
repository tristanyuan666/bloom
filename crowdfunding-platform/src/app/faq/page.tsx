'use client';

import { useState } from 'react';
import { Search, ChevronDown, ChevronRight, DollarSign, Gift, Shield, HelpCircle } from 'lucide-react';

const FAQ_CATEGORIES = [
  {
    id: 'general',
    title: 'General',
    icon: HelpCircle,
    questions: [
      {
        question: "What is Bloom?",
        answer: "Bloom is a crowdfunding platform designed specifically for small businesses and entrepreneurs. We help you raise capital from friends, family, and supporters to turn your business ideas into reality."
      },
      {
        question: "How is Bloom different from other crowdfunding platforms?",
        answer: "Bloom is specifically designed for small businesses and entrepreneurs, with features like business-focused categories, professional support, and tools tailored for business growth. We also offer transparent pricing (5% + $0.30) and only charge fees on successful campaigns."
      },
      {
        question: "Is Bloom available internationally?",
        answer: "Currently, Bloom is available in the United States. We're working on expanding to other countries and will announce new regions as they become available."
      },
      {
        question: "What types of businesses can use Bloom?",
        answer: "Bloom supports a wide range of business types including restaurants, retail, technology, fashion, crafts, agriculture, education, and more. We're designed for small businesses, startups, and entrepreneurs across all industries."
      }
    ]
  },
  {
    id: 'campaigns',
    title: 'Campaigns',
    icon: DollarSign,
    questions: [
      {
        question: "How do I create a campaign?",
        answer: "Creating a campaign is easy! Sign up for an account, click 'Start a Campaign', and follow our step-by-step process. You'll need to provide campaign details, set your funding goal, create rewards, and upload media. Our team will review your campaign before it goes live."
      },
      {
        question: "How long can my campaign run?",
        answer: "Campaigns can run for 1-60 days. We recommend 30-45 days for most campaigns, as this gives you enough time to build momentum while maintaining urgency."
      },
      {
        question: "Can I change my funding goal after launching?",
        answer: "You can adjust your funding goal during the first 48 hours of your campaign. After that, the goal is locked to maintain trust with your backers."
      },
      {
        question: "What happens if I don't reach my funding goal?",
        answer: "If you don't reach your funding goal by the end of your campaign, no fees are charged and all pledges are returned to your backers. You can always try again with a new campaign."
      },
      {
        question: "Can I run multiple campaigns?",
        answer: "Yes! You can run multiple campaigns on Bloom. Many entrepreneurs use our platform for different projects or to fund different aspects of their business."
      },
      {
        question: "How do I promote my campaign?",
        answer: "Use our built-in social media tools, send personalized email campaigns, engage with your community, and provide regular updates to your backers. We also offer marketing resources and best practices to help you succeed."
      }
    ]
  },
  {
    id: 'rewards',
    title: 'Rewards',
    icon: Gift,
    questions: [
      {
        question: "What are campaign rewards?",
        answer: "Rewards are perks or items that backers receive in exchange for their support. They can include early access to products, exclusive experiences, merchandise, or special recognition."
      },
      {
        question: "How do I create compelling rewards?",
        answer: "Create rewards that are valuable to your backers and align with your business. Consider offering early access, exclusive items, or unique experiences. Make sure to set realistic delivery timelines."
      },
      {
        question: "Can I offer limited quantity rewards?",
        answer: "Yes! You can set quantity limits on rewards to create urgency and exclusivity. This can help drive more pledges and create a sense of scarcity."
      },
      {
        question: "When do I need to deliver rewards?",
        answer: "You should deliver rewards within the timeframe you specified in your campaign. Most creators deliver rewards 1-3 months after their campaign ends, depending on the type of reward."
      },
      {
        question: "What if I can't deliver a reward on time?",
        answer: "Communicate with your backers immediately if there are delays. Be transparent about the situation and provide regular updates. Most backers are understanding if you keep them informed."
      }
    ]
  },
  {
    id: 'payments',
    title: 'Payments & Fees',
    icon: DollarSign,
    questions: [
      {
        question: "How much does it cost to use Bloom?",
        answer: "Bloom charges a 5% platform fee plus a $0.30 processing fee per transaction. This is only charged on successful campaigns, so you only pay when you reach your funding goal."
      },
      {
        question: "When are fees charged?",
        answer: "Fees are only charged when your campaign successfully reaches its funding goal. If you don't reach your goal, no fees are charged and all pledges are returned to your backers."
      },
      {
        question: "How long does it take to receive my funds?",
        answer: "Once your campaign ends successfully, funds are typically transferred to your account within 5-7 business days. We use secure payment processing to ensure safe and timely transfers."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and debit cards. We also support Apple Pay and Google Pay for mobile users."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes! We use bank-level security with SSL encryption and are PCI compliant. Your payment information is never stored on our servers and is processed securely through our payment partners."
      },
      {
        question: "Can I get a refund?",
        answer: "If a campaign doesn't reach its funding goal, all pledges are automatically refunded. For successful campaigns, refunds are handled on a case-by-case basis by the campaign creator."
      }
    ]
  },
  {
    id: 'support',
    title: 'Support & Safety',
    icon: Shield,
    questions: [
      {
        question: "How do I get help with my campaign?",
        answer: "Our support team is available 24/7 to help you with any questions. We also offer campaign coaching, marketing resources, and best practices to help you succeed."
      },
      {
        question: "What if someone reports my campaign?",
        answer: "We take all reports seriously and investigate them thoroughly. If we find that a campaign violates our terms of service, we may suspend or remove it. We always communicate with campaign creators before taking action."
      },
      {
        question: "How do you verify campaign creators?",
        answer: "We verify campaign creators through multiple methods including identity verification, business documentation, and social media presence. Verified creators receive a badge on their profile."
      },
      {
        question: "What happens if a creator doesn't deliver rewards?",
        answer: "We have a robust system to ensure creators deliver on their promises. If there are issues, our support team works with both creators and backers to resolve them. In rare cases, we may take action against creators who don't fulfill their obligations."
      },
      {
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously and never share your personal information with third parties without your consent. We use industry-standard security measures to protect your data."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>('general');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredCategories = FAQ_CATEGORIES.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about creating campaigns, making pledges, and using our platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FAQ_CATEGORIES.map((category) => {
              const IconComponent = category.icon;
              const isActive = openCategory === category.id;
              const hasResults = filteredCategories.some(c => c.id === category.id);
              
              return (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  disabled={!hasResults}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    isActive
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : hasResults
                      ? 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              const isCategoryOpen = openCategory === category.id;
              
              return (
                <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                      <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
                      <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                        {category.questions.length}
                      </span>
                    </div>
                    {isCategoryOpen ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {/* Category Questions */}
                  {isCategoryOpen && (
                    <div className="border-t border-gray-100">
                      {category.questions.map((item, index) => {
                        const questionId = `${category.id}-${index}`;
                        const isOpen = openQuestions.has(questionId);
                        
                        return (
                          <div key={index} className="border-b border-gray-100 last:border-b-0">
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-6 py-4 text-left flex justify-between items-start hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                              {isOpen ? (
                                <ChevronDown className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms</p>
              <button
                onClick={() => setSearchQuery('')}
                className="btn-primary"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="btn-primary">
                Contact Support
              </a>
              <a href="/how-it-works" className="btn-outline">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 