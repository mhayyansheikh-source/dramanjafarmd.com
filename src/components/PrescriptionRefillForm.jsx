"use client";

import { Form, Button, Card } from "react-bootstrap";

export default function PrescriptionRefillForm() {
  return (
    <Card className="border-0 shadow-sm glass-panel p-4 h-100">
      <h4 className="fw-bold mb-3 text-dark">Prescription Refill Request</h4>
      <p className="text-muted mb-4 small">Request a refill for an existing prescription. Please allow 24-48 hours for processing.</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold small">Patient Name</Form.Label>
          <Form.Control type="text" placeholder="First Last" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold small">Medication Name</Form.Label>
          <Form.Control type="text" placeholder="e.g. Lisinopril" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold small">Pharmacy Name & Phone</Form.Label>
          <Form.Control type="text" placeholder="CVS - (555) 123-4567" required />
        </Form.Group>
        <Button variant="outline-primary" type="button" className="btn-outline-custom w-100" onClick={() => alert("Refill requested!")}>
          Request Refill
        </Button>
      </Form>
    </Card>
  );
}
