"use client";

import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
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
              
              <div className="d-flex flex-wrap gap-3">
                <Badge bg="white" text="dark" className="border px-3 py-2 rounded-pill shadow-sm">
                  <span className="text-success me-1">●</span> Accepting New Patients
                </Badge>
                <Badge bg="white" text="dark" className="border px-3 py-2 rounded-pill shadow-sm">
                  ✓ COVID-19 Vaccines Available
                </Badge>
                <Badge bg="white" text="dark" className="border px-3 py-2 rounded-pill shadow-sm">
                  ✓ Walk-ins Welcome
                </Badge>
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
      </Container>
    </section>
  );
}
