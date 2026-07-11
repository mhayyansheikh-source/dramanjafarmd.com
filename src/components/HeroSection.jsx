"use client";

import { Container, Row, Col, Badge } from "react-bootstrap";
import Link from "next/link";
import { FaCalendarAlt, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="position-relative overflow-hidden text-white d-flex align-items-center" style={{ minHeight: "80vh" }}>
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="position-absolute w-100 h-100" 
        style={{ objectFit: "cover", top: 0, left: 0, zIndex: -3 }}
      >
        {/* Medical Background Video from Mixkit */}
        <source src="https://assets.mixkit.co/videos/17469/17469-720.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Navy / Blue Overlay */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{ 
          top: 0, left: 0, zIndex: -2,
          background: "linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(2, 74, 216, 0.6) 100%)"
        }}
      ></div>

      {/* Geometric Chevron Decorations (HP Style) */}
      <div className="chevron-decoration chevron-left d-none d-md-block"></div>
      <div className="chevron-decoration chevron-right d-none d-md-block"></div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={9}>

            <h1 className="display-2 mb-4 fade-in" style={{ color: "var(--color-on-ink)", animationDelay: "0.1s" }}>
              Top-Notch Primary Care<br />
              <span className="text-primary-soft">In Sugar Land</span>
            </h1>

            <p className="lead fw-normal mb-5 px-md-5 text-cloud fs-4 fade-in" style={{ animationDelay: "0.2s" }}>
              Dr. Aman Jafar provides continuous, compassionate care for your entire family, from pediatrics to geriatrics.
            </p>

            {/* CTAs (HP Enterprise Style) */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5 fade-in" style={{ animationDelay: "0.3s" }}>
              <Link href="/appointment" className="btn button-primary hover-lift d-flex align-items-center gap-2">
                <FaCalendarAlt /> Book Appointment
              </Link>
              <Link href="/insurance" className="btn button-outline-ink text-white border-white hover-lift d-flex align-items-center gap-2" style={{ backgroundColor: 'transparent' }}>
                <FaShieldAlt /> Verify Insurance
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="bg-canvas p-4 shadow-soft-lift hover-lift d-inline-block fade-in" style={{ borderRadius: "var(--rounded-xl)", animationDelay: "0.4s" }}>
              <Row className="align-items-center justify-content-center gy-3 text-start">
                <Col xs={12} md="auto" className="d-flex align-items-center gap-3 pe-md-4 border-end-md" style={{ borderColor: "var(--color-hairline)" }}>
                  <div className="bg-primary text-white rounded-circle p-3 d-flex align-items-center justify-content-center">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <span className="d-block text-charcoal small text-uppercase fw-semibold" style={{ letterSpacing: "1px" }}>Need Immediate Help?</span>
                    <a href="tel:+12817711261" className="fw-bold fs-5 text-ink text-decoration-none">281-771-1261</a>
                  </div>
                </Col>
                <Col xs={12} md="auto" className="d-flex align-items-center gap-3 ps-md-4">
                  <div className="bg-ink text-white rounded-circle p-3 d-flex align-items-center justify-content-center">
                    <FaShieldAlt size={20} />
                  </div>
                  <div>
                    <span className="d-block text-charcoal small text-uppercase fw-semibold" style={{ letterSpacing: "1px" }}>Major Insurances</span>
                    <span className="fw-bold fs-5 text-ink">Accepted Here</span>
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
