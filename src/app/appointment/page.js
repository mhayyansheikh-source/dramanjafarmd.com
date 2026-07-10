import AppointmentForm from "@/components/AppointmentForm";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book Appointment | Dr. Aman Jafar",
  description: "Schedule your appointment with Dr. Aman Jafar. We offer preventative care, chronic disease management, and more in Sugar Land, TX.",
};

export default function AppointmentPage() {
  return (
    <main className="d-flex flex-column min-vh-100 bg-light bg-opacity-50">
      <TopBar />
      <Header />
      
      <div className="flex-grow-1" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <AppointmentForm />
      </div>

      <Footer />
    </main>
  );
}
