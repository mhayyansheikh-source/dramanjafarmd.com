"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaClock } from "react-icons/fa";
import SVGLogo from "./SVGLogo";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top border-5 border-primary">
      <Container className="pt-4">
        <Row className="gy-5">
          {/* Column 1: Brand & Mission */}
          <Col lg={4} md={6}>
            <div className="mb-4 bg-white p-3 rounded-3 d-inline-block">
              <SVGLogo width="200" height="55" />
            </div>
            <p className="text-white-50 pe-lg-4 lh-lg mb-4">
              Providing reliable, top-notch medical services for parents, adults, elderly patients, and children in Sugar Land, Texas. Compassionate primary care you can trust.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="bg-white bg-opacity-10 text-white p-2 rounded-circle d-flex align-items-center justify-content-center hover-bg-primary transition-all" style={{ width: "40px", height: "40px" }}>
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white bg-opacity-10 text-white p-2 rounded-circle d-flex align-items-center justify-content-center hover-bg-primary transition-all" style={{ width: "40px", height: "40px" }}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-4 text-uppercase tracking-wider" style={{ letterSpacing: "1px" }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/" className="text-white-50 text-decoration-none hover-white transition-all">Home</Link></li>
              <li><Link href="/about" className="text-white-50 text-decoration-none hover-white transition-all">Meet Dr. Jafar</Link></li>
              <li><Link href="/services" className="text-white-50 text-decoration-none hover-white transition-all">Medical Services</Link></li>
              <li><Link href="/patients" className="text-white-50 text-decoration-none hover-white transition-all">Patient Portal</Link></li>
              <li><Link href="/insurance" className="text-white-50 text-decoration-none hover-white transition-all">Verify Insurance</Link></li>
              <li><Link href="/contact" className="text-white-50 text-decoration-none hover-white transition-all">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Column 3: Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4 text-uppercase tracking-wider" style={{ letterSpacing: "1px" }}>Contact Info</h5>
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 fs-5 flex-shrink-0" />
                <span className="text-white-50 lh-base">
                  3531 Town Center Blvd, S. Ste 101<br />
                  Sugar Land, Texas 77479
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaPhoneAlt className="text-primary fs-5 flex-shrink-0" />
                <a href="tel:+12817711261" className="text-white-50 text-decoration-none hover-white transition-all">281-771-1261</a>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaEnvelope className="text-primary fs-5 flex-shrink-0" />
                <a href="mailto:info@dramanjafarmd.com" className="text-white-50 text-decoration-none hover-white transition-all">info@dramanjafarmd.com</a>
              </li>
              <li className="d-flex align-items-start gap-3">
                <FaClock className="text-primary mt-1 fs-5 flex-shrink-0" />
                <span className="text-white-50 lh-base">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat - Sun: Closed
                </span>
              </li>
            </ul>
          </Col>

          {/* Column 4: Accreditations & Legal */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4 text-uppercase tracking-wider" style={{ letterSpacing: "1px" }}>Accreditations</h5>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="bg-white text-dark p-2 rounded-3 text-center fw-bold shadow-sm" style={{ border: "2px solid #e2e8f0" }}>
                <span className="text-primary">✓</span> Board Certified Physician
              </div>
              <div className="bg-white text-dark p-2 rounded-3 text-center fw-bold shadow-sm" style={{ border: "2px solid #e2e8f0" }}>
                <span className="text-primary">✓</span> Texas Medical Board
              </div>
            </div>
            
            <h6 className="fw-bold mb-3 text-uppercase tracking-wider mt-4" style={{ letterSpacing: "1px" }}>Legal</h6>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              <li><Link href="#" className="text-white-50 text-decoration-none hover-white small">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white-50 text-decoration-none hover-white small">Terms of Service</Link></li>
              <li><Link href="#" className="text-white-50 text-decoration-none hover-white small">HIPAA Compliance</Link></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-secondary opacity-25" />
        
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="text-white-50 small mb-0">
              &copy; {new Date().getFullYear()} Dr. Aman Jafar MD. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-white-50 small mb-0">
              Sugar Land Physicians | Family Practice Doctor
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
