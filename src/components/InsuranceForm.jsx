"use client";

import { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";

export default function InsuranceForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Alert variant="success" className="text-center p-5 shadow-sm rounded-4 border-0">
        <h4 className="fw-bold mb-3">Verification Request Submitted!</h4>
        <p className="mb-0">Our admissions/billing team will review your benefits and contact you shortly with a detailed coverage explanation.</p>
      </Alert>
    );
  }

  return (
    <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
      <div className="text-center mb-4">
        <h3 className="fw-bold text-dark">Verify Your Insurance Benefits</h3>
        <p className="text-muted">Fill out the form below for a free, confidential benefits check.</p>
      </div>

      <Form onSubmit={handleSubmit}>
        <h5 className="text-primary fw-semibold mb-3 border-bottom pb-2">Patient Information</h5>
        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">First Name *</Form.Label>
              <Form.Control type="text" placeholder="John" required className="bg-light-custom border-0 py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Last Name *</Form.Label>
              <Form.Control type="text" placeholder="Doe" required className="bg-light-custom border-0 py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Phone Number *</Form.Label>
              <Form.Control type="tel" placeholder="(123) 456-7890" required className="bg-light-custom border-0 py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Email Address *</Form.Label>
              <Form.Control type="email" placeholder="john@example.com" required className="bg-light-custom border-0 py-2" />
            </Form.Group>
          </Col>
        </Row>

        <h5 className="text-primary fw-semibold mb-3 border-bottom pb-2">Insurance Information</h5>
        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Insurance Provider *</Form.Label>
              <Form.Select required className="bg-light-custom border-0 py-2">
                <option value="">Select Provider...</option>
                <option value="Medicare">Medicare</option>
                <option value="BCBS">BlueCross BlueShield</option>
                <option value="Aetna">Aetna</option>
                <option value="Cigna">Cigna</option>
                <option value="UHC">UnitedHealthcare</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Member ID *</Form.Label>
              <Form.Control type="text" placeholder="ID Number" required className="bg-light-custom border-0 py-2" />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Group Number (Optional)</Form.Label>
              <Form.Control type="text" placeholder="Group Number" className="bg-light-custom border-0 py-2" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Check 
            type="checkbox"
            required
            label="I agree to allow Sugar Land Physicians to verify my medical benefits using the information provided."
            className="text-muted small"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 py-3 fw-bold shadow-sm">
          Submit Verification Request
        </Button>
      </Form>
    </div>
  );
}
