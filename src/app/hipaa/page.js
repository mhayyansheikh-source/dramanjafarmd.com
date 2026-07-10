"use client";

import { Container } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function HIPAACompliance() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="section-padding bg-cloud min-vh-100">
        <Container>
          <div className="bg-canvas p-5 rounded-4 shadow-sm border border-light">
            <h1 className="fw-bold text-dark mb-4">HIPAA Compliance Notice</h1>
            <p className="text-muted">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <h4 className="text-dark mt-4">Notice of Privacy Practices</h4>
            <p className="text-charcoal lh-lg">
              This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>
            
            <h4 className="text-dark mt-4">Our Legal Duty</h4>
            <p className="text-charcoal lh-lg">
              We are required by applicable federal and state law to maintain the privacy of your health information. We are also required to give you this Notice about our privacy practices, our legal duties, and your rights concerning your health information.
            </p>
            
            <h4 className="text-dark mt-4">Uses and Disclosures of Health Information</h4>
            <p className="text-charcoal lh-lg">
              We use and disclose health information about you for treatment, payment, and healthcare operations. For example:
              <br/><br/>
              <strong>Treatment:</strong> We may use or disclose your health information to a physician or other healthcare provider providing treatment to you.
              <br/>
              <strong>Payment:</strong> We may use and disclose your health information to obtain payment for services we provide to you.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
