import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TobaccoGallery from "@/components/TobaccoGallery";
import TobaccoVarieties from "@/components/TobaccoVarieties";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TobaccoGallery />
        {/* <TobaccoVarieties /> */}
        <Leadership />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
