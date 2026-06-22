"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaTimes } from "react-icons/fa";

export default function FomoElement() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the FOMO element after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="position-fixed"
          style={{ bottom: "20px", left: "20px", zIndex: 1050 }}
        >
          <div className="bg-white rounded-3 shadow-lg border p-3 d-flex align-items-center gap-3" style={{ maxWidth: "320px" }}>
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "40px", height: "40px" }}>
              <FaClock size={20} />
            </div>
            <div>
              <p className="mb-0 fw-bold text-dark small">Fast Service Today</p>
              <p className="mb-0 text-muted small" style={{ fontSize: "0.8rem" }}>Current walk-in wait time is approx. <strong className="text-danger">15 mins</strong>.</p>
            </div>
            <button 
              onClick={() => setIsVisible(false)} 
              className="btn btn-link text-muted p-0 ms-auto text-decoration-none border-0"
              style={{ alignSelf: "flex-start" }}
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
