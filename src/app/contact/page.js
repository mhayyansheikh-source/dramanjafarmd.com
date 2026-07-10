"use client";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FinalCTA from "@/components/FinalCTA";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="bg-dark text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold display-4 mb-3">Contact Us</h1>
          <p className="lead fw-light text-white-50 max-w-700 mx-auto">We're here to help. Reach out to schedule an appointment or ask a question.</p>
        </Container>
      </div>

      <Container className="py-5 my-4">
        <Row className="gy-5">
          {/* Contact Information */}
          <Col lg={5}>
            <div className="bg-light rounded-4 p-5 h-100 shadow-sm border border-2 border-white">
              <h2 className="fw-bold mb-4 text-dark border-bottom border-primary border-3 pb-2 d-inline-block">Get In Touch</h2>
              <p className="text-muted mb-5">
                Have questions about our services, insurance, or need to schedule a visit? Contact Sugar Land Physicians today.
              </p>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-4">
                  <div className="bg-white p-3 rounded-circle shadow-sm text-primary flex-shrink-0">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark">Clinic Location</h5>
                    <p className="text-muted mb-0 lh-base">
                      3531 Town Center Blvd, S. Ste 101<br />
                      Sugar Land, Texas 77479
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <div className="bg-white p-3 rounded-circle shadow-sm text-primary flex-shrink-0">
                    <FaPhoneAlt size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark">Phone</h5>
                    <a href="tel:+12817711261" className="text-muted text-decoration-none hover-primary fs-5">281-771-1261</a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-4">
                  <div className="bg-white p-3 rounded-circle shadow-sm text-primary flex-shrink-0">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark">Email</h5>
                    <a href="mailto:info@dramanjafarmd.com" className="text-muted text-decoration-none hover-primary">info@dramanjafarmd.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-4">
                  <div className="bg-white p-3 rounded-circle shadow-sm text-primary flex-shrink-0">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark">Hours of Operation</h5>
                    <p className="text-muted mb-0 lh-base">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden h-100">
              <div className="bg-primary text-white p-4">
                <h3 className="fw-bold mb-0">Send Us a Message</h3>
              </div>
              <Card.Body className="p-5">
                <Form>
                  <Row className="gy-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">First Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="John" required className="bg-light border-0 py-3 px-4 rounded-3" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">Last Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Doe" required className="bg-light border-0 py-3 px-4 rounded-3" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">Email Address <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="email" placeholder="john@example.com" required className="bg-light border-0 py-3 px-4 rounded-3" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="(123) 456-7890" className="bg-light border-0 py-3 px-4 rounded-3" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">Message <span className="text-danger">*</span></Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="How can we help you today?" required className="bg-light border-0 py-3 px-4 rounded-3" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button variant="primary" type="submit" size="lg" className="w-100 py-3 rounded-pill fw-bold shadow-sm mt-2">
                        Send Message
                      </Button>
                      <p className="text-muted small text-center mt-3 mb-0">
                        * Please do not submit sensitive medical information through this form. Use our secure Patient Portal instead.
                      </p>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <FinalCTA />
      <Footer />
    </>
  );
}
