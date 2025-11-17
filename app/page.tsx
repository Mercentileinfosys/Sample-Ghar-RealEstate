import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import TrustedAgency from "@/components/TrustedAgency";
import PopularListings from "@/components/PopularListings";
import PropertyGallery from "@/components/PropertyGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickStats />
      <TrustedAgency />
      <PopularListings />
      <PropertyGallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
