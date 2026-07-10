import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InsurancePartners from "@/components/InsurancePartners";
import AboutUs from "@/components/AboutUs";
import MedicalPrograms from "@/components/MedicalPrograms";
import Testimonials from "@/components/Testimonials";
import FacilityGallery from "@/components/FacilityGallery";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <FomoElement />
      <TopBar />
      <Header />
      
      <div className="flex-grow-1">
        <HeroSection />
        <InsurancePartners />
        <AboutUs />
        <MedicalPrograms />
        <Testimonials />
        <FacilityGallery />
        <FinalCTA />
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
