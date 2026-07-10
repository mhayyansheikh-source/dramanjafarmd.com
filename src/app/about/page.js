import AboutUs from "@/components/AboutUs";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";

export const metadata = {
  title: "About Us | Dr. Aman Jafar MD",
  description: "Learn more about Dr. Aman Jafar and the team at Sugar Land Physicians.",
};

export default function AboutPage() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <FomoElement />
      <TopBar />
      <Header />
      <div className="flex-grow-1" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark">About Our Practice</h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Dedicated to providing the highest quality healthcare for you and your loved ones in Sugar Land.
            </p>
          </div>
        </div>
        <AboutUs />
      </div>
      <Footer />
    </main>
  );
}
