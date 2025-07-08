// Mock database functions for campaigns
export interface Campaign {
  id: string;
  title: string;
  description: string;
  cover_image?: string;
  current_funding: number;
  funding_goal: number;
  end_date: string;
  status: 'active' | 'completed' | 'cancelled';
  creator: {
    name: string;
    avatar?: string;
  };
  backers_count: number;
}

export interface CampaignStats {
  total_campaigns: number;
  total_funding: number;
  active_campaigns: number;
  successful_campaigns: number;
}

// Mock campaign data
const mockCampaigns: Campaign[] = [
  {
    id: "1",
    title: "Eco-Friendly Coffee Shop",
    description: "Opening a sustainable coffee shop that sources beans directly from local farmers and uses compostable packaging.",
    cover_image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    current_funding: 18750,
    funding_goal: 25000,
    end_date: "2024-12-15",
    status: "active",
    creator: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80"
    },
    backers_count: 234
  },
  {
    id: "2",
    title: "Smart Home Security System",
    description: "An innovative home security system with AI-powered monitoring and smart notifications.",
    cover_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    current_funding: 28500,
    funding_goal: 40000,
    end_date: "2024-12-20",
    status: "active",
    creator: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    backers_count: 156
  },
  {
    id: "3",
    title: "Educational Mobile App",
    description: "A mobile app that makes learning fun and accessible for children with interactive games and lessons.",
    cover_image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    current_funding: 67200,
    funding_goal: 80000,
    end_date: "2024-12-25",
    status: "active",
    creator: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    backers_count: 421
  }
];

export async function getCampaigns(options?: {
  status?: 'active' | 'completed' | 'cancelled';
  limit?: number;
}): Promise<Campaign[]> {
  // Simulate async database call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  let campaigns = mockCampaigns;
  
  if (options?.status) {
    campaigns = campaigns.filter(campaign => campaign.status === options.status);
  }
  
  if (options?.limit) {
    campaigns = campaigns.slice(0, options.limit);
  }
  
  return campaigns;
}

export async function getCampaignStats(): Promise<CampaignStats> {
  // Simulate async database call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const total_campaigns = mockCampaigns.length;
  const total_funding = mockCampaigns.reduce((sum, campaign) => sum + campaign.current_funding, 0);
  const active_campaigns = mockCampaigns.filter(campaign => campaign.status === 'active').length;
  const successful_campaigns = mockCampaigns.filter(campaign => 
    campaign.status === 'completed' || campaign.current_funding >= campaign.funding_goal
  ).length;
  
  return {
    total_campaigns,
    total_funding,
    active_campaigns,
    successful_campaigns
  };
} 