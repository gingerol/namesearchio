import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      {/* Hero Section */}
      <section className="w-full py-24 px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">NameSearch.io</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Find your perfect domain name with our AI-powered search engine
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
              type="text" 
              placeholder="Enter keywords for your domain..." 
              className="h-12 text-lg"
            />
            <Button size="lg" className="h-12 text-lg whitespace-nowrap">Search Domains</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 px-4 md:px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NameSearch.io?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Search</CardTitle>
                <CardDescription>
                  Our advanced AI understands your business needs and suggests the perfect domain names.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Instant Availability</CardTitle>
                <CardDescription>
                  Check domain availability in real-time across multiple TLDs and registrars.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Smart Suggestions</CardTitle>
                <CardDescription>
                  Get creative alternatives and variations based on your keywords and preferences.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
