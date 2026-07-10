"use client";

import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const faqs = [
  {
    question: "What age patients does Dr. Jafar accept?",
    answer: "Dr. Jafar accepts patients starting from ages 16yrs and up."
  },
  {
    question: "How soon can I make an appointment with Dr. Jafar?",
    answer: "Dr. Jafar accepts appointments on the same day as well as walk-ins are welcome on a daily basis."
  },
  {
    question: "Is Dr. Jafar accepting new patients?",
    answer: "Yes, Dr. Jafar accepts new patients on the same day, call directly to the office for same day appointments."
  },
  {
    question: "Can I make an appointment with Dr. Jafar online?",
    answer: "Yes, you can make a same day appointment online if available with Dr. Jafar or Nurse Practitioners. It’s simple, secure, and free. Click on any book appointment button on the website or go to the contact us page."
  },
  {
    question: "Which hospital is Dr. Jafar affiliated with?",
    answer: "Dr. Jafar is affiliated with Sugar Land Geriatrics and Medical Associates along with Chi. St Lukes Sugar Land Hospital, Methodist Sugar Land Hospital, West Houston Medical Center, Kindred Sugar Land Hospital, and Encompass Sugar Land Healthcare Hospital."
  },
  {
    question: "Where is Dr. Jafar's office located?",
    answer: "Dr. Jafar's office is located at: 3531 Town Center Blvd, S. Ste 101, Sugar Land, TX 77479."
  },
  {
    question: "What are common reasons for patients to see Dr.Jafar?",
    answer: "Dr. Jafar is an internal medicine and primary care physician who sees patients for all health related issues. From common cold to chronic illnesses, as well as providing annual physical exams."
  }
];

export default function FAQ() {
  return (
    <section className="section-padding bg-cloud">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center mb-5">
              <h2 className="display-md text-ink mb-3">Frequently Asked Questions</h2>
              <p className="text-charcoal" style={{ fontSize: "18px" }}>
                Find answers to common questions about appointments, insurance, and the care we provide.
              </p>
            </div>
            
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="faq-row">
                  <Accordion.Header className="text-ink">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="text-charcoal">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className="mt-5 text-center bg-canvas p-4 shadow-soft-lift" style={{ borderRadius: "var(--rounded-xl)" }}>
              <h4 className="display-xs mb-3 text-ink">Still have questions?</h4>
              <p className="text-charcoal mb-4">Our dedicated team is ready to assist you.</p>
              <Link href="tel:281-771-1261" className="btn button-primary d-inline-flex align-items-center gap-2">
                <FaPhoneAlt /> Call Us: 281-771-1261
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
