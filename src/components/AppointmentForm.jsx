"use client";

import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaCalendarAlt, FaUserAlt, FaStethoscope } from "react-icons/fa";

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
  });

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    nextStep();
  };

  const calculateProgress = () => {
    if (step === 1) return 33;
    if (step === 2) return 66;
    if (step === 3) return 100;
    return 100;
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Book an Appointment</h2>
            <p className="text-muted">Take the first step toward better health. Fill out the details below.</p>
          </div>

          <Card className="shadow border-0 rounded-4 overflow-hidden">
            <ProgressBar now={calculateProgress()} variant="primary" style={{ height: "6px" }} />
            
            <Card.Body className="p-4 p-md-5">
              {/* STEP 1: Reason for Visit */}
              {step === 1 && (
                <div className="fade-in">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                      <FaStethoscope size={24} />
                    </div>
                    <h4 className="fw-bold mb-0">Reason for Visit</h4>
                  </div>
                  
                  <Row className="gy-3">
                    {["Annual Physical", "Sick Visit", "Chronic Care Follow-up", "Vaccination", "Prescription Refill", "Other"].map((reason, index) => (
                      <Col md={6} key={index}>
                        <div 
                          className={`border rounded-3 p-3 cursor-pointer text-center transition-all hover-lift ${formData.reason === reason ? 'border-primary bg-primary bg-opacity-10' : 'bg-canvas'}`}
                          style={{ cursor: "pointer" }}
                          onClick={() => setFormData({ ...formData, reason })}
                        >
                          <span className={formData.reason === reason ? "fw-bold text-primary" : "text-dark"}>{reason}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  <div className="d-flex justify-content-end mt-5">
                    <Button 
                      className="btn button-primary hover-lift px-5 rounded-pill fw-semibold" 
                      onClick={nextStep}
                      disabled={!formData.reason}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Time */}
              {step === 2 && (
                <div className="fade-in">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                      <FaCalendarAlt size={24} />
                    </div>
                    <h4 className="fw-bold mb-0">Preferred Date & Time</h4>
                  </div>
                  
                  <Row className="gy-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">Select Date</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={updateFormData}
                          className="form-control"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold">Select Time Window</Form.Label>
                        <Form.Select 
                          name="time"
                          value={formData.time}
                          onChange={updateFormData}
                          className="form-control"
                        >
                          <option value="">Choose a time...</option>
                          <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-between mt-5">
                    <Button className="btn button-outline-ink hover-lift px-4 rounded-pill fw-semibold" onClick={prevStep}>
                      Back
                    </Button>
                    <Button 
                      className="btn button-primary hover-lift px-5 rounded-pill fw-semibold" 
                      onClick={nextStep}
                      disabled={!formData.date || !formData.time}
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: Patient Details */}
              {step === 3 && (
                <div className="fade-in">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                      <FaUserAlt size={24} />
                    </div>
                    <h4 className="fw-bold mb-0">Patient Details</h4>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    <Row className="gy-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-semibold text-muted small text-uppercase">First Name</Form.Label>
                          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={updateFormData} className="form-control" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-semibold text-muted small text-uppercase">Last Name</Form.Label>
                          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={updateFormData} className="form-control" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-semibold text-muted small text-uppercase">Email Address</Form.Label>
                          <Form.Control type="email" name="email" value={formData.email} onChange={updateFormData} className="form-control" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-semibold text-muted small text-uppercase">Phone Number</Form.Label>
                          <Form.Control type="tel" name="phone" value={formData.phone} onChange={updateFormData} className="form-control" required />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="fw-semibold text-muted small text-uppercase">Date of Birth</Form.Label>
                          <Form.Control type="date" name="dob" value={formData.dob} onChange={updateFormData} className="form-control" required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="d-flex justify-content-between mt-5">
                      <Button className="btn button-outline-ink hover-lift px-4 rounded-pill fw-semibold" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="submit" className="btn button-primary hover-lift px-5 rounded-pill fw-bold shadow-sm">
                        Submit Request
                      </Button>
                    </div>
                  </Form>
                </div>
              )}

              {/* SUCCESS STEP */}
              {step === 4 && (
                <div className="text-center py-5 fade-in">
                  <FaCheckCircle size={80} className="text-success mb-4" />
                  <h3 className="fw-bold text-dark">Request Received!</h3>
                  <p className="text-muted mx-auto" style={{ maxWidth: "500px" }}>
                    Thank you, {formData.firstName}. We have received your appointment request for a {formData.reason}. Our staff will contact you shortly to confirm your exact appointment time.
                  </p>
                  <Button className="btn button-outline-ink hover-lift mt-4 px-4 rounded-pill" onClick={() => window.location.href = "/"}>
                    Return Home
                  </Button>
                </div>
              )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
