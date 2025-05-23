import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-8">NameSearch.io</h1>
        <p className="text-lg mb-8">Find your perfect domain name</p>
        <Button size="lg" className="text-lg">Get Started</Button>
      </div>
    </main>
  )
}
