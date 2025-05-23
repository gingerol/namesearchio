"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Download, Star, Eye, RefreshCw, Globe, AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

// Common TLDs and their descriptions
const COMMON_TLDS = [
  { value: "com", label: ".com", description: "Commercial, global" },
  { value: "net", label: ".net", description: "Network, technology" },
  { value: "org", label: ".org", description: "Organization, non-profit" },
  { value: "io", label: ".io", description: "Tech, startup" },
  { value: "co", label: ".co", description: "Company, corporate" },
  { value: "ai", label: ".ai", description: "Artificial Intelligence" },
  { value: "app", label: ".app", description: "Applications" },
  { value: "dev", label: ".dev", description: "Development" },
]

// Supported languages with their native names
const LANGUAGES = [
  { value: "en", label: "English", native: "English" },
  { value: "es", label: "Spanish", native: "Español" },
  { value: "fr", label: "French", native: "Français" },
  { value: "de", label: "German", native: "Deutsch" },
  { value: "it", label: "Italian", native: "Italiano" },
  { value: "pt", label: "Portuguese", native: "Português" },
  { value: "ru", label: "Russian", native: "Русский" },
  { value: "zh", label: "Chinese", native: "中文" },
  { value: "ja", label: "Japanese", native: "日本語" },
  { value: "ko", label: "Korean", native: "한국어" },
]

export default function Home() {
  const [selectedTlds, setSelectedTlds] = useState<string[]>([])
  const [targetLanguage, setTargetLanguage] = useState("en")
  const [sensitivityScore, setSensitivityScore] = useState(85) // Example score

  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold">NameSearch.io</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Star className="mr-2 h-4 w-4" />
              Saved Searches
            </Button>
            <Button variant="ghost" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              Monitoring
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container px-4 py-6">
        <div className="grid gap-6">
          {/* Search Section */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Business Description */}
                <div className="space-y-2">
                  <Label htmlFor="business-description">Describe Your Business</Label>
                  <Textarea 
                    id="business-description"
                    placeholder="Describe your business concept, target market, and brand values. For example: 'We're launching a sustainable fashion brand targeting young professionals in urban areas. Our focus is on eco-friendly materials and ethical manufacturing practices. We want to convey trust, innovation, and environmental responsibility.'"
                    className="min-h-[120px]"
                  />
                </div>

                {/* Language Selection */}
                <div className="space-y-2">
                  <Label>Target Language</Label>
                  <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select target language" />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <div className="flex items-center gap-2">
                            <span>{lang.native}</span>
                            <span className="text-muted-foreground">({lang.label})</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* TLD Selection */}
                <div className="space-y-2">
                  <Label>Domain Extensions</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {COMMON_TLDS.map((tld) => (
                      <div key={tld.value} className="flex items-start space-x-2">
                        <Checkbox 
                          id={`tld-${tld.value}`}
                          checked={selectedTlds.includes(tld.value)}
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              setSelectedTlds([...selectedTlds, tld.value])
                            } else {
                              setSelectedTlds(selectedTlds.filter((t: string) => t !== tld.value))
                            }
                          }}
                        />
                        <div className="grid gap-1 leading-none">
                          <Label
                            htmlFor={`tld-${tld.value}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {tld.label}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            {tld.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Sensitivity Meter */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Cultural Sensitivity Score</Label>
                    <Badge variant={sensitivityScore > 80 ? "default" : sensitivityScore > 60 ? "secondary" : "destructive"}>
                      <span>{sensitivityScore}%</span>
                    </Badge>
                  </div>
                  <Progress value={sensitivityScore} className="h-2" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {sensitivityScore > 80 ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>High cultural sensitivity</span>
                      </>
                    ) : sensitivityScore > 60 ? (
                      <>
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                        <span>Moderate cultural sensitivity</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span>Cultural sensitivity concerns</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Search Actions */}
                <div className="flex items-center gap-4">
                  <Button className="flex-1">
                    <Search className="mr-2 h-4 w-4" />
                    Generate Domain Suggestions
                  </Button>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Advanced Filters
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    <span className="flex items-center">
                      <RefreshCw className="mr-1 h-3 w-3" />
                      Real-time
                    </span>
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    <span className="flex items-center">
                      <Download className="mr-1 h-3 w-3" />
                      Export
                    </span>
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    <span className="flex items-center">
                      <Star className="mr-1 h-3 w-3" />
                      Save Search
                    </span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardContent className="p-0">
              <Tabs defaultValue="available" className="w-full">
                <div className="border-b px-6">
                  <TabsList>
                    <TabsTrigger value="available">Available (0)</TabsTrigger>
                    <TabsTrigger value="taken">Taken (0)</TabsTrigger>
                    <TabsTrigger value="monitoring">Monitoring (0)</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="available" className="m-0">
                  <ScrollArea className="h-[600px]">
                    <div className="p-6">
                      <div className="rounded-md border">
                        <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium border-b">
                          <div className="col-span-2">Domain</div>
                          <div>TLD</div>
                          <div>Cultural Score</div>
                          <div>Status</div>
                          <div>Actions</div>
                        </div>
                        <div className="text-sm text-muted-foreground text-center py-8">
                          Enter your business description to get domain suggestions
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="taken" className="m-0">
                  <div className="p-6 text-center text-muted-foreground">
                    No taken domains found
                  </div>
                </TabsContent>
                <TabsContent value="monitoring" className="m-0">
                  <div className="p-6 text-center text-muted-foreground">
                    No domains being monitored
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
