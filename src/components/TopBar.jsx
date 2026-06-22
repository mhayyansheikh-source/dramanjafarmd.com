"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="top-bar d-none d-md-block py-2">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <ul className="list-inline mb-0 d-flex gap-4">
              <li className="list-inline-item m-0">
                <FaPhoneAlt className="me-2" />
                <a href="tel:+18324344558">+1-832-434-4558</a>
              </li>
              <li className="list-inline-item m-0">
                <FaEnvelope className="me-2" />
                <a href="mailto:info@dramanjafarmd.com">info@dramanjafarmd.com</a>
              </li>
              <li className="list-inline-item m-0">
                <FaMapMarkerAlt className="me-2" />
                <span>3531 Town Center Blvd, S. Ste 101, Sugar Land</span>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-end">
             <span className="badge bg-light text-primary fw-bold px-3 py-2">Open Today: 8:00 AM - 5:00 PM</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
