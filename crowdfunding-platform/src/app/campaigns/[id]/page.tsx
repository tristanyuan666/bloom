import CampaignDetailClient from './CampaignDetailClient';

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <CampaignDetailClient campaignId={id} />;
} 