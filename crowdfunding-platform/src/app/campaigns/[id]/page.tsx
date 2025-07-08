"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Share2, 
  Heart, 
  MapPin, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  MessageCircle,
  Calendar,
  Target,
  TrendingUp
} from "lucide-react";

// Mock campaign data
const campaign = {
  id: 1,
  title: "Eco-Friendly Coffee Shop",
  subtitle: "Opening a sustainable coffee shop in downtown San Francisco",
  description: "We're opening a sustainable coffee shop that will serve organic, fair-trade coffee in a zero-waste environment. Our mission is to provide delicious coffee while minimizing our environmental impact and supporting local farmers.",
  category: "Food & Beverage",
  location: "San Francisco, CA",
  goal: 50000,
  raised: 35000,
  backers: 234,
  daysLeft: 15,
  image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop",
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  creator: {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    bio: "Coffee enthusiast and sustainability advocate with 10+ years in the food industry.",
    location: "San Francisco, CA",
    joinedDate: "2020",
    campaignsCount: 1
  },
  rewards: [
    {
      id: 1,
      title: "Early Bird Coffee Mug",
      description: "Get a limited edition ceramic coffee mug with our logo. Perfect for your morning brew!",
      amount: 25,
      claimed: 45,
      total: 100,
      estimatedDelivery: "December 2024",
      includes: ["Ceramic coffee mug", "Thank you note", "Early access to shop opening"]
    },
    {
      id: 2,
      title: "Coffee Lover Package",
      description: "A month's supply of our signature coffee blend plus a coffee mug and tote bag.",
      amount: 75,
      claimed: 23,
      total: 50,
      estimatedDelivery: "January 2025",
      includes: ["1 month coffee supply", "Ceramic coffee mug", "Canvas tote bag", "VIP shop tour"]
    },
    {
      id: 3,
      title: "Founding Member",
      description: "Become a founding member with lifetime 20% discount and exclusive events access.",
      amount: 250,
      claimed: 12,
      total: 25,
      estimatedDelivery: "February 2025",
      includes: ["Lifetime 20% discount", "Exclusive events access", "Founding member certificate", "Private coffee tasting"]
    }
  ],
  updates: [
    {
      id: 1,
      title: "We've reached 70% of our goal!",
      date: "2024-11-15",
      content: "Thank you to all our amazing backers! We're thrilled to announce that we've reached 70% of our funding goal. This means we're one step closer to opening our sustainable coffee shop."
    },
    {
      id: 2,
      title: "Location secured!",
      date: "2024-11-10",
      content: "Great news! We've secured our perfect location in downtown San Francisco. The space is ideal for our sustainable coffee shop concept."
    }
  ],
  comments: [
    {
      id: 1,
      user: "CoffeeLover123",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2024-11-16",
      content: "This is exactly what San Francisco needs! Can't wait to visit your shop."
    },
    {
      id: 2,
      user: "EcoWarrior",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "2024-11-15",
      content: "Love the sustainability focus! Will definitely be supporting this project."
    }
  ]
};

const topBackers = [
  { name: "Anonymous", amount: 5000, date: "2024-11-16" },
  { name: "Coffee Enthusiast", amount: 2500, date: "2024-11-15" },
  { name: "Green Living", amount: 1500, date: "2024-11-14" }
];

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const [selectedReward, setSelectedReward] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const fundingPercentage = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/explore" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Explore
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                {isLiked ? 'Liked' : 'Like'}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Header */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64 md:h-80">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {campaign.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-800">
                    {fundingPercentage}% Funded
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {campaign.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {campaign.subtitle}
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{campaign.location}</span>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    ${campaign.raised.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">raised of ${campaign.goal.toLocaleString()} goal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {campaign.backers}
                  </div>
                  <div className="text-sm text-gray-600">backers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {campaign.daysLeft}
                  </div>
                  <div className="text-sm text-gray-600">days to go</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-[#56D08D] to-green-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${fundingPercentage}%` }}
                  />
                </div>
              </div>

              {/* Top Backers */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Backers</h3>
                <div className="space-y-3">
                  {topBackers.map((backer, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#56D08D] to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                          {index + 1}
                        </div>
                        <span className="text-gray-900">{backer.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">${backer.amount.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{backer.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="mt-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {campaign.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Story</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      As coffee enthusiasts and environmental advocates, we've always dreamed of creating a space where people can enjoy exceptional coffee while supporting sustainable practices. Our journey began when we realized that most coffee shops in San Francisco weren't prioritizing environmental responsibility.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What We're Building</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>A fully sustainable coffee shop with zero-waste packaging</li>
                      <li>Organic, fair-trade coffee from local roasters</li>
                      <li>Community space for events and gatherings</li>
                      <li>Educational programs about sustainable coffee practices</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How Your Support Helps</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Your contribution will help us secure our location, purchase sustainable equipment, and create a welcoming space for the community. Every dollar brings us closer to making sustainable coffee accessible to everyone.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="updates" className="mt-6">
                  <div className="space-y-6">
                    {campaign.updates.map((update) => (
                      <div key={update.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                          <span className="text-sm text-gray-600">{update.date}</span>
                        </div>
                        <p className="text-gray-700">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="comments" className="mt-6">
                  <div className="space-y-6">
                    {campaign.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar} />
                          <AvatarFallback>{comment.user[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">{comment.user}</span>
                            <span className="text-sm text-gray-600">{comment.date}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Back This Project */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Back This Project</CardTitle>
                <CardDescription>
                  Choose a reward and help bring this project to life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-[#56D08D] hover:bg-green-600" size="lg">
                  Back This Project
                </Button>
                <div className="text-center text-sm text-gray-600">
                  <p>Secure checkout powered by Stripe</p>
                </div>
              </CardContent>
            </Card>

            {/* Rewards */}
            <Card>
              <CardHeader>
                <CardTitle>Available Rewards</CardTitle>
                <CardDescription>
                  Choose from these exclusive rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaign.rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedReward === reward.id
                        ? 'border-[#56D08D] bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedReward(reward.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{reward.title}</h3>
                      <span className="text-lg font-bold text-[#56D08D]">
                        ${reward.amount}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <div className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">{reward.claimed}</span> of {reward.total} claimed
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      Estimated delivery: {reward.estimatedDelivery}
                    </div>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {reward.includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-[#56D08D] mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Creator Info */}
            <Card>
              <CardHeader>
                <CardTitle>About the Creator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={campaign.creator.avatar} />
                    <AvatarFallback>{campaign.creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{campaign.creator.name}</h3>
                    <p className="text-sm text-gray-600">{campaign.creator.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{campaign.creator.bio}</p>
                <div className="text-sm text-gray-600">
                  <p>Joined {campaign.creator.joinedDate}</p>
                  <p>{campaign.creator.campaignsCount} campaign created</p>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=60&fit=crop"
                      alt="Recommended"
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Smart Home Security</h4>
                      <p className="text-xs text-gray-600">90% funded</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=60&fit=crop"
                      alt="Recommended"
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Artisan Bakery</h4>
                      <p className="text-xs text-gray-600">93% funded</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 