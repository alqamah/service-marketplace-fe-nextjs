import Link from "next/link";
import { Search, UserPlus } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary/20 to-background p-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-primary">
        Welcome to Service Booking App
      </h1>
      <p className="text-xl text-center mb-8 text-muted-foreground max-w-2xl">
        Connect with skilled service providers and book appointments effortlessly.
        <br />
        From home repairs to personal care, find the perfect professional for your needs!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
        >
          <Search className="mr-2 h-4 w-4" />
          Browse Services
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Register
        </Link>
      </div>
    </div>
  );
}
