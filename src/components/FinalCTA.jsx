"use client";

import { Container, Button } from "react-bootstrap";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-ink" style={{ padding: "64px 32px" }}>
      <Container className="text-center">
        <h2 className="display-md mb-4 text-white">Take the First Step Toward Better Health Today.</h2>
        <p className="text-white mb-5 mx-auto" style={{ maxWidth: "700px", fontSize: "18px", opacity: 0.9 }}>
          Our compassionate staff and highly-trained medical professionals are ready to provide the individualized care you deserve.
        </p>
        
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link href="tel:+12817711261" className="btn button-primary d-flex align-items-center gap-2">
            <FaPhoneAlt /> Call 281-771-1261
          </Link>
          <Link href="/appointment" className="btn button-outline text-white d-flex align-items-center gap-2" style={{ borderColor: 'var(--color-on-primary)', backgroundColor: 'transparent' }}>
            <FaCalendarCheck /> Request Appointment
          </Link>
        </div>
      </Container>
    </section>
  );
}
