"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FinalCTA from "@/components/FinalCTA";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="bg-primary text-white py-5 text-center" style={{ backgroundImage: "url('/images/hero-bg-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(1, 112, 185, 0.8)' }}></div>
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <h1 className="fw-bold display-4 mb-3">About Dr. Aman Jafar</h1>
          <p className="lead fw-light">Compassionate Family Medicine in Sugar Land, Texas</p>
        </Container>
      </div>

      <Container className="py-5 my-4">
        <Row className="gy-5 align-items-center mb-5">
          <Col lg={5}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-4 border-white">
              {/* Fallback to a placeholder if real image isn't available, but keeping it structured for the real one */}
              <Image 
                src="/images/logo-3.png" 
                alt="Dr. Aman Jafar" 
                width={600} 
                height={600} 
                style={{ objectFit: "cover", width: "100%", height: "auto", backgroundColor: "#f8f9fa" }}
              />
            </div>
          </Col>
          <Col lg={7}>
            <h2 className="fw-bold text-dark mb-4 border-bottom border-primary border-3 pb-2 d-inline-block">Meet Dr. Aman Jafar, MD</h2>
            <p className="fs-5 text-muted mb-4 lh-base">
              Dr. Aman Jafar is a highly respected, Board Certified Family Practice Doctor serving the Southwest Houston and Sugar Land communities. With years of dedicated experience, Dr. Jafar provides top-notch medical services tailored to patients of all ages—from young children to adults and elderly patients.
            </p>
            <p className="text-muted mb-4 lh-base">
              At Sugar Land Physicians, our mission is to deliver comprehensive, continuous, and compassionate healthcare. Dr. Jafar believes in a preventative approach to medicine, actively working with patients to manage chronic conditions, perform annual wellness exams, and address acute illnesses promptly.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <span className="badge bg-light text-dark border p-3 fs-6 rounded-pill"><span className="text-primary fw-bold me-2">✓</span> Board Certified</span>
              <span className="badge bg-light text-dark border p-3 fs-6 rounded-pill"><span className="text-primary fw-bold me-2">✓</span> Texas Medical Board</span>
              <span className="badge bg-light text-dark border p-3 fs-6 rounded-pill"><span className="text-primary fw-bold me-2">✓</span> Family Medicine</span>
            </div>
          </Col>
        </Row>

        {/* Philosophy of Care */}
        <div id="philosophy" className="bg-light rounded-4 p-5 shadow-sm mt-5 mb-5 border-start border-5 border-primary">
          <Row>
            <Col md={8} className="mx-auto text-center">
              <h3 className="fw-bold mb-4 text-dark">Our Philosophy of Care</h3>
              <p className="fs-5 text-muted fst-italic lh-lg mb-0">
                "We treat every patient like family. Healthcare is a partnership, and our goal is to empower you with the knowledge, preventative strategies, and advanced medical treatments necessary to live your healthiest life. Your well-being is our greatest priority."
              </p>
            </Col>
          </Row>
        </div>

        {/* Facility & Location */}
        <div id="facility" className="mb-5 mt-5 pt-4">
          <Row className="gy-4 text-center">
            <Col md={12}>
              <h3 className="fw-bold text-dark mb-4">Our State-of-the-Art Facility</h3>
              <p className="text-muted fs-5 max-w-700 mx-auto">
                Conveniently located in the heart of Sugar Land at <strong>3531 Town Center Blvd</strong>, our clinic is designed to provide a welcoming, comfortable, and safe environment for you and your loved ones.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      
      <FinalCTA />
      <Footer />
    </>
  );
}
