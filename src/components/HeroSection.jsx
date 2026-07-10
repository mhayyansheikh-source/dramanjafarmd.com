"use client";

import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import { FaCalendarAlt, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="hero-section position-relative overflow-hidden text-white d-flex align-items-center" style={{ minHeight: "80vh" }}>
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="position-absolute w-100 h-100" 
        style={{ objectFit: "cover", top: 0, left: 0, zIndex: -2 }}
      >
        {/* We use a placeholder URL for the video, user should replace with their actual high-quality medical video in public/videos/ */}
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Professional Blue Overlay */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{ 
          top: 0, left: 0, zIndex: -1,
          background: "linear-gradient(135deg, rgba(1, 112, 185, 0.9) 0%, rgba(1, 112, 185, 0.7) 100%)"
        }}
      ></div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={9}>
            
            <Badge bg="light" text="primary" className="px-3 py-2 rounded-pill mb-4 border border-white shadow-sm" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
              NOW ACCEPTING NEW PATIENTS
            </Badge>

            <h1 className="display-3 fw-bold mb-4 text-shadow" style={{ lineHeight: 1.2 }}>
              Compassionate Medical Care<br />
              <span className="text-warning">For Your Entire Family</span>
            </h1>

            <p className="lead fw-normal mb-5 px-md-5 text-white-50 fs-4 text-shadow">
              Dr. Aman Jafar provides top-notch, continuous care for children, adults, and elderly patients in Sugar Land, Texas.
            </p>

            {/* Dual CTAs (Kemah Palms Style) */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mb-5">
              <Link href="/appointment" className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2 hover-scale transition-all text-dark">
                <FaCalendarAlt /> Book Appointment
              </Link>
              <Link href="/insurance" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2 hover-white transition-all border-2">
                <FaShieldAlt /> Verify Insurance
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-4 p-4 border border-white border-opacity-25 shadow-sm d-inline-block">
              <Row className="align-items-center justify-content-center gy-3 text-start">
                <Col xs={12} md="auto" className="d-flex align-items-center gap-3 pe-md-4 border-end-md border-white border-opacity-25">
                  <div className="bg-primary text-white rounded-circle p-3 shadow-sm d-flex align-items-center justify-content-center">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <span className="d-block text-white-50 small text-uppercase fw-semibold" style={{ letterSpacing: "1px" }}>Need Immediate Help?</span>
                    <a href="tel:+12817711261" className="fw-bold fs-5 text-white text-decoration-none hover-warning transition-all">281-771-1261</a>
                  </div>
                </Col>
                <Col xs={12} md="auto" className="d-flex align-items-center gap-3 ps-md-4">
                  <div className="bg-success text-white rounded-circle p-3 shadow-sm d-flex align-items-center justify-content-center">
                    <FaShieldAlt size={20} />
                  </div>
                  <div>
                    <span className="d-block text-white-50 small text-uppercase fw-semibold" style={{ letterSpacing: "1px" }}>Major Insurances</span>
                    <span className="fw-bold fs-5 text-white">Accepted Here</span>
                  </div>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
