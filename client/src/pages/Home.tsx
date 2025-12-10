import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { reports } from "@/lib/data";
import { Calendar, ChevronRight, ExternalLink, Play, Share2, FileText, Video, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const currentReport = reports[0]; // Default to the latest report
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? currentReport.items 
    : currentReport.items.filter(item => item.category.toLowerCase() === activeTab);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Video': return <Video className="h-4 w-4" />;
      case 'Newsletter': return <FileText className="h-4 w-4" />;
      case 'Social': return <Share2 className="h-4 w-4" />;
      case 'Event': return <Users className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="container relative flex h-full flex-col justify-end pb-12">
          <Badge variant="outline" className="w-fit mb-4 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm">
            <Calendar className="mr-2 h-3 w-3" /> {currentReport.month} {currentReport.year}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {currentReport.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Stay updated with the latest product releases, video tutorials, and success stories from GeoVision.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          
          {/* Sidebar / Navigation */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Report Sections</h3>
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full flex-col items-start h-auto space-y-2">
                  <TabsList className="flex flex-col h-auto w-full items-start bg-transparent p-0 space-y-1">
                    {['all', 'video', 'newsletter', 'social', 'event'].map((tab) => (
                      <TabsTrigger 
                        key={tab} 
                        value={tab}
                        className="w-full justify-start px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-md border border-transparent"
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Subscribe</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest updates delivered directly to your inbox.</p>
                <Button className="w-full">Join Newsletter</Button>
              </div>
            </div>
          </aside>

          {/* Content Grid */}
          <div className="flex-1">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-border/50 bg-card transition-all hover:shadow-lg hover:border-primary/50 flex flex-col">
                  {item.thumbnail && (
                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.category === 'Video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                          <div className="rounded-full bg-background/90 p-3 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                            <Play className="h-6 w-6 text-primary fill-primary" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors">
                        {getIcon(item.category)}
                        <span className="ml-2">{item.category}</span>
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5 hover:text-primary" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        View Details
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 mt-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentReport.year} GeoVision Marketing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="ghost" size="sm">Terms of Service</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
