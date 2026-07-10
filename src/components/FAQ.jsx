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
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">Frequently Asked Questions</h2>
              <p className="lead text-muted">
                Find answers to common questions about appointments, insurance, and the care we provide.
              </p>
            </div>
            
            <Accordion defaultActiveKey="0" className="faq-accordion shadow-sm">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="border-0 border-bottom">
                  <Accordion.Header className="fw-semibold text-dark">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="text-muted lh-lg">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className="mt-5 text-center bg-white p-4 rounded-3 shadow-sm border">
              <h4 className="fw-bold mb-3">Still have questions?</h4>
              <p className="text-muted mb-4">Our dedicated team is ready to assist you.</p>
              <Link href="tel:281-771-1261" className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                <FaPhoneAlt className="me-2 mb-1" /> Call Us: 281-771-1261
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
