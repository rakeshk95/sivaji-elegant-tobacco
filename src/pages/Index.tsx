import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TobaccoGallery from "@/components/TobaccoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TobaccoGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
