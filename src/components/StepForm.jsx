"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 50 : -50,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    };
  }
};

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [[page, direction], setPage] = useState([1, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    setStep(step + newDirection);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 5) paginate(1);
  };

  const handleBack = () => {
    if (step > 1) paginate(-1);
  };

  return (
    <div className="glass-panel p-4 p-md-5 rounded-4 h-100 position-relative overflow-hidden">
      <h3 className="mb-2 fw-bold text-primary">Book an Appointment</h3>
      <p className="text-muted mb-4 small">Fast and easy scheduling in just a few steps.</p>

      {step < 5 && (
        <ProgressBar 
          now={(step / 4) * 100} 
          className="mb-4" 
          style={{ height: "6px" }} 
          variant="primary" 
        />
      )}

      <div className="form-step-container position-relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-100 h-100 d-flex flex-column"
          >
            {step === 1 && (
              <Form onSubmit={handleNext} className="flex-grow-1 d-flex flex-column">
                <h5 className="mb-4">1. Reason for Visit</h5>
                <Form.Group className="mb-3">
                  <Form.Check type="radio" label="General Checkup" name="reason" id="r1" defaultChecked />
                  <Form.Check type="radio" label="Vaccination (e.g., COVID-19, Flu)" name="reason" id="r2" className="mt-2" />
                  <Form.Check type="radio" label="Illness / Sick Visit" name="reason" id="r3" className="mt-2" />
                  <Form.Check type="radio" label="Other Consultations" name="reason" id="r4" className="mt-2" />
                </Form.Group>
                <div className="mt-auto d-flex justify-content-end">
                  <Button variant="primary" type="submit" className="btn-primary-custom px-4">Next Step</Button>
                </div>
              </Form>
            )}

            {step === 2 && (
              <Form onSubmit={handleNext} className="flex-grow-1 d-flex flex-column">
                <h5 className="mb-4">2. Patient Type</h5>
                <Form.Group className="mb-3">
                  <Form.Check type="radio" label="Adult" name="patientType" id="p1" defaultChecked />
                  <Form.Check type="radio" label="Child (Pediatric)" name="patientType" id="p2" className="mt-2" />
                  <Form.Check type="radio" label="Senior / Elderly" name="patientType" id="p3" className="mt-2" />
                </Form.Group>
                <div className="mt-auto d-flex justify-content-between">
                  <Button variant="outline-secondary" onClick={handleBack} className="btn-outline-custom text-secondary border-secondary">Back</Button>
                  <Button variant="primary" type="submit" className="btn-primary-custom px-4">Next Step</Button>
                </div>
              </Form>
            )}

            {step === 3 && (
              <Form onSubmit={handleNext} className="flex-grow-1 d-flex flex-column">
                <h5 className="mb-4">3. Preferred Date & Time</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select Time Slot</Form.Label>
                  <Form.Select>
                    <option>Morning (8:00 AM - 12:00 PM)</option>
                    <option>Afternoon (12:00 PM - 5:00 PM)</option>
                  </Form.Select>
                </Form.Group>
                <div className="mt-auto d-flex justify-content-between">
                  <Button variant="outline-secondary" onClick={handleBack} className="btn-outline-custom text-secondary border-secondary">Back</Button>
                  <Button variant="primary" type="submit" className="btn-primary-custom px-4">Next Step</Button>
                </div>
              </Form>
            )}

            {step === 4 && (
              <Form onSubmit={handleNext} className="flex-grow-1 d-flex flex-column">
                <h5 className="mb-4">4. Contact Details</h5>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="tel" placeholder="Phone Number" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email Address" required />
                </Form.Group>
                <div className="mt-auto d-flex justify-content-between">
                  <Button variant="outline-secondary" onClick={handleBack} className="btn-outline-custom text-secondary border-secondary">Back</Button>
                  <Button variant="primary" type="submit" className="btn-primary-custom px-4">Confirm Booking</Button>
                </div>
              </Form>
            )}

            {step === 5 && (
              <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <FaCheckCircle className="text-success mb-3" size={64} />
                </motion.div>
                <h4 className="fw-bold">Request Received!</h4>
                <p className="text-muted">Thank you for booking with Dr. Aman Jafar. Our team will contact you shortly to confirm your appointment time.</p>
                <Button 
                  variant="outline-primary" 
                  className="btn-outline-custom mt-3"
                  onClick={() => { setStep(1); setPage([1, -1]); }}
                >
                  Book Another
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
