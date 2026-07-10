import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsuranceForm from "@/components/InsuranceForm";

export const metadata = {
  title: "Verify Insurance | Dr. Aman Jafar - Sugar Land Physicians",
  description: "Verify your health insurance benefits with Dr. Aman Jafar. We accept Medicare, BlueCross BlueShield, Aetna, Cigna, and more.",
};

export default function InsurancePage() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <TopBar />
      <Header />
      
      <div className="flex-grow-1 bg-light-custom" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <InsuranceForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
