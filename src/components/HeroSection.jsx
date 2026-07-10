"use client";

import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaStar, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import StepForm from "./StepForm";

export default function HeroSection() {
  return (
    <section className="position-relative bg-light-custom overflow-hidden" style={{ padding: "100px 0" }}>
      {/* Background decoration */}
      <div className="position-absolute rounded-circle" style={{ width: "600px", height: "600px", background: "linear-gradient(135deg, rgba(1,112,185,0.1) 0%, rgba(255,255,255,0) 100%)", top: "-100px", left: "-100px", zIndex: 0 }}></div>
      
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex text-warning me-2">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <span className="text-muted fw-semibold">4.9/5 from 500+ Patients</span>
              </div>
              
              <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: "1.2" }}>
                Reliable & Top-Notch <span className="text-primary">Medical Services</span> in Sugar Land
              </h1>
              
              <p className="lead text-muted mb-5">
                Compassionate primary care for parents, adults, elderly patients, and children. Dr. Aman Jafar and the team are here to keep your family healthy.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button as={Link} href="tel:+12817711261" variant="primary" size="lg" className="btn-primary-custom shadow fw-bold d-flex align-items-center gap-2">
                  <FaPhoneAlt /> Call Us 24/7
                </Button>
                <Button as={Link} href="/insurance" variant="outline-primary" size="lg" className="border-2 fw-bold d-flex align-items-center gap-2 bg-white">
                  <FaShieldAlt /> Verify Insurance
                </Button>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-100"
            >
              <StepForm />
            </motion.div>
          </Col>
        </Row>
        
        {/* Trust Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 pt-4 border-top"
        >
          <p className="text-center text-muted fw-semibold mb-3">ACCEPTED INSURANCES INCLUDE:</p>
          <div className="d-flex flex-wrap justify-content-center gap-4 align-items-center opacity-75">
            <h5 className="mb-0 fw-bold text-secondary">Medicare</h5>
            <h5 className="mb-0 fw-bold text-secondary">BlueCross BlueShield</h5>
            <h5 className="mb-0 fw-bold text-secondary">Aetna</h5>
            <h5 className="mb-0 fw-bold text-secondary">Cigna</h5>
            <h5 className="mb-0 fw-bold text-secondary">UnitedHealthcare</h5>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
