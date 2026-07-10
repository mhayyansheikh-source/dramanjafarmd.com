"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import FinalCTA from "@/components/FinalCTA";
import { FaHeartbeat, FaStethoscope, FaUserMd, FaChild, FaNotesMedical, FaWeight } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      id: "primary",
      icon: <FaUserMd size={40} className="text-primary mb-3" />,
      title: "Primary & Preventive Care",
      desc: "Comprehensive annual physicals, immunizations (including COVID-19), and health screenings to keep you and your family healthy."
    },
    {
      id: "chronic",
      icon: <FaHeartbeat size={40} className="text-primary mb-3" />,
      title: "Chronic Disease Management",
      desc: "Expert ongoing care for diabetes, hypertension, high cholesterol, asthma, and other long-term health conditions."
    },
    {
      id: "acute",
      icon: <FaStethoscope size={40} className="text-primary mb-3" />,
      title: "Acute & Urgent Care",
      desc: "Prompt medical attention for sudden illnesses, minor injuries, infections, flu, and cold symptoms."
    },
    {
      id: "pediatric",
      icon: <FaChild size={40} className="text-primary mb-3" />,
      title: "Pediatric Care",
      desc: "Gentle and compassionate healthcare for children, including well-child checks, vaccinations, and sick visits."
    },
    {
      id: "geriatric",
      icon: <FaNotesMedical size={40} className="text-primary mb-3" />,
      title: "Geriatric Health",
      desc: "Specialized care focused on the unique healthcare needs of elderly patients to maintain quality of life and independence."
    },
    {
      id: "weight",
      icon: <FaWeight size={40} className="text-primary mb-3" />,
      title: "Weight Loss Management",
      desc: "Medically supervised weight loss programs tailored to your body and lifestyle to help you achieve long-term success."
    }
  ];

  return (
    <>
      <TopBar />
      <Header />
      
      {/* Banner */}
      <div className="bg-dark text-white py-5 text-center" style={{ position: 'relative' }}>
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <h1 className="fw-bold display-4 mb-3">Medical Services</h1>
          <p className="lead fw-light text-white-50 max-w-700 mx-auto">Comprehensive, top-notch medical care for every stage of life.</p>
        </Container>
      </div>

      <Container className="py-5 my-4">
        <Row className="mb-5 text-center">
          <Col md={8} className="mx-auto">
            <h2 className="fw-bold text-dark mb-4">Complete Care for the Whole Family</h2>
            <p className="text-muted fs-5 lh-base">
              At Sugar Land Physicians, Dr. Aman Jafar and our dedicated team provide a wide spectrum of medical services. Whether you need a routine check-up, management for a chronic condition, or immediate care for an acute illness, we are here for you.
            </p>
          </Col>
        </Row>

        <Row className="gy-4 mt-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <Card id={service.id} className="h-100 border-0 shadow-sm hover-shadow transition-all rounded-4 overflow-hidden group">
                <Card.Body className="p-5 text-center">
                  <div className="icon-wrapper d-inline-block bg-light p-4 rounded-circle mb-4 group-hover-bg-primary transition-all">
                    {service.icon}
                  </div>
                  <Card.Title className="fw-bold fs-4 mb-3 text-dark">{service.title}</Card.Title>
                  <Card.Text className="text-muted lh-lg">
                    {service.desc}
                  </Card.Text>
                </Card.Body>
                <div className="card-footer bg-white border-0 text-center pb-4">
                  <Link href="/appointment" className="btn btn-outline-primary rounded-pill px-4 fw-semibold">Book Now</Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <FinalCTA />
      <Footer />
    </>
  );
}
