'use client';

import { useState } from 'react';
import { Clock, MapPin, Users, Share2, Heart, MessageCircle, Calendar, DollarSign } from 'lucide-react';

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'about' | 'updates' | 'backers'>('about');
  const [selectedReward, setSelectedReward] = useState<number | null>(null);

  // Mock campaign data
  const campaign = {
    id: params.id,
    title: "Eco-Friendly Coffee Shop",
    description: "Opening a sustainable coffee shop that sources beans directly from local farmers and uses compostable packaging.",
    longDescription: "We're passionate about creating a coffee shop that not only serves amazing coffee but also makes a positive impact on our community and the environment.",
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
        content: "We're excited to announce our partnership with three local coffee farms committed to sustainable practices.",
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
                  <div className="prose max-w-none">
                    <p>{campaign.longDescription}</p>
                  </div>
                )}

                {activeTab === 'updates' && (
                  <div className="space-y-6">
                    {campaign.updates.map((update) => (
                      <div key={update.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{update.date} • {update.author}</p>
                        <p className="text-gray-700">{update.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'backers' && (
                  <div className="space-y-4">
                    {campaign.backers.map((backer, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-900">{backer.name}</span>
                        <span className="text-gray-600">${backer.amount}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Rewards */}
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Reward</h3>
              <div className="space-y-4">
                {campaign.rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedReward === reward.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedReward(reward.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">${reward.amount}</h4>
                      <span className="text-sm text-gray-600">
                        {reward.claimed}/{reward.total} claimed
                      </span>
                    </div>
                    <h5 className="font-medium text-gray-900 mb-2">{reward.title}</h5>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <p className="text-xs text-gray-500">Estimated delivery: {reward.estimatedDelivery}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 