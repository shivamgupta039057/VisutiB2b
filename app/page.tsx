import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { Customers } from "@/components/home/customers";
import { Comparison } from "@/components/home/comparison";
import { Features } from "@/components/home/features";
import { AIStack } from "@/components/home/ai-stack";
import { Insights } from "@/components/home/insights";
import { Testimonials } from "@/components/home/testimonials";
import { Benefits } from "@/components/home/benefits";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-4 focus:text-brand focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Customers />
        <Comparison />
        <Features />
        <AIStack />
        <Insights />
        <Testimonials />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
