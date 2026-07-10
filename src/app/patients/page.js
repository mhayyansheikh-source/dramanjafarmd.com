import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FomoElement from "@/components/FomoElement";
import PatientIntakeForm from "@/components/PatientIntakeForm";
import PrescriptionRefillForm from "@/components/PrescriptionRefillForm";

export const metadata = {
  title: "Patient Resources | Dr. Aman Jafar MD",
  description: "Patient forms, portal login, and resources.",
};

export default function PatientsPage() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <FomoElement />
      <TopBar />
      <Header />
      <div className="flex-grow-1 section-padding bg-light-custom">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">Patient Resources</h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Access important forms, request refills, and manage your health information.
            </p>
          </div>
          <div className="row g-5">
             <div className="col-lg-6">
                <PatientIntakeForm />
             </div>
             <div className="col-lg-6">
                <PrescriptionRefillForm />
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
