"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4" style={{ borderTop: "5px solid var(--primary)" }}>
      <Container>
        <Row className="gy-4 mb-4">
          <Col lg={4} md={6}>
            <Image 
              src="https://dramanjafarmd.com/wp-content/uploads/2020/11/logo-3.png" 
              alt="Dr. Aman Jafar Logo" 
              width={200} 
              height={55}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              className="mb-3"
            />
            <p className="text-white-50 small pe-lg-4">
              Providing reliable, top-notch medical services for parents, adults, elderly patients, and children in Sugar Land, Texas.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaLinkedin size={20} /></a>
            </div>
          </Col>
          
          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-3 text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about" className="text-white-50 text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#services" className="text-white-50 text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#patients" className="text-white-50 text-decoration-none">Patients</a></li>
              <li className="mb-2"><a href="#testimonials" className="text-white-50 text-decoration-none">Reviews</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 text-uppercase">Contact Info</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-3 d-flex">
                <FaMapMarkerAlt className="me-3 mt-1 text-primary" size={18} />
                <span>3531 Town Center Blvd, S. Ste 101<br/>Sugar Land, Texas 77479</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3 text-primary" />
                <a href="tel:+18324344558" className="text-white-50 text-decoration-none">+1-832-434-4558</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3 text-primary" />
                <a href="mailto:info@dramanjafarmd.com" className="text-white-50 text-decoration-none">info@dramanjafarmd.com</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3 text-uppercase">Clinic Hours</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Sunday</span>
                <span className="text-danger">Closed</span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="border-secondary" />
        
        <div className="text-center text-white-50 small mt-3">
          &copy; {new Date().getFullYear()} Dr. Aman Jafar. All rights reserved. Designed for optimal patient care.
        </div>
      </Container>
    </footer>
  );
}
