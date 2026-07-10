"use client";

import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop", // Modern clinic room
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop", // Clean waiting area
  "https://images.unsplash.com/photo-1538108149393-cebb47ac7927?q=80&w=2070&auto=format&fit=crop"  // Therapy/Consultation room
];

export default function FacilityGallery() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase tracking-wide mb-2">Facility Tour</h6>
          <h2 className="fw-bold text-dark mb-3">A Comfortable, Modern Environment</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            We’ve designed our clinic to feel welcoming and serene, ensuring that every visit is as comfortable and stress-free as possible.
          </p>
        </div>
        
        <Row className="g-4">
          {images.map((src, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-100 position-relative rounded-4 overflow-hidden shadow-sm"
                style={{ aspectRatio: "4/3", cursor: "pointer" }}
              >
                <div 
                  className="w-100 h-100 hover-zoom" 
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.5s ease"
                  }}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
