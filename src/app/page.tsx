import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import ContentShowcase from "@/components/sections/ContentShowcase";
import Contact from "@/components/sections/Contact";
import Talent from "@/components/sections/Talent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Results />
        <ContentShowcase />
        <Contact />
        <Talent />
      </main>
      <Footer />
    </div>
  );
}
