'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Heart, 
  Plus, 
  BarChart3,
  MapPin,
  Eye,
  Edit,
  MoreVertical,
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight,
  CreditCard,
  Gift
} from 'lucide-react';

const MOCK_USER = {
  name: 'Sarah Johnson',
  email: 'sarah@example.com',
  avatar: '/avatars/sarah.jpg',
  verified: true
};

const MOCK_CAMPAIGNS = [
  {
    id: 1,
    title: 'Eco-Friendly Coffee Shop',
    status: 'active',
    raised: 18750,
    goal: 25000,
    backers: 234,
    daysLeft: 12,
    progress: 75,
    category: 'Food & Beverage',
    location: 'Portland, OR'
  },
  {
    id: 2,
    title: 'Smart Home Security Device',
    status: 'draft',
    raised: 0,
    goal: 50000,
    backers: 0,
    daysLeft: 0,
    progress: 0,
    category: 'Technology',
    location: 'San Francisco, CA'
  }
];

const MOCK_PLEDGES = [
  {
    id: 1,
    campaignTitle: 'Local Artisan Bakery',
    amount: 75,
    reward: 'Free Coffee for a Week',
    status: 'confirmed',
    date: '2024-01-15'
  },
  {
    id: 2,
    campaignTitle: 'Sustainable Fashion Brand',
    amount: 200,
    reward: 'Coffee Masterclass',
    status: 'pending',
    date: '2024-01-10'
  }
];

const MOCK_REWARDS = [
  {
    id: 1,
    campaignTitle: 'Local Artisan Bakery',
    reward: 'Free Coffee for a Week',
    status: 'ready',
    claimBy: '2024-02-15'
  },
  {
    id: 2,
    campaignTitle: 'Sustainable Fashion Brand',
    reward: 'Coffee Masterclass',
    status: 'pending',
    claimBy: '2024-03-01'
  }
];

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'campaigns', label: 'My Campaigns', icon: TrendingUp },
  { id: 'pledges', label: 'My Pledges', icon: Heart },
  { id: 'rewards', label: 'Claim Rewards', icon: BarChart3 }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xl">
            {MOCK_USER.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, {MOCK_USER.name}!</h2>
            <p className="text-gray-600">Here&apos;s how your campaigns are performing today.</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-blue-600">Total Raised</p>
              <p className="text-2xl font-bold text-blue-900">$18,750</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-green-600">Total Backers</p>
              <p className="text-2xl font-bold text-green-900">234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-purple-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-purple-900">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <BarChart3 className="w-8 h-8 text-orange-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-orange-600">Avg. Conversion</p>
              <p className="text-2xl font-bold text-orange-900">12.4%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">New backer pledged $50 to Eco-Friendly Coffee Shop</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Campaign &quot;Smart Home Security Device&quot; created</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Reward &quot;Free Coffee for a Week&quot; claimed</p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCampaigns = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Campaigns</h2>
        <Link href="/create" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Link>
      </div>

      <div className="space-y-4">
        {MOCK_CAMPAIGNS.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{campaign.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status === 'active' ? 'Active' : 'Draft'}
                  </span>
                  <span>{campaign.category}</span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {campaign.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {campaign.status === 'active' && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">${campaign.raised.toLocaleString()}</span>
                  <span className="text-gray-600">${campaign.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${campaign.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{campaign.progress}% funded</span>
                  <span>{campaign.daysLeft} days left</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPledges = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Pledges</h2>
      
      <div className="space-y-4">
        {MOCK_PLEDGES.map((pledge) => (
          <div key={pledge.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{pledge.campaignTitle}</h3>
                <p className="text-gray-600 mb-2">{pledge.reward}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {pledge.date}
                  </span>
                  <span className={`flex items-center ${
                    pledge.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {pledge.status === 'confirmed' ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <Clock className="w-4 h-4 mr-1" />
                    )}
                    {pledge.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">${pledge.amount}</div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Campaign
                  <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Claim Rewards</h2>
      
      <div className="space-y-4">
        {MOCK_REWARDS.map((reward) => (
          <div key={reward.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{reward.campaignTitle}</h3>
                <p className="text-gray-600 mb-2">{reward.reward}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Claim by: {reward.claimBy}
                  </span>
                  <span className={`flex items-center ${
                    reward.status === 'ready' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {reward.status === 'ready' ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <Clock className="w-4 h-4 mr-1" />
                    )}
                    {reward.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                {reward.status === 'ready' ? (
                  <button className="btn-primary">
                    Claim Reward
                    <Gift className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button className="btn-outline" disabled>
                    Pending
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={MOCK_USER.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={MOCK_USER.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="btn-primary w-full">Update Profile</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payout Method</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <CreditCard className="w-6 h-6 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">•••• •••• •••• 1234</p>
                <p className="text-sm text-gray-500">Expires 12/25</p>
              </div>
            </div>
            <button className="btn-outline w-full">Add New Method</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'campaigns':
        return renderCampaigns();
      case 'pledges':
        return renderPledges();
      case 'rewards':
        return renderRewards();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`lg:w-64 lg:block ${showMobileMenu ? 'block' : 'hidden'} bg-white border-r border-gray-200 min-h-screen`}>
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                {MOCK_USER.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{MOCK_USER.name}</p>
                <p className="text-sm text-gray-500">{MOCK_USER.email}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
} 