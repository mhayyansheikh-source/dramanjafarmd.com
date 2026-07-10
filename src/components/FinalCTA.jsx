"use client";

import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-primary text-white position-relative overflow-hidden" style={{ padding: "80px 0" }}>
      <div className="position-absolute rounded-circle" style={{ width: "400px", height: "400px", background: "rgba(255,255,255,0.05)", top: "-100px", right: "-100px", zIndex: 0 }}></div>
      <div className="position-absolute rounded-circle" style={{ width: "300px", height: "300px", background: "rgba(255,255,255,0.05)", bottom: "-50px", left: "-50px", zIndex: 0 }}></div>
      
      <Container className="position-relative text-center" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold mb-4">Take the First Step Toward Better Health Today.</h2>
          <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: "700px" }}>
            Our compassionate staff and highly-trained medical professionals are ready to provide the individualized care you deserve.
          </p>
          
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button as={Link} href="tel:+12817711261" variant="light" size="lg" className="fw-bold text-primary d-flex align-items-center gap-2 shadow-sm px-4 py-3 rounded-3">
              <FaPhoneAlt /> Call 281-771-1261
            </Button>
            <Button as={Link} href="/contact" variant="outline-light" size="lg" className="border-2 fw-bold d-flex align-items-center gap-2 px-4 py-3 rounded-3 hover-white">
              <FaCalendarCheck /> Request Appointment
            </Button>
          </div>
        </motion.div>
      </Container>
      <style jsx>{`
        .hover-white:hover {
          background-color: white !important;
          color: #026fb9 !important;
        }
      `}</style>
    </section>
  );
}
