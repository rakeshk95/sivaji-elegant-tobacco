import Navbar from "@/components/Navbar";
import ContactInfo from "@/components/ContactInfo";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <ContactInfo />
      </main>
    </div>
  );
};

export default ContactPage;
