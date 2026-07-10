"use client";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      sticky="top"
      className={`py-3 transition-all ${scrolled ? "shadow-sm" : ""}`}
      style={{ transition: "all 0.3s ease" }}
    >
      <Container>
        {/* Logo */}
        <Link href="/" className="d-flex align-items-center me-4">
          <div className="position-relative" style={{ width: "200px", height: "60px" }}>
            <Image 
              src="/images/logo.png" 
              alt="Dr. Aman Jafar MD" 
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-3">
            <Nav.Link as={Link} href="/" className="fw-semibold text-dark">Home</Nav.Link>
            <Nav.Link as={Link} href="/about" className="fw-semibold text-dark">About Us</Nav.Link>
            <Nav.Link as={Link} href="/services" className="fw-semibold text-dark">Services</Nav.Link>
            <Nav.Link as={Link} href="/patients" className="fw-semibold text-dark">Patient Resources</Nav.Link>
            <Nav.Link as={Link} href="/blog" className="fw-semibold text-dark">Blog</Nav.Link>
            <Nav.Link as={Link} href="/contact" className="fw-semibold text-dark">Contact</Nav.Link>
            <Button as={Link} href="/insurance" variant="outline-primary" className="ms-lg-3 mt-3 mt-lg-0 border-2 fw-semibold">
              Verify Insurance
            </Button>
            <Button as={Link} href="/appointment" variant="primary" className="btn-primary-custom ms-lg-2 mt-3 mt-lg-0 shadow-sm fw-semibold">
              Book Appointment
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
