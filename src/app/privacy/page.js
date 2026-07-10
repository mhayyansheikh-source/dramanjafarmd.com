"use client";

import { Container } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export default function PrivacyPolicy() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="section-padding bg-cloud min-vh-100">
        <Container>
          <div className="bg-canvas p-5 rounded-4 shadow-sm border border-light">
            <h1 className="fw-bold text-dark mb-4">Privacy Policy</h1>
            <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h4 className="text-dark mt-4">1. Information We Collect</h4>
            <p className="text-charcoal lh-lg">
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or when you contact us. This may include your name, phone number, email address, and medical history.
            </p>
            
            <h4 className="text-dark mt-4">2. How We Use Your Information</h4>
            <p className="text-charcoal lh-lg">
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            
            <h4 className="text-dark mt-4">3. Will Your Information Be Shared With Anyone?</h4>
            <p className="text-charcoal lh-lg">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. Your medical information is handled with the strict confidentiality required by HIPAA laws.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
