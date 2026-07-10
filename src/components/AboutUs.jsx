"use client";

import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaUserMd, FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="py-5 bg-white" id="about">
      <Container className="py-md-5">
        <Row className="align-items-center gy-5">
          {/* Left Side: Professional Image */}
          <Col lg={5} className="position-relative">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ minHeight: "500px" }}>
              {/* Note: User should replace this placeholder with Dr. Jafar's real high-quality photo in public/images/ */}
              <Image 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt="Dr. Aman Jafar MD" 
                fill 
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="hover-scale transition-all"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="position-absolute bottom-0 start-0 translate-middle-x bg-primary text-white p-4 rounded-3 shadow-lg ms-5 mb-5 d-none d-md-block">
              <h3 className="fw-bold mb-0">20+</h3>
              <p className="mb-0 small fw-semibold text-uppercase" style={{ letterSpacing: "1px" }}>Years Experience</p>
            </div>
          </Col>

          {/* Right Side: Welcome Narrative */}
          <Col lg={6} className="offset-lg-1">
            <Badge bg="primary" className="px-3 py-2 rounded-pill mb-3 fw-semibold text-uppercase" style={{ letterSpacing: "2px" }}>
              Meet The Doctor
            </Badge>
            <h2 className="display-5 fw-bold mb-4 text-dark">
              Welcome to <span className="text-primary">Dr. Aman Jafar MD</span>
            </h2>
            <p className="lead text-muted mb-4">
              Providing compassionate, comprehensive medical care for your entire family in Sugar Land, Texas.
            </p>
            <p className="text-secondary mb-4 lh-lg">
              At our practice, we treat every patient like family. With extensive experience in Internal Medicine, Pediatrics, and Geriatrics, Dr. Jafar is committed to delivering highly personalized care. Whether you are seeking preventive healthcare, chronic disease management, or acute care, we are here to support your journey to optimal health.
            </p>
            
            <Row className="mb-4 g-3">
              <Col sm={6}>
                <div className="d-flex align-items-center text-dark fw-semibold">
                  <FaCheckCircle className="text-primary me-2" size={20} /> Board Certified
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center text-dark fw-semibold">
                  <FaCheckCircle className="text-primary me-2" size={20} /> Texas Medical Board
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center text-dark fw-semibold">
                  <FaCheckCircle className="text-primary me-2" size={20} /> Compassionate Care
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center text-dark fw-semibold">
                  <FaCheckCircle className="text-primary me-2" size={20} /> Modern Facility
                </div>
              </Col>
            </Row>

            <Button as={Link} href="/about" variant="outline-primary" size="lg" className="rounded-pill px-5 fw-bold mt-2 hover-white">
              <FaUserMd className="me-2" /> Read Full Biography
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
