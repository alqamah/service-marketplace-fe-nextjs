import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find the Perfect Service</h2>
          <p className="text-xl text-gray-600 mb-8">Connect with skilled professionals for any job you need done.</p>
          <Link href="/services" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Explore Services
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Web Development', 'Graphic Design', 'Content Writing'].map((category) => (
            <ServiceCard key={category} category={category} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
