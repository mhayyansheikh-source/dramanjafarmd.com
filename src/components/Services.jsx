"use client";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Preventative Medicine",
    content: "Routine checkups, physical exams, and health screenings to prevent illness before it starts."
  },
  {
    title: "Chronic Disease Management",
    content: "Expert management of diabetes, hypertension, asthma, high cholesterol, and other ongoing health issues."
  },
  {
    title: "Immunizations & Vaccinations",
    content: "Full schedule of adult and pediatric vaccines including flu shots, COVID-19, and travel vaccines."
  },
  {
    title: "Women's Health",
    content: "Pap smears, family planning, menopause management, and general women's wellness exams."
  },
  {
    title: "Minor Urgent Care",
    content: "Treatment for minor injuries, lacerations, sprains, and sudden illnesses like strep throat or sinus infections."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h6 className="text-primary fw-bold text-uppercase tracking-wide mb-2">Our Services</h6>
              <h2 className="display-6 fw-bold text-dark mb-4">Comprehensive Care For Your Health</h2>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                We offer a wide range of medical services to address all your healthcare needs under one roof. Our focus is on providing personalized, evidence-based treatments.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion defaultActiveKey="0" flush className="shadow-sm rounded-3 overflow-hidden border">
                {servicesList.map((service, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header className="fw-semibold">{service.title}</Accordion.Header>
                    <Accordion.Body className="text-muted bg-light">
                      {service.content}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
