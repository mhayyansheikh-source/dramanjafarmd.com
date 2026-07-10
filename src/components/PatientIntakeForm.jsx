"use client";

import { Form, Button, Card } from "react-bootstrap";

export default function PatientIntakeForm() {
  return (
    <Card className="border-0 shadow-sm glass-panel p-4 h-100">
      <h4 className="fw-bold mb-3 text-dark">New Patient Intake</h4>
      <p className="text-muted mb-4 small">Please fill out this form before your first visit to expedite the check-in process.</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold small">Full Legal Name</Form.Label>
          <Form.Control type="text" placeholder="First Last" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold small">Date of Birth</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold small">Primary Reason for Visit</Form.Label>
          <Form.Control as="textarea" rows={2} required />
        </Form.Group>
        <Button variant="primary" type="button" className="btn-primary-custom w-100" onClick={() => alert("Form submitted!")}>
          Submit Securely
        </Button>
      </Form>
    </Card>
  );
}
