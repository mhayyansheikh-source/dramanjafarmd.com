"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentMedical, FaTimes, FaPaperPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import SVGLogo from "./SVGLogo";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);
  const [leadData, setLeadData] = useState({ phone: "", email: "" });
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Thanks for reaching out! A member of our team will be with you shortly. How can we help you today?",
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleStartChatting = (e) => {
    e.preventDefault();
    if (leadData.phone || leadData.email) {
      setIsChatMode(true);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    setMessages([...messages, { id: Date.now(), sender: "user", text: currentMessage }]);
    setCurrentMessage("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: "bot",
        text: "We have received your message. Our staff will reply to you as soon as possible. If this is a medical emergency, please dial 911."
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={toggleChat}
            className="btn rounded-circle shadow-soft-lift d-flex align-items-center justify-content-center"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "64px",
              height: "64px",
              zIndex: 9999,
              backgroundColor: "var(--color-primary)",
              border: "none"
            }}
          >
            <FaCommentMedical size={28} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="shadow-soft-lift bg-canvas"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "360px",
              height: "auto",
              maxHeight: "80vh",
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              borderRadius: "var(--rounded-xl)",
              border: "1px solid var(--color-hairline)"
            }}
          >
            {/* Header / Zone A */}
            <div className="bg-canvas p-4 pb-3 position-relative" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
              <button 
                onClick={toggleChat} 
                className="btn btn-link text-charcoal p-0 position-absolute"
                style={{ top: "15px", right: "15px" }}
              >
                <FaTimes size={20} />
              </button>
              
              <h4 className="display-xs text-ink pe-4" style={{ lineHeight: "1.2" }}>
                Support you every step of the way!
              </h4>

              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center position-relative">
                  <div className="rounded-circle overflow-hidden border border-2 border-white shadow-sm" style={{ width: "45px", height: "45px", zIndex: 3 }}>
                    <Image src="https://dramanjafarmd.com/wp-content/uploads/2020/11/DSC00645-1024x577.jpg" alt="Dr. Aman Jafar" width={45} height={45} style={{ objectFit: "cover" }} />
                  </div>
                  <div className="rounded-circle overflow-hidden border border-2 border-white shadow-sm position-relative bg-ink d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: "45px", height: "45px", marginLeft: "-15px", zIndex: 2 }}>
                    AJ
                  </div>
                  <div className="rounded-circle overflow-hidden border border-2 border-white shadow-sm position-relative bg-primary d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: "45px", height: "45px", marginLeft: "-15px", zIndex: 1 }}>
                    <SVGLogo width="30" height="30" />
                  </div>
                </div>
                
                <div className="badge-pill-outline d-flex align-items-center gap-2" style={{ backgroundColor: "rgba(0,128,0,0.1)", color: "green", borderColor: "rgba(0,128,0,0.2)" }}>
                  <div className="rounded-circle" style={{ width: "8px", height: "8px", backgroundColor: "green" }}></div>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow-1 overflow-auto bg-cloud">
              {!isChatMode ? (
                /* Zone B: Lead Capture Form */
                <div className="p-4 pt-3">
                  <p className="text-ink fw-semibold mb-3">You've taken an important step, we are here to help!</p>
                  
                  <Form onSubmit={handleStartChatting}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-semibold text-ink mb-1">Phone Number <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="tel" 
                        required
                        className="py-2" 
                        style={{ border: "1px solid var(--color-hairline)", borderRadius: "var(--rounded-md)" }}
                        value={leadData.phone}
                        onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                      />
                      <Form.Text className="text-danger small">Required field</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-semibold text-ink mb-1">Email <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="email" 
                        required
                        className="py-2" 
                        style={{ border: "1px solid var(--color-hairline)", borderRadius: "var(--rounded-md)" }}
                        value={leadData.email}
                        onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      className="w-100 button-primary d-flex justify-content-between align-items-center"
                    >
                      <span>Start chatting</span>
                      <FaPaperPlane />
                    </Button>
                  </Form>

                  {/* Zone C: Channels */}
                  <div className="mt-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="bg-canvas p-2 rounded" style={{ border: "1px solid var(--color-hairline)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                      </div>
                      <span className="fw-bold text-ink">Channels</span>
                    </div>

                    <div className="bg-canvas overflow-hidden shadow-sm" style={{ borderRadius: "var(--rounded-lg)", border: "1px solid var(--color-hairline)" }}>
                      <a href="https://wa.me/18324344558" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-between align-items-center p-3 text-decoration-none" style={{ borderBottom: "1px solid var(--color-hairline)" }}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", backgroundColor: "#25D366" }}>
                            <FaWhatsapp size={20} />
                          </div>
                          <span className="text-ink fw-semibold">WhatsApp</span>
                        </div>
                        <span className="text-charcoal">↗</span>
                      </a>
                      
                      <a href="tel:+18324344558" className="d-flex justify-content-between align-items-center p-3 text-decoration-none">
                        <div className="d-flex align-items-center gap-3">
                          <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", backgroundColor: "var(--color-ink)" }}>
                            <FaPhoneAlt size={16} />
                          </div>
                          <span className="text-ink fw-semibold">Phone</span>
                        </div>
                        <span className="text-charcoal">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Chat Mode UI */
                <div className="d-flex flex-column h-100" style={{ minHeight: "350px" }}>
                  <div className="flex-grow-1 p-3 overflow-auto">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`mb-3 d-flex flex-column ${msg.sender === "user" ? "align-items-end" : "align-items-start"}`}>
                        <div 
                          className={`p-3 shadow-sm ${msg.sender === "user" ? "bg-primary text-white" : "bg-canvas text-ink"}`}
                          style={{ maxWidth: "85%", fontSize: "0.9rem", borderRadius: "var(--rounded-lg)", border: msg.sender === "user" ? "none" : "1px solid var(--color-hairline)" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-canvas" style={{ borderTop: "1px solid var(--color-hairline)" }}>
                    <Form onSubmit={sendMessage} className="d-flex gap-2">
                      <Form.Control 
                        type="text" 
                        placeholder="Type a message..." 
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="border-0 shadow-sm bg-cloud px-3"
                        style={{ borderRadius: "var(--rounded-md)" }}
                      />
                      <Button type="submit" className="button-primary d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", padding: 0, borderRadius: "var(--rounded-sm)" }}>
                        <FaPaperPlane size={14} />
                      </Button>
                    </Form>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-cloud p-2 text-center" style={{ borderTop: "1px solid var(--color-hairline)" }}>
              <small className="text-charcoal" style={{ fontSize: "0.7rem" }}>
                Powered by <SVGLogo width="15" height="15" className="d-inline ms-1 opacity-50" /> Dr. Aman Jafar MD
              </small>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
