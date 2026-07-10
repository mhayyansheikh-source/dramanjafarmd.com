"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FinalCTA from "@/components/FinalCTA";
import { FaLaptopMedical, FaFilePdf, FaShieldAlt } from "react-icons/fa";

export default function PatientsPage() {
  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold display-4 mb-3">Patient Resources</h1>
          <p className="lead fw-light text-white-50 max-w-700 mx-auto">Access your portal, download forms, and manage your care easily.</p>
        </Container>
      </div>

      <Container className="py-5 my-4">
        <Row className="gy-4 justify-content-center">
          
          {/* Patient Portal */}
          <Col lg={5} md={6}>
            <Card className="h-100 border-0 shadow text-center rounded-4 p-4">
              <Card.Body>
                <FaLaptopMedical size={50} className="text-primary mb-4" />
                <h3 className="fw-bold mb-3">Secure Patient Portal</h3>
                <p className="text-muted mb-4 lh-base">
                  Access your medical records, view test results, request prescription refills, and communicate securely with Dr. Jafar's clinical team 24/7.
                </p>
                <Button variant="primary" size="lg" className="rounded-pill px-5 fw-bold shadow-sm w-100">
                  Login to Portal
                </Button>
                <div className="mt-3 text-muted small">
                  <FaShieldAlt className="me-1 text-success" /> HIPAA Compliant & Secure
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* New Patient Forms */}
          <Col lg={5} md={6} id="forms">
            <Card className="h-100 border-0 shadow text-center rounded-4 p-4">
              <Card.Body>
                <FaFilePdf size={50} className="text-danger mb-4" />
                <h3 className="fw-bold mb-3">New Patient Forms</h3>
                <p className="text-muted mb-4 lh-base">
                  Save time at the clinic! Download, print, and fill out our registration and medical history forms before your first visit to Sugar Land Physicians.
                </p>
                <div className="d-grid gap-3">
                  <Button variant="outline-dark" className="rounded-pill fw-semibold text-start px-4 d-flex justify-content-between align-items-center">
                    <span>Registration Form (PDF)</span>
                    <FaFilePdf className="text-danger" />
                  </Button>
                  <Button variant="outline-dark" className="rounded-pill fw-semibold text-start px-4 d-flex justify-content-between align-items-center">
                    <span>Medical History Form (PDF)</span>
                    <FaFilePdf className="text-danger" />
                  </Button>
                  <Button variant="outline-dark" className="rounded-pill fw-semibold text-start px-4 d-flex justify-content-between align-items-center">
                    <span>Notice of Privacy Practices (PDF)</span>
                    <FaFilePdf className="text-danger" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      
      <FinalCTA />
      <Footer />
    </>
  );
}
