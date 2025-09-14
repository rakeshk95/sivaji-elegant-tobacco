import Navbar from "@/components/Navbar";
import FarmGrades from "@/components/FarmGrades";
import Footer from "@/components/Footer";

const FarmGradesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <FarmGrades />
      </main>
      <Footer />
    </div>
  );
};

export default FarmGradesPage;
