import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Dr. Aman Jafar MD",
  description: "Get in touch with Dr. Aman Jafar's clinic in Sugar Land.",
};

export default function ContactPage() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <FomoElement />
      <TopBar />
      <Header />
      <div className="flex-grow-1 section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">Contact Us</h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We are here to answer your questions and provide the care you need.
            </p>
          </div>
          <div className="row g-5">
             <div className="col-lg-6">
                <h3 className="fw-bold mb-4">Clinic Information</h3>
                <p><strong>Address:</strong> 3531 Town Center Blvd, S. Ste 101, Sugar Land, TX 77479</p>
                <p><strong>Phone:</strong> <a href="tel:+18324344558">+1-832-434-4558</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@dramanjafarmd.com">info@dramanjafarmd.com</a></p>
                <h4 className="fw-bold mt-4 mb-3">Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
             </div>
             <div className="col-lg-6">
                <ContactForm />
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
