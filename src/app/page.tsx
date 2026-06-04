import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      <Background />

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <Footer />

    </main>
  );
}