"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaStarOfLife, FaHeartbeat, FaRegHospital } from "react-icons/fa";

export default function InsurancePartners() {
  const partners = [
    { name: "Medicare", icon: <FaRegHospital size={30} className="mb-2 text-charcoal" /> },
    { name: "BlueCross BlueShield", icon: <FaShieldAlt size={30} className="mb-2 text-charcoal" /> },
    { name: "Aetna", icon: <FaStarOfLife size={30} className="mb-2 text-charcoal" /> },
    { name: "Cigna", icon: <FaHeartbeat size={30} className="mb-2 text-charcoal" /> },
    { name: "UnitedHealthcare", icon: <FaShieldAlt size={30} className="mb-2 text-charcoal" /> },
  ];

  return (
    <div className="bg-canvas py-5 border-bottom border-hairline">
      <Container>
        <div className="text-center mb-4">
          <p className="text-charcoal" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            Trusted by Major Health Insurance Providers
          </p>
        </div>
        <Row className="justify-content-center align-items-center gy-4">
          {partners.map((partner, index) => (
            <Col xs={6} md={4} lg={2} key={index} className="text-center">
              <div 
                className="p-3 bg-canvas d-flex flex-column align-items-center justify-content-center transition-all"
                style={{ 
                  height: "100px", 
                  borderRadius: "var(--rounded-lg)", 
                  border: "1px solid var(--color-hairline)",
                  cursor: "default" 
                }}
              >
                {partner.icon}
                <span className="text-ink" style={{ fontSize: "12px", fontWeight: 600 }}>{partner.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
