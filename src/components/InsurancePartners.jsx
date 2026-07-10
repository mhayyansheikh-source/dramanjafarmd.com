"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaStarOfLife, FaHeartbeat, FaRegHospital } from "react-icons/fa";

export default function InsurancePartners() {
  const partners = [
    { name: "Medicare", icon: <FaRegHospital size={30} className="mb-2 text-secondary" /> },
    { name: "BlueCross BlueShield", icon: <FaShieldAlt size={30} className="mb-2 text-secondary" /> },
    { name: "Aetna", icon: <FaStarOfLife size={30} className="mb-2 text-secondary" /> },
    { name: "Cigna", icon: <FaHeartbeat size={30} className="mb-2 text-secondary" /> },
    { name: "UnitedHealthcare", icon: <FaShieldAlt size={30} className="mb-2 text-secondary" /> },
  ];

  return (
    <div className="bg-light py-5 border-bottom">
      <Container>
        <div className="text-center mb-4">
          <p className="text-muted fw-bold text-uppercase" style={{ letterSpacing: "2px", fontSize: "0.85rem" }}>
            Trusted by Major Health Insurance Providers
          </p>
        </div>
        <Row className="justify-content-center align-items-center gy-4">
          {partners.map((partner, index) => (
            <Col xs={6} md={4} lg={2} key={index} className="text-center">
              <div 
                className="partner-logo-placeholder p-3 rounded bg-white shadow-sm border border-light hover-scale transition-all d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100px", filter: "grayscale(100%) opacity(0.7)", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%) opacity(0.7)";
                }}
              >
                {partner.icon}
                <span className="fw-semibold text-dark" style={{ fontSize: "0.85rem" }}>{partner.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
