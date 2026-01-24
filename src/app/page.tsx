import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SuccessStories from "@/components/sections/SuccessStories";
import Talent from "@/components/sections/Talent";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <SuccessStories />
        <Talent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
