"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaUserMd, FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="section-padding bg-canvas" id="about">
      <Container>
        <Row className="align-items-center gy-5">
          {/* Left Side: Professional Image */}
          <Col lg={5} className="position-relative">
            <div className="position-relative overflow-hidden" style={{ minHeight: "500px", borderRadius: "var(--rounded-xl)" }}>
              <Image 
                src="https://dramanjafarmd.com/wp-content/uploads/2020/11/DSC00645-1024x577.jpg"
                alt="Dr. Aman Jafar MD" 
                fill 
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            
            {/* Floating Badge - Restyled as a feature tag */}
            <div className="position-absolute bottom-0 start-0 translate-middle-x bg-ink text-white p-3 shadow-soft-lift ms-5 mb-5 d-none d-md-block" style={{ borderRadius: "var(--rounded-xl)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 className="display-md mb-0 text-white">20+</h3>
              <p className="mb-0 text-cloud" style={{ fontSize: "14px", fontWeight: 700 }}>Years Experience</p>
            </div>
          </Col>

          {/* Right Side: Welcome Narrative */}
          <Col lg={6} className="offset-lg-1">
            <span className="badge-pill-outline d-inline-block mb-3">
              Meet The Doctor
            </span>
            <h2 className="display-xl mb-4 text-ink">
              Welcome to <span className="text-primary">Dr. Aman Jafar MD</span>
            </h2>
            <p className="text-ink fs-5 mb-4" style={{ fontWeight: 400 }}>
              Providing compassionate, comprehensive medical care for your entire family in Sugar Land, Texas.
            </p>
            <p className="text-charcoal mb-4">
              At our practice, we treat every patient like family. With extensive experience in Internal Medicine, Pediatrics, and Geriatrics, Dr. Jafar is committed to delivering highly personalized care. Whether you are seeking preventive healthcare, chronic disease management, or acute care, we are here to support your journey to optimal health.
            </p>
            
            <Row className="mb-4 g-3">
              <Col sm={6}>
                <div className="d-flex align-items-center text-ink" style={{ fontWeight: 500 }}>
                  <FaCheckCircle className="text-primary me-2" size={20} /> Board Certified
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center text-ink" style={{ fontWeight: 500 }}>
                  <FaCheckCircle className="text-primary me-2" size={20} /> Texas Medical Board
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center text-ink" style={{ fontWeight: 500 }}>
                  <FaCheckCircle className="text-primary me-2" size={20} /> Compassionate Care
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center text-ink" style={{ fontWeight: 500 }}>
                  <FaCheckCircle className="text-primary me-2" size={20} /> Modern Facility
                </div>
              </Col>
            </Row>

            <Link href="/about" className="btn button-outline mt-3 d-inline-flex align-items-center gap-2">
              <FaUserMd /> Read Full Biography
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
