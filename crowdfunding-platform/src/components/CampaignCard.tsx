import Link from 'next/link';
import { Clock, MapPin, Users, TrendingUp } from 'lucide-react';

interface Campaign {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  goal: number;
  raised: number;
  daysLeft: number;
  backers: number;
  location: string;
}

interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <Link href={`/campaigns/${campaign.id}`} className="group">
      <div className="card hover:shadow-lg transition-shadow duration-300 h-full">
        {/* Campaign Image */}
        <div className="relative mb-4">
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
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
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {campaign.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {campaign.description}
          </p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">${campaign.raised.toLocaleString()}</span>
              <span className="text-gray-600">${campaign.goal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500">
              {progressPercentage.toFixed(1)}% funded
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
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{campaign.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 