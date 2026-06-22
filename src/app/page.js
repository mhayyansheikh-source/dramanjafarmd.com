import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <TopBar />
      <Header />
      
      <div className="flex-grow-1">
        <HeroSection />
        <AboutUs />
        <Categories />
        <Services />
        <Testimonials />
      </div>

      <Footer />
      <FomoElement />
    </main>
  );
}
