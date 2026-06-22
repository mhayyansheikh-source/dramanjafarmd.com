"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaUserMd, FaHeartbeat, FaStethoscope, FaSyringe } from "react-icons/fa";

const categories = [
  { title: "Children", icon: <FaStethoscope size={40} />, desc: "Pediatric care, vaccinations, and wellness checks for your little ones." },
  { title: "Adults", icon: <FaUserMd size={40} />, desc: "Comprehensive primary care, physicals, and preventative medicine." },
  { title: "Elderly", icon: <FaHeartbeat size={40} />, desc: "Geriatric care focused on maintaining health, mobility, and managing chronic conditions." },
  { title: "Parents", icon: <FaSyringe size={40} />, desc: "Family planning, parental health guidance, and general wellness." }
];

export default function Categories() {
  return (
    <section id="patients" className="section-padding bg-light-custom">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-3">Care For The Whole Family</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            We provide specialized medical attention tailored to every stage of life.
          </p>
        </div>
        
        <Row className="g-4">
          {categories.map((category, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-100"
              >
                <Card className="h-100 border-0 shadow-sm text-center p-4 category-card" style={{ transition: "all 0.3s ease", cursor: "pointer" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div className="text-primary mb-3">
                    {category.icon}
                  </div>
                  <Card.Body className="p-0">
                    <Card.Title className="fw-bold mb-3">{category.title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {category.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
