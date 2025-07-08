"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Grid, 
  List, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight,
  SlidersHorizontal
} from "lucide-react";

// Mock data for campaigns
const campaigns = [
  {
    id: 1,
    title: "Eco-Friendly Coffee Shop",
    description: "Opening a sustainable coffee shop in downtown with organic beans and zero-waste packaging",
    category: "Food & Beverage",
    location: "San Francisco, CA",
    goal: 50000,
    raised: 35000,
    backers: 234,
    daysLeft: 15,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    creator: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Sustainable", "Local Business", "Organic"]
  },
  {
    id: 2,
    title: "Smart Home Security Device",
    description: "AI-powered security camera with facial recognition and mobile alerts",
    category: "Technology",
    location: "Austin, TX",
    goal: 75000,
    raised: 68000,
    backers: 456,
    daysLeft: 8,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    creator: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["AI", "Security", "Smart Home"]
  },
  {
    id: 3,
    title: "Artisan Bakery Expansion",
    description: "Expanding our beloved local bakery to serve more customers and add new products",
    category: "Food & Beverage",
    location: "Portland, OR",
    goal: 30000,
    raised: 28000,
    backers: 189,
    daysLeft: 22,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    creator: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Artisan", "Local", "Expansion"]
  },
  {
    id: 4,
    title: "Sustainable Fashion Line",
    description: "Creating eco-friendly clothing made from recycled materials",
    category: "Fashion",
    location: "Los Angeles, CA",
    goal: 45000,
    raised: 32000,
    backers: 156,
    daysLeft: 12,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    creator: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Sustainable", "Fashion", "Eco-friendly"]
  },
  {
    id: 5,
    title: "Mobile App for Pet Owners",
    description: "All-in-one app for pet care, vet appointments, and community features",
    category: "Technology",
    location: "Seattle, WA",
    goal: 60000,
    raised: 42000,
    backers: 298,
    daysLeft: 18,
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=300&fit=crop",
    creator: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Mobile App", "Pet Care", "Community"]
  },
  {
    id: 6,
    title: "Urban Farm Initiative",
    description: "Building vertical farms in urban areas to provide fresh produce",
    category: "Agriculture",
    location: "Chicago, IL",
    goal: 80000,
    raised: 65000,
    backers: 423,
    daysLeft: 5,
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&h=300&fit=crop",
    creator: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Urban Farming", "Sustainability", "Local Food"]
  }
];

const categories = [
  "All Categories",
  "Technology",
  "Food & Beverage",
  "Fashion",
  "Agriculture",
  "Health & Wellness",
  "Education",
  "Arts & Culture",
  "Environment",
  "Community"
];

const locations = [
  "All Locations",
  "San Francisco, CA",
  "Austin, TX",
  "Portland, OR",
  "Los Angeles, CA",
  "Seattle, WA",
  "Chicago, IL",
  "New York, NY",
  "Miami, FL",
  "Denver, CO"
];

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter campaigns based on search and filters
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All Categories" || campaign.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || campaign.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Campaigns
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover inspiring projects from entrepreneurs around the world and support the next big idea
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search campaigns, creators, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#56D08D] focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#56D08D] focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="container mx-auto px-6 py-12">
        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing {filteredCampaigns.length} of {campaigns.length} campaigns
          </p>
          <div className="text-sm text-gray-500">
            Sort by: <span className="text-[#56D08D] font-medium">Most Popular</span>
          </div>
        </div>

        {/* Campaigns */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="group hover-lift transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {campaign.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-800">
                      {Math.round((campaign.raised / campaign.goal) * 100)}% Funded
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {campaign.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {campaign.description}
                  </CardDescription>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>${campaign.raised.toLocaleString()} raised</span>
                      <span>Goal: ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#56D08D] to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {campaign.backers}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {campaign.daysLeft} days
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {campaign.location.split(',')[0]}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={campaign.creator.avatar} />
                        <AvatarFallback>{campaign.creator.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{campaign.creator.name}</span>
                    </div>
                    <Button size="sm" className="bg-[#56D08D] hover:bg-green-600" asChild>
                      <Link href={`/campaigns/${campaign.id}`}>
                        View Project
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="group hover-lift transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {campaign.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                          {campaign.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {campaign.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        {Math.round((campaign.raised / campaign.goal) * 100)}% Funded
                      </Badge>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>${campaign.raised.toLocaleString()} raised</span>
                        <span>Goal: ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#56D08D] to-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {campaign.backers} backers
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {campaign.daysLeft} days left
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {campaign.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={campaign.creator.avatar} />
                            <AvatarFallback>{campaign.creator.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-600">{campaign.creator.name}</span>
                        </div>
                        <Button className="bg-[#56D08D] hover:bg-green-600" asChild>
                          <Link href={`/campaigns/${campaign.id}`}>
                            View Project
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredCampaigns.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Campaigns
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
                setSelectedLocation("All Locations");
              }}>
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 