"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="position-relative"
            >
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
                {/* Placeholder for doctor image */}
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-muted">
                  [Doctor Image Placeholder]
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="position-absolute bg-primary text-white p-3 rounded-3 shadow" style={{ bottom: "-20px", right: "-20px", zIndex: 2 }}>
                <h3 className="fw-bold mb-0 text-center">20+</h3>
                <span className="small">Years Experience</span>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h6 className="text-primary fw-bold text-uppercase tracking-wide mb-2">About Us</h6>
              <h2 className="display-6 fw-bold text-dark mb-4">Meet Dr. Aman Jafar</h2>
              
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                At Sugar Land Physicians, we are dedicated to providing the highest quality healthcare for you and your loved ones. Dr. Aman Jafar brings decades of experience in internal and family medicine, ensuring that every patient receives personalized, compassionate care.
              </p>
              
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                Our modern facility is equipped to handle everything from routine checkups and vaccinations to complex chronic disease management. Your health is our priority.
              </p>
              
              <div className="d-flex gap-3">
                <Button variant="primary" className="btn-primary-custom">Read Full Bio</Button>
                <Button variant="outline-primary" className="btn-outline-custom">Contact Clinic</Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
