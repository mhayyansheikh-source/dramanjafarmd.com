import Services from "@/components/Services";
import Categories from "@/components/Categories";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";

export const metadata = {
  title: "Services | Dr. Aman Jafar MD",
  description: "Comprehensive medical services and treatments offered by Dr. Aman Jafar.",
};

export default function ServicesPage() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <FomoElement />
      <TopBar />
      <Header />
      <div className="flex-grow-1">
        <Categories />
        <Services />
      </div>
      <Footer />
    </main>
  );
}
