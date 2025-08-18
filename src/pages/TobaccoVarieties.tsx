import Navbar from "@/components/Navbar";
import TobaccoVarieties from "@/components/TobaccoVarieties";
import Footer from "@/components/Footer";

const TobaccoVarietiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <TobaccoVarieties />
      </main>
      <Footer />
    </div>
  );
};

export default TobaccoVarietiesPage;
