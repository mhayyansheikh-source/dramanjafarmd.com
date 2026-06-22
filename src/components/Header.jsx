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
        <Navbar.Brand href="/">
          <Image 
            src="https://dramanjafarmd.com/wp-content/uploads/2020/11/logo-3.png" 
            alt="Dr. Aman Jafar Logo" 
            width={200} 
            height={55}
            style={{ objectFit: "contain" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-3">
            <Nav.Link as={Link} href="#about" className="fw-semibold text-dark">About Us</Nav.Link>
            <Nav.Link as={Link} href="#services" className="fw-semibold text-dark">Services</Nav.Link>
            <Nav.Link as={Link} href="#patients" className="fw-semibold text-dark">Patients</Nav.Link>
            <Nav.Link as={Link} href="#testimonials" className="fw-semibold text-dark">Reviews</Nav.Link>
            <Button variant="primary" className="btn-primary-custom ms-lg-3 mt-3 mt-lg-0">
              Book Appointment
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
