"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentMedical, FaTimes, FaUserMd } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! Welcome to Dr. Aman Jafar's clinic. What type of care or service are you looking for today?",
      options: [
        { label: "Preventative Care", action: "preventative" },
        { label: "Chronic Disease Management", action: "chronic" },
        { label: "Minor Urgent Care", action: "urgent" },
        { label: "Prescription Refills", action: "refill" },
      ]
    }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    // Add user message
    const newMessages = [...messages, { id: Date.now(), sender: "user", text: option.label }];
    setMessages(newMessages);

    // Simulate bot thinking and reply
    setTimeout(() => {
      let replyText = "";
      let linkUrl = "";
      let linkText = "";

      switch(option.action) {
        case "preventative":
        case "chronic":
        case "urgent":
          replyText = "Great! You can read more about our comprehensive services or book an appointment online.";
          linkUrl = "/services";
          linkText = "View Our Services";
          break;
        case "refill":
          replyText = "Sure, I can help with that. Please fill out our secure prescription refill request form.";
          linkUrl = "/patients"; // Assuming form is on patients page or we can just link to contact
          linkText = "Request a Refill";
          break;
        default:
          replyText = "Please contact our office directly for more assistance.";
          linkUrl = "/contact";
          linkText = "Contact Us";
      }

      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: "bot",
        text: replyText,
        linkUrl,
        linkText
      }]);
    }, 600);
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
            className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "60px",
              height: "60px",
              zIndex: 9999,
              backgroundColor: "#026fb9",
              border: "none"
            }}
          >
            <FaCommentMedical size={24} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="shadow-lg rounded-4 overflow-hidden bg-white"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "350px",
              height: "500px",
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(0,0,0,0.1)"
            }}
          >
            {/* Header */}
            <div className="bg-primary p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-white rounded-circle p-1 d-flex align-items-center justify-content-center shadow-sm" style={{ width: "40px", height: "40px" }}>
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo" 
                    width={30} 
                    height={30} 
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h6 className="text-white mb-0 fw-bold">Virtual Assistant</h6>
                  <small className="text-white opacity-75 d-block" style={{ fontSize: "0.75rem", lineHeight: "1" }}>Sugar Land Physicians</small>
                </div>
              </div>
              <button onClick={toggleChat} className="btn btn-link text-white p-0">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Quick Action Pills */}
            <div className="bg-light border-bottom p-2 d-flex gap-2 overflow-auto" style={{ whiteSpace: "nowrap" }}>
              <Link href="/insurance" className="badge bg-white text-dark border p-2 text-decoration-none shadow-sm">Verify Insurance</Link>
              <Link href="/contact" className="badge bg-white text-dark border p-2 text-decoration-none shadow-sm">Book Appointment</Link>
              <Link href="/patients" className="badge bg-white text-dark border p-2 text-decoration-none shadow-sm">Patient Portal</Link>
            </div>

            {/* Messages Area */}
            <div className="flex-grow-1 p-3 overflow-auto" style={{ backgroundColor: "#f7fafc" }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`mb-3 d-flex flex-column ${msg.sender === "user" ? "align-items-end" : "align-items-start"}`}>
                  <div 
                    className={`p-3 rounded-4 shadow-sm ${msg.sender === "user" ? "bg-primary text-white" : "bg-white text-dark border"}`}
                    style={{ maxWidth: "85%", fontSize: "0.9rem" }}
                  >
                    {msg.text}
                  </div>
                  
                  {/* Action Buttons inside Bot Message */}
                  {msg.options && (
                    <div className="mt-2 d-flex flex-column gap-2 w-100">
                      {msg.options.map((opt, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleOptionClick(opt)}
                          className="btn btn-outline-primary btn-sm text-start rounded-pill bg-white shadow-sm"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Follow-up Link inside Bot Message */}
                  {msg.linkUrl && (
                    <Link href={msg.linkUrl} className="btn btn-primary btn-sm mt-2 rounded-pill shadow-sm" style={{ fontSize: "0.85rem" }}>
                      {msg.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area (Fake) */}
            <div className="p-3 bg-white border-top text-center">
              <small className="text-muted">Select an option above to continue.</small>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
