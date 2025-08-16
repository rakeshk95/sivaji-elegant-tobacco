import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TobaccoVarieties from "@/components/TobaccoVarieties";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TobaccoVarieties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
