"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function MedicalPrograms() {
  const programs = [
    {
      title: "Primary Care",
      desc: "Comprehensive health assessments and routine care.",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Chronic Disease Management",
      desc: "Expert management of diabetes, hypertension, and more.",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Pediatric Care",
      desc: "Gentle, compassionate care for children and young adults.",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Geriatric Health",
      desc: "Specialized care plans designed for senior patients.",
      img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2036&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Weight Loss Management",
      desc: "Personalized strategies for healthy, sustainable weight loss.",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Acute Care",
      desc: "Prompt medical attention for sudden illnesses or injuries.",
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      link: "/services"
    }
  ];

  return (
    <div className="section-padding bg-cloud" id="programs">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-lg text-ink mb-3">
            Comprehensive Medical Programs
          </h2>
          <p className="text-charcoal mx-auto" style={{ maxWidth: "700px" }}>
            We offer a wide range of specialized healthcare services to ensure every member of your family receives the exact care they need.
          </p>
        </div>

        <Row className="g-4">
          {programs.map((prog, idx) => (
            <Col lg={4} md={6} key={idx} className="d-flex">
              <div className="card-product w-100 d-flex flex-column p-0 overflow-hidden">
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img 
                    src={prog.img} 
                    alt={prog.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1 bg-canvas text-start">
                  <h3 className="display-xs text-ink mb-2">{prog.title}</h3>
                  <p className="text-charcoal mb-4 flex-grow-1">{prog.desc}</p>
                  <Link href={prog.link} className="btn button-outline w-100">
                    Explore Program
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
           <Link href="/services" className="btn button-primary">
             View All Medical Services
           </Link>
        </div>
      </Container>
    </div>
  );
}
