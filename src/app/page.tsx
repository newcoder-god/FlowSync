import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import Features from "@/components/Features";

import Pricing from "@/components/Pricing";

import FAQ from "@/components/FAQ";

import BackgroundGlow from "@/components/BackgroundGlow";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-(--background) text-(--foreground) transition-colors duration-300 overflow-hidden">

      <BackgroundGlow />

      <Navbar />

      <Hero />

      <Features />

      <Pricing />

      <FAQ />

    </main>
  );
}