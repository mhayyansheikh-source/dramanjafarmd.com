"use client";

import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Top Utility Bar (Extracted from old TopBar if needed, or integrated here. We'll keep TopBar separate, this is just the main header) */}
      <Navbar bg="white" expand="lg" sticky="top" className="py-3 shadow-sm border-bottom">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center me-4">
            <Image 
              src="/images/logo.png" 
              alt="Dr. Aman Jafar MD" 
              width={220} 
              height={60} 
              style={{ objectFit: "contain" }}
              priority
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto align-items-lg-center">
              
              <Nav.Link as={Link} href="/" className="fw-semibold text-dark px-3 hover-primary">Home</Nav.Link>

              {/* Mega-Menu: About Us */}
              <NavDropdown title={<span className="fw-semibold text-dark hover-primary">About Us</span>} id="about-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/about" className="py-2 hover-bg-light">Meet Dr. Aman Jafar</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#philosophy" className="py-2 hover-bg-light">Philosophy of Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#facility" className="py-2 hover-bg-light">Facility Tour</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#reviews" className="py-2 hover-bg-light">Patient Reviews</NavDropdown.Item>
              </NavDropdown>

              {/* Mega-Menu: Medical Services */}
              <NavDropdown title={<span className="fw-semibold text-dark hover-primary">Medical Services</span>} id="services-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/services" className="py-2 hover-bg-light fw-bold text-primary border-bottom">View All Services</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#primary" className="py-2 hover-bg-light">Primary & Preventive Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#chronic" className="py-2 hover-bg-light">Chronic Disease Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#acute" className="py-2 hover-bg-light">Acute & Urgent Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#wellness" className="py-2 hover-bg-light">Wellness & Annual Exams</NavDropdown.Item>
              </NavDropdown>

              {/* Mega-Menu: Specialized Care */}
              <NavDropdown title={<span className="fw-semibold text-dark hover-primary">Specialized Care</span>} id="specialized-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/services#pediatric" className="py-2 hover-bg-light">Pediatric Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#geriatric" className="py-2 hover-bg-light">Geriatric Health</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#womens" className="py-2 hover-bg-light">Women's Health</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#weight" className="py-2 hover-bg-light">Weight Loss Management</NavDropdown.Item>
              </NavDropdown>

              {/* Mega-Menu: Patient Resources */}
              <NavDropdown title={<span className="fw-semibold text-dark hover-primary">Patient Resources</span>} id="resources-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/patients" className="py-2 hover-bg-light">Patient Portal</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/insurance" className="py-2 hover-bg-light">Verify Insurance</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/patients#forms" className="py-2 hover-bg-light">New Patient Forms</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/contact" className="py-2 hover-bg-light">Contact & Directions</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>

            {/* CTAs */}
            <Nav className="ms-auto align-items-lg-center">
              <div className="d-none d-xl-flex flex-column text-end me-4">
                <small className="text-muted fw-semibold text-nowrap" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>CALL US 24/7</small>
                <a href="tel:+12817711261" className="fw-bold text-primary text-decoration-none text-nowrap" style={{ fontSize: "1.1rem" }}>281-771-1261</a>
              </div>
              
              <Button as={Link} href="/appointment" variant="primary" className="btn-primary-custom rounded-pill px-4 py-2 fw-semibold shadow-sm w-100 w-lg-auto mt-3 mt-lg-0">
                Book Appointment
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
