'use client';

import { useState } from 'react';
import { MapPin, Users, Share2, Heart, MessageCircle, Calendar, DollarSign } from 'lucide-react';

interface CampaignDetailClientProps {
  campaignId: string;
}

export default function CampaignDetailClient({ campaignId }: CampaignDetailClientProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'updates' | 'backers'>('about');

  // Mock campaign data
  const campaign = {
    id: campaignId,
    title: "Eco-Friendly Coffee Shop",
    description: "Opening a sustainable coffee shop that sources beans directly from local farmers and uses compostable packaging.",
    longDescription: "We&apos;re passionate about creating a coffee shop that not only serves amazing coffee but also makes a positive impact on our community and the environment.",
    image: "/api/placeholder/800/400",
    category: "Food & Beverage",
    goal: 25000,
    raised: 18750,
    daysLeft: 12,
    backersCount: 234,
    location: "Portland, OR",
    creator: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/100/100",
      bio: "Coffee enthusiast and sustainability advocate with 10+ years in the industry."
    },
    rewards: [
      {
        id: 1,
        title: "Early Bird Supporter",
        description: "Get a free coffee and pastry on opening day, plus your name on our supporter wall.",
        amount: 25,
        claimed: 45,
        total: 100,
        estimatedDelivery: "December 2024"
      },
      {
        id: 2,
        title: "Coffee Lover Package",
        description: "Monthly coffee subscription for 3 months, plus exclusive access to our soft opening.",
        amount: 75,
        claimed: 23,
        total: 50,
        estimatedDelivery: "January 2025"
      },
      {
        id: 3,
        title: "Founding Member",
        description: "Lifetime 20% discount on all purchases, plus VIP access to all events and tastings.",
        amount: 200,
        claimed: 12,
        total: 25,
        estimatedDelivery: "February 2025"
      }
    ],
    updates: [
      {
        id: 1,
        title: "We've Found the Perfect Location!",
        content: "After months of searching, we've secured a beautiful space in the heart of Portland's sustainable business district.",
        date: "2024-11-15",
        author: "Sarah Johnson"
      },
      {
        id: 2,
        title: "Partnering with Local Farmers",
        content: "We&apos;re excited to announce our partnership with three local coffee farms committed to sustainable practices.",
        date: "2024-11-10",
        author: "Sarah Johnson"
      }
    ],
    backers: [
      { name: "Alex M.", amount: 200, date: "2024-11-20" },
      { name: "Maria S.", amount: 75, date: "2024-11-19" },
      { name: "David K.", amount: 25, date: "2024-11-18" },
      { name: "Lisa P.", amount: 200, date: "2024-11-17" },
      { name: "Mike R.", amount: 75, date: "2024-11-16" }
    ]
  };

  const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600">Campaign Image</p>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{campaign.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{campaign.description}</p>
              
              {/* Creator Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">by {campaign.creator.name}</p>
                  <p className="text-sm text-gray-600">{campaign.creator.bio}</p>
                </div>
              </div>
            </div>

            {/* Funding Card */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <div className="space-y-6">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">${campaign.raised.toLocaleString()}</span>
                      <span className="text-gray-600">${campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{progressPercentage.toFixed(1)}% funded</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{campaign.backersCount}</div>
                      <div className="text-sm text-gray-600">backers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{campaign.daysLeft}</div>
                      <div className="text-sm text-gray-600">days left</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full btn-primary">
                      Back This Project
                    </button>
                    <div className="flex space-x-2">
                      <button className="flex-1 btn-outline flex items-center justify-center">
                        <Heart className="w-4 h-4 mr-2" />
                        Save
                      </button>
                      <button className="flex-1 btn-outline flex items-center justify-center">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {campaign.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'about', label: 'About', icon: MessageCircle },
                    { id: 'updates', label: 'Updates', icon: Calendar },
                    { id: 'backers', label: 'Backers', icon: Users }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'about' | 'updates' | 'backers')}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'about' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">About this project</h3>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {campaign.longDescription}
                      </p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Story</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        We started this journey with a simple idea: what if we could create a coffee shop that not only 
                        serves exceptional coffee but also makes a positive impact on our community and the environment? 
                        After years of working in the coffee industry and seeing the challenges that small farmers face, 
                        we knew we had to do something different.
                      </p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">What Makes Us Different</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                        <li>Direct partnerships with local coffee farmers</li>
                        <li>100% compostable packaging and utensils</li>
                        <li>Solar-powered roasting facility</li>
                        <li>Fair trade pricing for all our suppliers</li>
                        <li>Community events and educational programs</li>
                      </ul>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">How Your Support Helps</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Your contribution will help us secure our location, purchase sustainable equipment, and establish 
                        our partnerships with local farmers. Every dollar brings us closer to creating a space where 
                        community and sustainability come together over great coffee.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'updates' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Updates</h3>
                    <div className="space-y-6">
                      {campaign.updates.map((update) => (
                        <div key={update.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{update.title}</h4>
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{update.content}</p>
                          <p className="text-sm text-gray-500 mt-2">— {update.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'backers' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Backers</h3>
                    <div className="space-y-4">
                      {campaign.backers.map((backer, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div>
                            <p className="font-medium text-gray-900">{backer.name}</p>
                            <p className="text-sm text-gray-500">{backer.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">${backer.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Support this project</h3>
                <p className="text-gray-600 mt-2">Choose a reward and help bring this project to life.</p>
              </div>
              
              <div className="p-6 space-y-6">
                {campaign.rewards.map((reward) => (
                  <div key={reward.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{reward.title}</h4>
                        <p className="text-gray-600 mb-3">{reward.description}</p>
                        <p className="text-sm text-gray-500">Estimated delivery: {reward.estimatedDelivery}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">${reward.amount}</div>
                        <div className="text-sm text-gray-500">{reward.claimed} of {reward.total} claimed</div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full btn-primary"
                    >
                      Select Reward
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Creator Info Card */}
            <div className="card mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the creator</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">{campaign.creator.name}</p>
                  <p className="text-sm text-gray-600">{campaign.creator.bio}</p>
                </div>
              </div>
              <button className="w-full btn-outline">Contact Creator</button>
            </div>

            {/* Campaign Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium text-gray-900">{campaign.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">{campaign.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days Left</span>
                  <span className="font-medium text-gray-900">{campaign.daysLeft}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Backers</span>
                  <span className="font-medium text-gray-900">{campaign.backersCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 