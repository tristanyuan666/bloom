'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Eye, BarChart3, Users, DollarSign, Calendar, TrendingUp, Heart, Settings, Plus, PenTool, Share2, CreditCard, Rocket, ChevronLeft, ChevronRight, Clock, MapPin, Star, Quote, ChevronDown, Shield, Globe, Zap, Target, Award } from 'lucide-react';

const TRUST_BADGES = [
  { name: 'Forbes', logo: '/badges/forbes.svg' },
  { name: 'TechCrunch', logo: '/badges/techcrunch.svg' },
  { name: 'Fast Company', logo: '/badges/fastcompany.svg' },
  { name: 'Stripe', logo: '/badges/stripe.svg' },
  { name: 'AWS', logo: '/badges/aws.svg' },
  { name: 'Y Combinator', logo: '/badges/ycombinator.svg' },
  { name: 'Inc.', logo: '/badges/inc.svg' },
  { name: 'Business Insider', logo: '/badges/businessinsider.svg' },
];

const MOCK_CAMPAIGNS = [
  {
    id: 1,
    title: "Eco-Friendly Coffee Shop",
    status: "active",
    raised: 18750,
    goal: 25000,
    backers: 234,
    daysLeft: 12,
    progress: 75
  },
  {
    id: 2,
    title: "Smart Home Security Device",
    status: "draft",
    raised: 0,
    goal: 50000,
    backers: 0,
    daysLeft: 0,
    progress: 0
  }
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Create Your Campaign",
    description: "Tell your story, set your funding goal, and design compelling rewards that will attract backers to your vision.",
    icon: PenTool,
    color: "blue"
  },
  {
    step: "02",
    title: "Share & Promote",
    description: "Leverage our tools to spread the word through social media, email campaigns, and your personal network.",
    icon: Share2,
    color: "green"
  },
  {
    step: "03",
    title: "Collect Funding",
    description: "Watch as backers pledge their support. Our secure payment system handles everything automatically.",
    icon: CreditCard,
    color: "purple"
  },
  {
    step: "04",
    title: "Launch Your Business",
    description: "Receive your funds and start building your dream. We&apos;re here to support your journey every step of the way.",
    icon: Rocket,
    color: "orange"
  }
];

const FEATURED_CAMPAIGNS = [
  {
    id: 1,
    title: "Eco-Friendly Coffee Shop",
    description: "Opening a sustainable coffee shop that sources beans directly from local farmers and uses compostable packaging.",
    image: "/api/placeholder/400/300",
    category: "Food & Beverage",
    goal: 25000,
    raised: 18750,
    daysLeft: 12,
    backers: 234,
    location: "Portland, OR",
    creator: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Smart Home Security Device",
    description: "AI-powered security camera that learns your family's patterns and only alerts you to real threats.",
    image: "/api/placeholder/400/300",
    category: "Technology",
    goal: 50000,
    raised: 42300,
    daysLeft: 8,
    backers: 567,
    location: "San Francisco, CA",
    creator: "Mike Chen"
  },
  {
    id: 3,
    title: "Local Artisan Bakery",
    description: "Traditional sourdough bakery using organic ingredients and time-honored techniques.",
    image: "/api/placeholder/400/300",
    category: "Food & Beverage",
    goal: 15000,
    raised: 12800,
    daysLeft: 15,
    backers: 189,
    location: "Austin, TX",
    creator: "Emma Rodriguez"
  },
  {
    id: 4,
    title: "Sustainable Fashion Brand",
    description: "Creating eco-friendly clothing using recycled materials and ethical manufacturing practices.",
    image: "/api/placeholder/400/300",
    category: "Fashion",
    goal: 30000,
    raised: 21500,
    daysLeft: 20,
    backers: 312,
    location: "Los Angeles, CA",
    creator: "Alex Thompson"
  },
  {
    id: 5,
    title: "Mobile App for Local Businesses",
    description: "A platform connecting local businesses with customers through personalized recommendations.",
    image: "/api/placeholder/400/300",
    category: "Technology",
    goal: 40000,
    raised: 28900,
    daysLeft: 10,
    backers: 445,
    location: "New York, NY",
    creator: "David Kim"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, Eco Coffee Co.",
    image: "/testimonials/sarah.jpg",
    quote: "Bloom helped us raise $25,000 in just 30 days. The platform&apos;s tools and support made all the difference in bringing our sustainable coffee shop to life.",
    rating: 5,
    campaign: "Eco-Friendly Coffee Shop",
    raised: "$25,000"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "CEO, SmartHome Tech",
    image: "/testimonials/mike.jpg",
    quote: "The crowdfunding process was incredibly smooth. We exceeded our goal by 40% and gained hundreds of loyal customers who believed in our vision.",
    rating: 5,
    campaign: "Smart Home Security Device",
    raised: "$50,000"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Owner, Artisan Bakery",
    image: "/testimonials/emma.jpg",
    quote: "Bloom&apos;s platform gave us the perfect foundation to launch our bakery. The community support was overwhelming and helped us open our doors ahead of schedule.",
    rating: 5,
    campaign: "Local Artisan Bakery",
    raised: "$15,000"
  }
];

const STATS = [
  { label: "Campaigns Funded", value: 2847, suffix: "", icon: TrendingUp },
  { label: "Total Raised", value: 12.4, suffix: "M", prefix: "$", icon: DollarSign },
  { label: "Active Backers", value: 45231, suffix: "", icon: Users },
  { label: "Success Rate", value: 78, suffix: "%", icon: Star }
];

const BENEFITS = [
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Bank-level security with fraud protection and secure payment processing. Your funds and data are always safe."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with backers worldwide. Our platform helps you reach supporters from every corner of the globe."
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Get your campaign live in minutes, not days. Our streamlined process gets you funded faster."
  },
  {
    icon: Target,
    title: "Smart Analytics",
    description: "Track your progress with real-time analytics and insights to optimize your campaign performance."
  },
  {
    icon: Award,
    title: "Expert Support",
    description: "Get guidance from our team of crowdfunding experts. We&apos;re here to help you succeed."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Build lasting relationships with your backers. Turn supporters into lifelong customers."
  }
];

const FAQ_ITEMS = [
  {
    question: "How much does it cost to use Bloom?",
    answer: "Bloom charges a 5% platform fee plus a $0.30 processing fee per transaction. This is only charged on successful campaigns, so you only pay when you reach your funding goal."
  },
  {
    question: "What happens if I don't reach my funding goal?",
    answer: "If you don't reach your funding goal by the end of your campaign, no fees are charged and all pledges are returned to your backers. You can always try again with a new campaign."
  },
  {
    question: "How long does it take to receive my funds?",
    answer: "Once your campaign ends successfully, funds are typically transferred to your account within 5-7 business days. We use secure payment processing to ensure safe and timely transfers."
  },
  {
    question: "Can I run multiple campaigns?",
    answer: "Yes! You can run multiple campaigns on Bloom. Many entrepreneurs use our platform for different projects or to fund different aspects of their business."
  },
  {
    question: "What types of businesses can use Bloom?",
    answer: "Bloom is designed for small businesses, startups, and entrepreneurs across all industries. From restaurants and retail to technology and creative projects, we support a wide range of business types."
  },
  {
    question: "How do I get help with my campaign?",
    answer: "Our support team is available 24/7 to help you with any questions. We also offer campaign coaching, marketing resources, and best practices to help you succeed."
  }
];

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(FEATURED_CAMPAIGNS.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Animate stats when in view
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;

        setAnimatedStats([
          Math.floor(STATS[0].value * progress),
          Math.floor(STATS[1].value * 10 * progress) / 10,
          Math.floor(STATS[2].value * progress),
          Math.floor(STATS[3].value * progress)
        ]);

        if (step >= steps) {
          clearInterval(interval);
          setAnimatedStats([STATS[0].value, STATS[1].value, STATS[2].value, STATS[3].value]);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Trigger animation after a short delay
    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(FEATURED_CAMPAIGNS.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(FEATURED_CAMPAIGNS.length / 3)) % Math.ceil(FEATURED_CAMPAIGNS.length / 3));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full">
            <circle cx="1200" cy="100" r="200" fill="#6366F1" fillOpacity="0.08" />
            <circle cx="200" cy="500" r="180" fill="#3B82F6" fillOpacity="0.07" />
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Empower Small Businesses.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fund Big Dreams.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Bloom is the crowdfunding platform where entrepreneurs, creators, and communities raise capital, build loyal supporters, and turn ideas into thriving businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create" className="btn-primary text-lg px-8 py-4 shadow-lg">
              Start a Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/campaigns" className="btn-outline text-lg px-8 py-4">
              Explore Campaigns
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">Trusted by leading brands & partners</span>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <ul className="flex items-center justify-center gap-8 md:gap-12 py-2 min-w-[600px] md:min-w-0">
              {TRUST_BADGES.map((badge) => (
                <li key={badge.name} className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      {/* Placeholder SVGs, replace with real logos in /public/badges/ */}
                      <img
                        src={badge.logo}
                        alt={badge.name}
                        className="max-h-8 object-contain"
                        style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                        onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                        onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                      />
                    </div>
                    <span className="sr-only">{badge.name}</span>
                  </div>
          </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Crowdfunding Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get from idea to funded in four simple steps. Our platform makes it easy to turn your vision into reality.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const IconComponent = step.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
                green: 'bg-green-100 text-green-600 hover:bg-green-200',
                purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
                orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200'
              };

              return (
                <div 
                  key={step.step}
                  className="group relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </div>

                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line (except for last item) */}
                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200 group-hover:bg-blue-300 transition-colors" />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of entrepreneurs who have successfully funded their dreams through crowdfunding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/create" className="btn-primary">
                  Start Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/how-it-works" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring projects from entrepreneurs and creators around the world
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(FEATURED_CAMPAIGNS.length / 3) }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {FEATURED_CAMPAIGNS.slice(slideIndex * 3, slideIndex * 3 + 3).map((campaign) => (
                        <Link key={campaign.id} href={`/campaigns/${campaign.id}`} className="group">
                          <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
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
                              <div className="absolute top-3 left-3">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                  {campaign.category}
                                </span>
                              </div>
                            </div>

                            {/* Campaign Info */}
                            <div className="p-6">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {campaign.title}
                              </h3>
                              
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {campaign.description}
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
                                    style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                                  />
                                </div>
                                <div className="text-xs text-gray-500">
                                  {Math.min((campaign.raised / campaign.goal) * 100, 100).toFixed(1)}% funded
                                </div>
                              </div>

                              {/* Campaign Stats */}
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{campaign.daysLeft} days left</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span>{campaign.backers} backers</span>
                                </div>
                              </div>

                              {/* Location */}
                              <div className="flex items-center space-x-1 text-sm text-gray-500 mt-3">
                                <MapPin className="w-4 h-4" />
                                <span>{campaign.location}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(FEATURED_CAMPAIGNS.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/campaigns" className="btn-outline text-lg px-8 py-4">
              View All Campaigns
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials & Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Entrepreneurs Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Join thousands of successful campaigns that have raised millions through our platform
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.prefix || ''}{animatedStats[index]}{stat.suffix}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from entrepreneurs who turned their dreams into reality
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  &quot;{TESTIMONIALS[currentTestimonial].quote}&quot;
                </p>
                
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {TESTIMONIALS[currentTestimonial].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{TESTIMONIALS[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-600">{TESTIMONIALS[currentTestimonial].role}</div>
                    <div className="text-xs text-blue-600">
                      Raised {TESTIMONIALS[currentTestimonial].raised} for {TESTIMONIALS[currentTestimonial].campaign}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bloom?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully fund your business and build a community of supporters
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {BENEFITS.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-lg text-gray-600">
                Everything you need to know about crowdfunding with Bloom
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Fund Your Dream?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who have successfully launched their businesses through crowdfunding. Start your campaign today and turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/create" className="btn-primary text-lg px-8 py-4">
                  Start Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-outline text-lg px-8 py-4">
                  Get Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Preview Button */}
      <button
        onClick={() => setShowDashboard(true)}
        className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-4 hover:shadow-xl transition-all duration-300 border border-gray-200 group"
      >
        <Eye className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
        <span className="sr-only">Preview Dashboard</span>
      </button>

      {/* Dashboard Preview Modal */}
      {showDashboard && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
              onClick={() => setShowDashboard(false)}
            />
            
            {/* Modal */}
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dashboard Preview</h3>
                  <p className="text-sm text-gray-600">See what your campaign management looks like</p>
                </div>
                <button
                  onClick={() => setShowDashboard(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Welcome Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h2>
                  <p className="text-gray-600">Here&apos;s how your campaigns are performing today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <DollarSign className="w-8 h-8 text-blue-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-blue-600">Total Raised</p>
                        <p className="text-2xl font-bold text-blue-900">$18,750</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-green-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-600">Total Backers</p>
                        <p className="text-2xl font-bold text-green-900">234</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-purple-600">Active Campaigns</p>
                        <p className="text-2xl font-bold text-purple-900">2</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-orange-600">Avg. Conversion</p>
                        <p className="text-2xl font-bold text-orange-900">12.4%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campaigns Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Your Campaigns</h3>
                    <button className="btn-primary flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      New Campaign
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {MOCK_CAMPAIGNS.map((campaign) => (
                      <div key={campaign.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                campaign.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {campaign.status === 'active' ? 'Active' : 'Draft'}
                              </span>
                              <span>{campaign.backers} backers</span>
                              {campaign.daysLeft > 0 && (
                                <span>{campaign.daysLeft} days left</span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                              ${campaign.raised.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-600">of ${campaign.goal.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        {campaign.status === 'active' && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">{campaign.progress}% funded</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${campaign.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">View Pledges</span>
                  </button>
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Calendar className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Campaign Updates</span>
                  </button>
                  <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Account Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
      )}
    </>
  );
}
