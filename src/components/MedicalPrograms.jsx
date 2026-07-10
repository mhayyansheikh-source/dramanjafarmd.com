"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function MedicalPrograms() {
  const programs = [
    {
      title: "Primary Care",
      desc: "Comprehensive health assessments and routine care.",
      img: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2070&auto=format&fit=crop",
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
    <div className="py-5 bg-light" id="programs">
      <Container className="py-md-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Comprehensive <span className="text-primary">Medical Programs</span></h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            We offer a wide range of specialized healthcare services to ensure every member of your family receives the exact care they need.
          </p>
        </div>

        <Row className="g-4">
          {programs.map((prog, idx) => (
            <Col lg={4} md={6} key={idx}>
              <Card className="h-100 border-0 rounded-4 overflow-hidden shadow-sm group-hover-overlay" style={{ cursor: "pointer" }}>
                <div className="position-relative" style={{ height: "250px", overflow: "hidden" }}>
                  <Card.Img 
                    variant="top" 
                    src={prog.img} 
                    className="h-100 w-100 object-fit-cover transition-all"
                  />
                  {/* Dark Overlay that appears on hover */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center overlay-content transition-all"
                  >
                    <Link href={prog.link} className="btn btn-outline-light rounded-pill px-4 fw-semibold border-2 d-flex align-items-center gap-2 hover-white">
                      Explore Program <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <Card.Body className="p-4 bg-white text-center z-index-1">
                  <Card.Title className="fw-bold text-dark fs-4 mb-3">{prog.title}</Card.Title>
                  <Card.Text className="text-muted">{prog.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
           <Link href="/services" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm hover-scale">
             View All Medical Services
           </Link>
        </div>
      </Container>
      
      <style dangerouslySetInnerHTML={{__html: `
        .group-hover-overlay .overlay-content {
          opacity: 0;
          visibility: hidden;
        }
        .group-hover-overlay:hover .overlay-content {
          opacity: 1;
          visibility: visible;
        }
        .group-hover-overlay:hover .card-img-top {
          transform: scale(1.1);
        }
      `}} />
    </div>
  );
}
