"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-ink d-none d-md-flex align-items-center" style={{ height: "36px" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <ul className="list-inline mb-0 d-flex gap-4 m-0 p-0" style={{ fontSize: "14px", fontWeight: 400 }}>
              <li className="list-inline-item m-0">
                <FaPhoneAlt className="me-2 text-primary-soft" />
                <a href="tel:+18324344558" className="text-white text-decoration-none">1-832-434-4558</a>
              </li>
              <li className="list-inline-item m-0">
                <FaEnvelope className="me-2 text-primary-soft" />
                <a href="mailto:info@dramanjafarmd.com" className="text-white text-decoration-none">info@dramanjafarmd.com</a>
              </li>
              <li className="list-inline-item m-0 text-white">
                <FaMapMarkerAlt className="me-2 text-primary-soft" />
                <span>3531 Town Center Blvd, S. Ste 101, Sugar Land</span>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-end">
             <span className="text-white" style={{ fontSize: "14px", fontWeight: 400 }}>Open Today: 8:00 AM - 5:00 PM</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
