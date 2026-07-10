"use client";

import { Container } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function TermsOfService() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="section-padding bg-cloud min-vh-100">
        <Container>
          <div className="bg-canvas p-5 rounded-4 shadow-sm border border-light">
            <h1 className="fw-bold text-dark mb-4">Terms of Service</h1>
            <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h4 className="text-dark mt-4">1. Agreement to Terms</h4>
            <p className="text-charcoal lh-lg">
              By accessing our website and using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the service.
            </p>
            
            <h4 className="text-dark mt-4">2. Medical Disclaimer</h4>
            <p className="text-charcoal lh-lg">
              The content on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            
            <h4 className="text-dark mt-4">3. Appointments and Cancellations</h4>
            <p className="text-charcoal lh-lg">
              We request that you give us at least 24 hours notice in the event that you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient who may need medical care.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
