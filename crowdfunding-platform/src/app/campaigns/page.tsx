'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Grid3X3, List, MapPin, Clock, Users, DollarSign, TrendingUp, Heart, Share2, Eye, Star, ChevronDown, X, SlidersHorizontal } from 'lucide-react';

// Mock data for campaigns
const MOCK_CAMPAIGNS = [
  {
    id: 1,
    title: "Eco-Friendly Coffee Shop",
    subtitle: "Sustainable coffee shop with direct farmer partnerships",
    description: "Opening a sustainable coffee shop that sources beans directly from local farmers and uses compostable packaging. Our mission is to serve exceptional coffee while supporting ethical farming practices.",
    image: "/api/placeholder/400/300",
    category: "Food & Beverage",
    subcategory: "Restaurant",
    goal: 25000,
    raised: 18750,
    daysLeft: 12,
    backers: 234,
    location: "Portland, OR",
    creator: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      verified: true
    },
    tags: ["sustainable", "local", "organic"],
    featured: true,
    progress: 75,
    currency: "USD"
  },
  {
    id: 2,
    title: "Smart Home Security Device",
    subtitle: "AI-powered security camera with pattern recognition",
    description: "Revolutionary AI-powered security camera that learns your family's patterns and only alerts you to real threats. Features include facial recognition, motion detection, and cloud storage.",
    image: "/api/placeholder/400/300",
    category: "Technology",
    subcategory: "Smart Home",
    goal: 50000,
    raised: 42300,
    daysLeft: 8,
    backers: 567,
    location: "San Francisco, CA",
    creator: {
      name: "Mike Chen",
      avatar: "/avatars/mike.jpg",
      verified: true
    },
    tags: ["AI", "security", "smart home"],
    featured: true,
    progress: 84.6,
    currency: "USD"
  },
  {
    id: 3,
    title: "Local Artisan Bakery",
    subtitle: "Traditional sourdough bakery using organic ingredients",
    description: "Traditional sourdough bakery using organic ingredients and time-honored techniques. We'll serve fresh bread, pastries, and coffee in a warm, community-focused environment.",
    image: "/api/placeholder/400/300",
    category: "Food & Beverage",
    subcategory: "Bakery",
    goal: 15000,
    raised: 12800,
    daysLeft: 15,
    backers: 189,
    location: "Austin, TX",
    creator: {
      name: "Emma Rodriguez",
      avatar: "/avatars/emma.jpg",
      verified: false
    },
    tags: ["artisan", "organic", "sourdough"],
    featured: false,
    progress: 85.3,
    currency: "USD"
  },
  {
    id: 4,
    title: "Sustainable Fashion Brand",
    subtitle: "Eco-friendly clothing using recycled materials",
    description: "Creating eco-friendly clothing using recycled materials and ethical manufacturing practices. Our collection includes everyday essentials that are both stylish and sustainable.",
    image: "/api/placeholder/400/300",
    category: "Fashion",
    subcategory: "Clothing",
    goal: 30000,
    raised: 21500,
    daysLeft: 20,
    backers: 312,
    location: "Los Angeles, CA",
    creator: {
      name: "Alex Thompson",
      avatar: "/avatars/alex.jpg",
      verified: true
    },
    tags: ["sustainable", "recycled", "ethical"],
    featured: false,
    progress: 71.7,
    currency: "USD"
  },
  {
    id: 5,
    title: "Mobile App for Local Businesses",
    subtitle: "Platform connecting local businesses with customers",
    description: "A platform connecting local businesses with customers through personalized recommendations. Help small businesses thrive in the digital age with our innovative mobile solution.",
    image: "/api/placeholder/400/300",
    category: "Technology",
    subcategory: "Mobile App",
    goal: 40000,
    raised: 28900,
    daysLeft: 10,
    backers: 445,
    location: "New York, NY",
    creator: {
      name: "David Kim",
      avatar: "/avatars/david.jpg",
      verified: false
    },
    tags: ["local", "mobile", "business"],
    featured: false,
    progress: 72.3,
    currency: "USD"
  },
  {
    id: 6,
    title: "Urban Vertical Farm",
    subtitle: "Hydroponic farming system for urban communities",
    description: "Revolutionary hydroponic farming system designed for urban communities. Grow fresh, organic produce year-round in limited spaces with our innovative vertical farming technology.",
    image: "/api/placeholder/400/300",
    category: "Agriculture",
    subcategory: "Urban Farming",
    goal: 75000,
    raised: 52300,
    daysLeft: 25,
    backers: 678,
    location: "Chicago, IL",
    creator: {
      name: "Lisa Wang",
      avatar: "/avatars/lisa.jpg",
      verified: true
    },
    tags: ["urban", "hydroponic", "organic"],
    featured: true,
    progress: 69.7,
    currency: "USD"
  },
  {
    id: 7,
    title: "Handcrafted Furniture Workshop",
    subtitle: "Custom wooden furniture made with traditional techniques",
    description: "Custom wooden furniture workshop using traditional techniques and sustainable materials. Each piece is handcrafted with attention to detail and built to last generations.",
    image: "/api/placeholder/400/300",
    category: "Crafts",
    subcategory: "Furniture",
    goal: 20000,
    raised: 15600,
    daysLeft: 18,
    backers: 234,
    location: "Nashville, TN",
    creator: {
      name: "Tom Wilson",
      avatar: "/avatars/tom.jpg",
      verified: false
    },
    tags: ["handcrafted", "wooden", "custom"],
    featured: false,
    progress: 78,
    currency: "USD"
  },
  {
    id: 8,
    title: "Educational VR Platform",
    subtitle: "Virtual reality learning experiences for students",
    description: "Immersive virtual reality learning platform that brings education to life. Students can explore historical events, scientific concepts, and cultural experiences in an engaging 3D environment.",
    image: "/api/placeholder/400/300",
    category: "Education",
    subcategory: "Technology",
    goal: 60000,
    raised: 41200,
    daysLeft: 14,
    backers: 523,
    location: "Seattle, WA",
    creator: {
      name: "Rachel Green",
      avatar: "/avatars/rachel.jpg",
      verified: true
    },
    tags: ["VR", "education", "immersive"],
    featured: false,
    progress: 68.7,
    currency: "USD"
  }
];

const CATEGORIES = [
  { id: "all", name: "All Categories", count: MOCK_CAMPAIGNS.length },
  { id: "food-beverage", name: "Food & Beverage", count: 2 },
  { id: "technology", name: "Technology", count: 2 },
  { id: "fashion", name: "Fashion", count: 1 },
  { id: "agriculture", name: "Agriculture", count: 1 },
  { id: "crafts", name: "Crafts", count: 1 },
  { id: "education", name: "Education", count: 1 }
];

const LOCATIONS = [
  "All Locations",
  "Portland, OR",
  "San Francisco, CA", 
  "Austin, TX",
  "Los Angeles, CA",
  "New York, NY",
  "Chicago, IL",
  "Nashville, TN",
  "Seattle, WA"
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "ending-soon", label: "Ending Soon" },
  { value: "newest", label: "Newest" },
  { value: "most-funded", label: "Most Funded" },
  { value: "most-backers", label: "Most Backers" }
];

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState(MOCK_CAMPAIGNS);
  const [filteredCampaigns, setFilteredCampaigns] = useState(MOCK_CAMPAIGNS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  // Filter and sort campaigns
  useEffect(() => {
    let filtered = [...campaigns];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(campaign => 
        campaign.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Location filter
    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(campaign => campaign.location === selectedLocation);
    }

    // Price range filter
    filtered = filtered.filter(campaign => 
      campaign.goal >= priceRange[0] && campaign.goal <= priceRange[1]
    );

    // Verified creator filter
    if (showVerifiedOnly) {
      filtered = filtered.filter(campaign => campaign.creator.verified);
    }

    // Sort campaigns
    switch (sortBy) {
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "ending-soon":
        filtered.sort((a, b) => a.daysLeft - b.daysLeft);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "most-funded":
        filtered.sort((a, b) => b.raised - a.raised);
        break;
      case "most-backers":
        filtered.sort((a, b) => b.backers - a.backers);
        break;
    }

    setFilteredCampaigns(filtered);
  }, [campaigns, searchQuery, selectedCategory, selectedLocation, sortBy, priceRange, showVerifiedOnly]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLocation("All Locations");
    setSortBy("featured");
    setPriceRange([0, 100000]);
    setShowVerifiedOnly(false);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedLocation !== "All Locations" || sortBy !== "featured" || priceRange[0] > 0 || priceRange[1] < 100000 || showVerifiedOnly;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Campaigns
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover innovative projects and support entrepreneurs turning their dreams into reality
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns, creators, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{filteredCampaigns.length}</div>
              <div className="text-sm text-gray-600">Active Campaigns</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$2.4M</div>
              <div className="text-sm text-gray-600">Total Raised</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">15,234</div>
              <div className="text-sm text-gray-600">Total Backers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <label key={category.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedCategory === category.id 
                          ? 'border-blue-600 bg-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {selectedCategory === category.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-700">{category.name}</span>
                      <span className="ml-auto text-sm text-gray-500">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Location</h4>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {LOCATIONS.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Funding Goal</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Verified Creators Filter */}
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showVerifiedOnly}
                    onChange={(e) => setShowVerifiedOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">Verified creators only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {filteredCampaigns.length} campaign{filteredCampaigns.length !== 1 ? 's' : ''} found
                </span>
                {hasActiveFilters && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">•</span>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "list" ? "bg-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Campaigns Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCardList key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}

            {/* Empty State */}
            {filteredCampaigns.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No campaigns found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Campaign {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  goal: number;
  raised: number;
  daysLeft: number;
  backers: number;
  location: string;
  creator: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  tags: string[];
  featured: boolean;
  progress: number;
  currency: string;
}

function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <Link href={`/campaigns/${campaign.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
        {/* Campaign Image */}
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-gray-600">Campaign Image</p>
            </div>
          </div>
          
          {/* Featured Badge */}
          {campaign.featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {campaign.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Campaign Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {campaign.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {campaign.subtitle}
          </p>

          {/* Progress Bar */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">${campaign.raised.toLocaleString()}</span>
              <span className="text-gray-600">${campaign.goal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(campaign.progress, 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-500">
              {campaign.progress.toFixed(1)}% funded
            </div>
          </div>

          {/* Campaign Stats */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{campaign.daysLeft} days left</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{campaign.backers} backers</span>
            </div>
          </div>

          {/* Creator Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {campaign.creator.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{campaign.creator.name}</div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{campaign.location}</span>
                </div>
              </div>
            </div>
            {campaign.creator.verified && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-blue-600 fill-current" />
                <span className="text-xs text-blue-600 font-medium">Verified</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function CampaignCardList({ campaign }: { campaign: Campaign }) {
  return (
    <Link href={`/campaigns/${campaign.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
        <div className="flex">
          {/* Campaign Image */}
          <div className="relative w-48 h-32 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-l-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-600">Campaign Image</p>
              </div>
            </div>
            
            {/* Featured Badge */}
            {campaign.featured && (
              <div className="absolute top-2 left-2">
                <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Campaign Info */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {campaign.title}
                  </h3>
                  {campaign.creator.verified && (
                    <Star className="w-4 h-4 text-blue-600 fill-current" />
                  )}
                </div>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {campaign.subtitle}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {campaign.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Info */}
              <div className="text-right ml-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  ${campaign.raised.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  of ${campaign.goal.toLocaleString()}
                </div>
                <div className="text-sm font-medium text-blue-600">
                  {campaign.progress.toFixed(1)}% funded
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(campaign.progress, 100)}%` }}
              />
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{campaign.daysLeft} days left</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{campaign.backers} backers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{campaign.location}</span>
                </div>
              </div>

              {/* Creator Info */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {campaign.creator.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-900">{campaign.creator.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 