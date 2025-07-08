import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, PlusCircle, TrendingUp, Users, Star, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { getCampaigns, getCampaignStats, type Campaign } from "@/lib/database";

export default async function HomePage() {
  // Fetch featured campaigns from mock database
  let featuredCampaigns: Campaign[] = [];
  try {
    featuredCampaigns = await getCampaigns({
      status: "active",
      limit: 3,
    });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    // Fallback to empty array for mock implementation
    featuredCampaigns = [];
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Fund Your Business Dreams
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Create a campaign, share your story, and start raising funds for
                your small business today.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/create">
                  Create Campaign <PlusCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/explore">Explore Campaigns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Campaigns
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover innovative small businesses looking for support
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Campaign Cards */}
            {featuredCampaigns.length > 0 ? (
              featuredCampaigns.map((campaign) => {
                const fundingPercentage = Math.min(
                  Math.round(
                    (campaign.current_funding / campaign.funding_goal) * 100,
                  ),
                  100,
                );

                // Calculate days remaining
                const endDate = new Date(campaign.end_date);
                const today = new Date();
                const daysRemaining = Math.max(
                  0,
                  Math.ceil(
                    (endDate.getTime() - today.getTime()) /
                      (1000 * 60 * 60 * 24),
                  ),
                );

                return (
                  <Card key={campaign.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video relative">
                      <img
                        src={
                          campaign.cover_image ||
                          `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80`
                        }
                        alt={campaign.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-foreground">
                          {fundingPercentage}% Funded
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={campaign.creator.avatar} alt={campaign.creator.name} />
                            <AvatarFallback>{campaign.creator.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="text-white">
                            <p className="text-sm font-medium">{campaign.creator.name}</p>
                            <p className="text-xs opacity-90">Campaign Creator</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 text-lg">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {campaign.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${fundingPercentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <p>
                              <span className="font-bold text-lg">
                                ${campaign.current_funding.toLocaleString()}
                              </span>{" "}
                              raised
                            </p>
                            <p className="text-muted-foreground">
                              Goal:{" "}
                              <span className="font-bold">
                                ${campaign.funding_goal.toLocaleString()}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Users className="mr-1 h-4 w-4" />
                              <span>{campaign.backers_count} backers</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{daysRemaining} days left</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="mr-1 h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium">Featured</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/campaigns/${campaign.id}`}>
                          View Campaign <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              // Fallback content when no campaigns are available
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No active campaigns at the moment.
                </p>
                <Button asChild>
                  <Link href="/create">
                    Create the First Campaign{" "}
                    <PlusCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/explore">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Simple steps to fund your business idea
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <PlusCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Create Your Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Set up your fundraising page with your business details,
                  funding goals, and timeline.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Share With Your Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Spread the word about your campaign through social media,
                  email, and word of mouth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Receive Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Collect contributions from backers and track your progress
                  toward your funding goal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Success Stories
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See how other entrepreneurs have achieved their goals
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="story1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="story1">Artisan Bakery</TabsTrigger>
                <TabsTrigger value="story2">Tech Startup</TabsTrigger>
                <TabsTrigger value="story3">Local Brewery</TabsTrigger>
              </TabsList>
              <TabsContent value="story1" className="mt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                      alt="Artisan Bakery"
                      className="rounded-lg object-cover w-full aspect-video"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">
                      Artisan Bakery Raised $35,000
                    </h3>
                    <p className="text-muted-foreground">
                      "Our campaign helped us purchase new equipment and open
                      our first storefront. We're now serving over 200 customers
                      daily and have hired 5 new employees."
                    </p>
                    <p className="font-medium">- Sarah Johnson, Founder</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="story2" className="mt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                      alt="Tech Startup"
                      className="rounded-lg object-cover w-full aspect-video"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">
                      Tech Startup Raised $120,000
                    </h3>
                    <p className="text-muted-foreground">
                      "The funds we raised helped us develop our prototype and
                      secure additional venture capital. We've now expanded to a
                      team of 15 and launched our product."
                    </p>
                    <p className="font-medium">- Michael Chen, CEO</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="story3" className="mt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80"
                      alt="Local Brewery"
                      className="rounded-lg object-cover w-full aspect-video"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">
                      Local Brewery Raised $85,000
                    </h3>
                    <p className="text-muted-foreground">
                      "Our community-backed campaign allowed us to expand our
                      production capacity and distribution. We're now selling in
                      stores across the state."
                    </p>
                    <p className="font-medium">- James Wilson, Co-founder</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Campaign?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of entrepreneurs who have successfully funded
                their business ideas.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/create">
                  Create Campaign <PlusCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
