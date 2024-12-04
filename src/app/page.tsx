import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-secondary">Find Your Perfect Flight</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input type="text" placeholder="From" />
            <Input type="text" placeholder="To" />
            <Input type="date" placeholder="Departure" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-opacity-90">Search Flights</Button>
          </form>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-secondary">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Paris', 'Tokyo', 'New York'].map((city) => (
            <Card key={city}>
              <CardHeader>
                <CardTitle className="text-secondary">{city}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={`/placeholder.svg?height=200&width=300`} alt={city} width={300} height={200} className="rounded-md mb-2" />
                <p className="text-foreground mb-2">Experience the magic of {city}</p>
                <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground">Explore Deals</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-secondary">Why Choose FlyEase?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Best Prices', description: 'We guarantee the best deals on flights.' },
            { title: 'Easy Booking', description: 'Book your tickets in just a few clicks.' },
            { title: '24/7 Support', description: 'Our customer support is always here to help.' }
          ].map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

