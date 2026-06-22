"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Form, Button } from "react-bootstrap";
import { FaCheckCircle, FaUserMd, FaSyringe, FaStethoscope, FaClipboardList, FaUserAlt, FaChild, FaUserNurse } from "react-icons/fa";

// Smooth transition variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    scale: 0.98
  })
};

// Custom Selectable Card Component
const SelectCard = ({ icon, label, selected, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`p-3 mb-3 rounded-4 border d-flex align-items-center cursor-pointer transition-all ${
      selected ? "border-primary bg-primary bg-opacity-10 shadow-sm" : "border-light-subtle bg-white hover-bg-light"
    }`}
    style={{ cursor: "pointer", transition: "all 0.2s ease" }}
  >
    <div className={`me-3 rounded-circle p-2 d-flex align-items-center justify-content-center ${selected ? "bg-primary text-white" : "bg-light text-muted"}`} style={{ width: "40px", height: "40px" }}>
      {icon}
    </div>
    <span className={`fw-semibold ${selected ? "text-primary" : "text-dark"}`}>{label}</span>
    {selected && <FaCheckCircle className="ms-auto text-primary" />}
  </motion.div>
);

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [[page, direction], setPage] = useState([1, 0]);
  
  // Form State
  const [formData, setFormData] = useState({
    reason: "General Checkup",
    patientType: "Adult",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: ""
  });

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    setStep(step + newDirection);
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (step < 5) paginate(1);
  };

  const handleBack = () => {
    if (step > 1) paginate(-1);
  };

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="glass-panel p-4 p-md-5 rounded-4 h-100 position-relative shadow-lg border-0" style={{ minHeight: "500px", display: "flex", flexDirection: "column" }}>
      
      {/* Header & Progress Indicator */}
      {step < 5 && (
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-end mb-2">
            <h4 className="fw-bold text-dark mb-0">Book Visit</h4>
            <span className="text-muted small fw-semibold">Step {step} of 4</span>
          </div>
          <div className="d-flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`rounded-pill flex-grow-1 ${s <= step ? "bg-primary" : "bg-secondary bg-opacity-25"}`} 
                style={{ height: "4px", transition: "all 0.3s ease" }} 
              />
            ))}
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="form-step-container position-relative flex-grow-1 d-flex flex-column">
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
            
            {/* STEP 1: Reason */}
            {step === 1 && (
              <div className="flex-grow-1 d-flex flex-column">
                <p className="text-muted mb-4">What is the primary reason for your visit?</p>
                
                <SelectCard icon={<FaStethoscope />} label="General Checkup" selected={formData.reason === "General Checkup"} onClick={() => { updateForm("reason", "General Checkup"); setTimeout(handleNext, 300); }} />
                <SelectCard icon={<FaSyringe />} label="Vaccination" selected={formData.reason === "Vaccination"} onClick={() => { updateForm("reason", "Vaccination"); setTimeout(handleNext, 300); }} />
                <SelectCard icon={<FaUserMd />} label="Illness / Sick Visit" selected={formData.reason === "Illness / Sick Visit"} onClick={() => { updateForm("reason", "Illness / Sick Visit"); setTimeout(handleNext, 300); }} />
                <SelectCard icon={<FaClipboardList />} label="Other Consultation" selected={formData.reason === "Other"} onClick={() => { updateForm("reason", "Other"); setTimeout(handleNext, 300); }} />
                
              </div>
            )}

            {/* STEP 2: Patient Type */}
            {step === 2 && (
              <div className="flex-grow-1 d-flex flex-column">
                <p className="text-muted mb-4">Who is this appointment for?</p>
                
                <SelectCard icon={<FaUserAlt />} label="Adult (18-64)" selected={formData.patientType === "Adult"} onClick={() => { updateForm("patientType", "Adult"); setTimeout(handleNext, 300); }} />
                <SelectCard icon={<FaChild />} label="Child (Pediatric)" selected={formData.patientType === "Child"} onClick={() => { updateForm("patientType", "Child"); setTimeout(handleNext, 300); }} />
                <SelectCard icon={<FaUserNurse />} label="Senior (65+)" selected={formData.patientType === "Senior"} onClick={() => { updateForm("patientType", "Senior"); setTimeout(handleNext, 300); }} />
              </div>
            )}

            {/* STEP 3: Date & Time */}
            {step === 3 && (
              <Form onSubmit={handleNext} className="flex-grow-1 d-flex flex-column">
                <p className="text-muted mb-4">When would you like to come in?</p>
                
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold small text-muted text-uppercase tracking-wider">Select Date</Form.Label>
                  <Form.Control 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => updateForm("date", e.target.value)}
                    className="p-3 bg-light border-0 rounded-4"
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold small text-muted text-uppercase tracking-wider">Time Preference</Form.Label>
                  <Form.Select 
                    className="p-3 bg-light border-0 rounded-4"
                    value={formData.time}
                    onChange={(e) => updateForm("time", e.target.value)}
                    required
                  >
                    <option value="" disabled>Choose a time window...</option>
                    <option value="Morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  </Form.Select>
                </Form.Group>
                
                <div className="mt-auto d-grid">
                  <Button variant="primary" type="submit" className="btn-primary-custom py-3">Continue</Button>
                </div>
              </Form>
            )}

            {/* STEP 4: Contact Details */}
            {step === 4 && (
              <Form onSubmit={handleNext} className="flex-grow-1 d-flex flex-column">
                <p className="text-muted mb-4">Almost done! How can we reach you?</p>
                
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Full Legal Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    className="p-3 bg-light border-0 rounded-4"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    className="p-3 bg-light border-0 rounded-4"
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Control 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    value={formData.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    className="p-3 bg-light border-0 rounded-4"
                  />
                </Form.Group>
                
                <div className="mt-auto d-grid">
                  <Button variant="primary" type="submit" className="btn-primary-custom py-3">Confirm Appointment</Button>
                </div>
              </Form>
            )}

            {/* STEP 5: Success */}
            {step === 5 && (
              <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center h-100">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <FaCheckCircle className="text-primary mb-4" size={80} />
                </motion.div>
                <h3 className="fw-bold text-dark">You're All Set!</h3>
                <p className="text-muted mb-4 px-3">
                  Thanks, <strong className="text-dark">{formData.name || 'there'}</strong>. We've received your request for a <strong>{formData.reason}</strong>. Our team will contact you shortly to finalize the time.
                </p>
                <Button 
                  variant="outline-primary" 
                  className="btn-outline-custom mt-2 rounded-pill px-4"
                  onClick={() => { 
                    setStep(1); setPage([1, -1]); 
                    setFormData({ reason: "General Checkup", patientType: "Adult", date: "", time: "", name: "", phone: "", email: "" });
                  }}
                >
                  Book Another Visit
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer for Steps 2-4 */}
      {step > 1 && step < 5 && (
        <div className="mt-3 pt-3 border-top text-center" style={{ zIndex: 10 }}>
          <button 
            onClick={handleBack} 
            className="btn btn-link text-muted text-decoration-none p-0 fw-semibold"
            style={{ fontSize: "0.9rem" }}
          >
            ← Back to previous step
          </button>
        </div>
      )}
      
    </div>
  );
}
