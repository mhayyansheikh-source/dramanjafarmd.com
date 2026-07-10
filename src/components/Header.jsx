"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import SVGLogo from "./SVGLogo";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar 
        expand="lg" 
        className={`sticky-top transition-all shadow-soft-lift bg-canvas`}
        style={{ minHeight: "64px", borderBottom: "1px solid var(--color-hairline)" }}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center me-4">
            <SVGLogo width="220" height="50" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" className="border-0 shadow-none">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto align-items-lg-center">
              
              <Nav.Link as={Link} href="/" className="text-ink px-3" style={{ fontWeight: 500 }}>Home</Nav.Link>

              {/* Mega-Menu: About Us */}
              <NavDropdown title={<span className="text-ink" style={{ fontWeight: 500 }}>About Us</span>} id="about-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/about" className="py-2 text-charcoal">Meet Dr. Aman Jafar</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#philosophy" className="py-2 text-charcoal">Philosophy of Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#facility" className="py-2 text-charcoal">Facility Tour</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#reviews" className="py-2 text-charcoal">Patient Reviews</NavDropdown.Item>
              </NavDropdown>

              {/* Mega-Menu: Medical Services */}
              <NavDropdown title={<span className="text-ink" style={{ fontWeight: 500 }}>Medical Services</span>} id="services-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/services" className="py-2 text-primary" style={{ fontWeight: 600 }}>View All Services</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#primary" className="py-2 text-charcoal">Primary & Preventive Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#chronic" className="py-2 text-charcoal">Chronic Disease Management</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#acute" className="py-2 text-charcoal">Acute & Urgent Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#wellness" className="py-2 text-charcoal">Wellness & Annual Exams</NavDropdown.Item>
              </NavDropdown>

              {/* Mega-Menu: Specialized Care */}
              <NavDropdown title={<span className="text-ink" style={{ fontWeight: 500 }}>Specialized Care</span>} id="specialized-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/services#pediatric" className="py-2 text-charcoal">Pediatric Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#geriatric" className="py-2 text-charcoal">Geriatric Health</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#womens" className="py-2 text-charcoal">Women's Health</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services#weight" className="py-2 text-charcoal">Weight Loss Management</NavDropdown.Item>
              </NavDropdown>

              {/* Mega-Menu: Patient Resources */}
              <NavDropdown title={<span className="text-ink" style={{ fontWeight: 500 }}>Patient Resources</span>} id="resources-nav-dropdown" className="px-2">
                <NavDropdown.Item as={Link} href="/patients" className="py-2 text-charcoal">Patient Portal</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/insurance" className="py-2 text-charcoal">Verify Insurance</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/patients#forms" className="py-2 text-charcoal">New Patient Forms</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/contact" className="py-2 text-charcoal">Contact & Directions</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>

            {/* CTAs */}
            <Nav className="ms-auto align-items-lg-center">
              <div className="d-none d-xl-flex flex-column text-end me-4">
                <small className="text-charcoal text-nowrap" style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1px" }}>CALL US 24/7</small>
                <a href="tel:+12817711261" className="text-ink text-decoration-none text-nowrap" style={{ fontSize: "16px", fontWeight: 700 }}>281-771-1261</a>
              </div>
              
              <Link href="/appointment" className="btn button-primary w-100 w-lg-auto mt-3 mt-lg-0">
                Book Appointment
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
