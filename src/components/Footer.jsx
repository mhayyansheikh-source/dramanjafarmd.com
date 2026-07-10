"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaClock } from "react-icons/fa";
import SVGLogo from "./SVGLogo";

export default function Footer() {
  return (
    <footer className="bg-ink mt-auto" style={{ padding: "64px 32px" }}>
      <Container>
        <Row className="gy-5">
          {/* Column 1: Brand & Mission */}
          <Col lg={4} md={6}>
            <div className="mb-4 bg-canvas p-3 rounded-3 d-inline-block">
              <SVGLogo width="200" height="55" />
            </div>
            <p className="mb-4 text-white" style={{ opacity: 0.8 }}>
              Providing reliable, top-notch medical services for parents, adults, elderly patients, and children in Sugar Land, Texas. Compassionate primary care you can trust.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="bg-canvas text-ink p-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", borderRadius: "var(--rounded-md)" }}>
                <FaFacebookF />
              </a>
              <a href="#" className="bg-canvas text-ink p-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", borderRadius: "var(--rounded-md)" }}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="mb-4" style={{ fontWeight: 500, color: "var(--color-on-primary)" }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Home</Link></li>
              <li><Link href="/about" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Meet Dr. Jafar</Link></li>
              <li><Link href="/services" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Medical Services</Link></li>
              <li><Link href="/patients" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Patient Portal</Link></li>
              <li><Link href="/insurance" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Verify Insurance</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Contact Us</Link></li>
            </ul>
          </Col>

          {/* Column 3: Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="mb-4" style={{ fontWeight: 500, color: "var(--color-on-primary)" }}>Contact Info</h5>
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 fs-5 flex-shrink-0" />
                <span className="text-white" style={{ opacity: 0.8 }}>
                  3531 Town Center Blvd, S. Ste 101<br />
                  Sugar Land, Texas 77479
                </span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaPhoneAlt className="text-primary fs-5 flex-shrink-0" />
                <a href="tel:+12817711261" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>281-771-1261</a>
              </li>
              <li className="d-flex align-items-center gap-3">
                <FaEnvelope className="text-primary fs-5 flex-shrink-0" />
                <a href="mailto:info@dramanjafarmd.com" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>info@dramanjafarmd.com</a>
              </li>
              <li className="d-flex align-items-start gap-3">
                <FaClock className="text-primary mt-1 fs-5 flex-shrink-0" />
                <span className="text-white" style={{ opacity: 0.8 }}>
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat - Sun: Closed
                </span>
              </li>
            </ul>
          </Col>

          {/* Column 4: Accreditations & Legal */}
          <Col lg={3} md={6}>
            <h5 className="mb-4" style={{ fontWeight: 500, color: "var(--color-on-primary)" }}>Accreditations</h5>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="bg-canvas text-ink p-2 text-center" style={{ borderRadius: "var(--rounded-md)" }}>
                <span className="text-primary">✓</span> Board Certified Physician
              </div>
              <div className="bg-canvas text-ink p-2 text-center" style={{ borderRadius: "var(--rounded-md)" }}>
                <span className="text-primary">✓</span> Texas Medical Board
              </div>
            </div>
            
            <h6 className="mb-3 mt-4" style={{ fontWeight: 500, color: "var(--color-on-primary)" }}>Legal</h6>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              <li><Link href="#" className="text-white text-decoration-none" style={{ fontSize: "12px", opacity: 0.6 }}>Privacy Policy</Link></li>
              <li><Link href="#" className="text-white text-decoration-none" style={{ fontSize: "12px", opacity: 0.6 }}>Terms of Service</Link></li>
              <li><Link href="#" className="text-white text-decoration-none" style={{ fontSize: "12px", opacity: 0.6 }}>HIPAA Compliance</Link></li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
        
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="text-white mb-0" style={{ fontSize: "12px", opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} Dr. Aman Jafar MD. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-white mb-0" style={{ fontSize: "12px", opacity: 0.6 }}>
              Sugar Land Physicians | Family Practice Doctor
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
