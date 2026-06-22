"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    review: "Dr. Jafar is incredibly attentive and truly listens to his patients. The staff is friendly, and I never have to wait long for my appointment.",
    rating: 5
  },
  {
    name: "John D.",
    review: "Best primary care experience I've had in Sugar Land. They handled my chronic condition with expertise and genuine care.",
    rating: 5
  },
  {
    name: "Emily R.",
    review: "Took my kids in for their vaccinations. The nurses were so gentle and made the whole process stress-free.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-light-custom">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-3">What Our Patients Say</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Real reviews from our community in Sugar Land.
          </p>
        </div>
        
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-100"
              >
                <Card className="h-100 testimonial-card p-4">
                  <div className="text-primary mb-3">
                    <FaQuoteLeft size={30} opacity={0.2} />
                  </div>
                  <Card.Body className="p-0 d-flex flex-column">
                    <Card.Text className="text-muted fst-italic mb-4 flex-grow-1">
                      "{testimonial.review}"
                    </Card.Text>
                    <div className="mt-auto">
                      <div className="d-flex text-warning mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} size={14} />)}
                      </div>
                      <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                      <small className="text-muted">Verified Patient</small>
                    </div>
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
