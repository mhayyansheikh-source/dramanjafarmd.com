"use client";

import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="border-0 shadow-sm glass-panel p-5 text-center h-100 justify-content-center">
         <h4 className="text-success fw-bold mb-3">Message Sent!</h4>
         <p className="text-muted">Thank you for contacting us. We will get back to you shortly.</p>
         <Button variant="outline-primary" className="btn-outline-custom mt-3" onClick={() => setSubmitted(false)}>Send Another Message</Button>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm glass-panel p-4">
      <h4 className="fw-bold mb-4 text-dark">Send us a Message</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Full Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" required className="py-2" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold">Email Address</Form.Label>
          <Form.Control type="email" placeholder="john@example.com" required className="py-2" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="How can we help you?" required className="py-2" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-primary-custom w-100">
          Send Message
        </Button>
      </Form>
    </Card>
  );
}
