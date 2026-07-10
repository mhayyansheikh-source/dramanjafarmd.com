"use client";

import React from "react";

export default function SVGLogo({ className = "", width = "220", height = "60" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="400" height="100" fill="transparent" />
      <path 
        d="M50 20 L50 80 L80 80 A30 30 0 0 0 80 20 Z" 
        fill="url(#grad)" 
      />
      <circle cx="65" cy="50" r="10" fill="white" />
      
      <text x="110" y="45" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="bold" fill="#0170B9">
        Dr. Aman Jafar
      </text>
      <text x="110" y="70" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fill="#3a3a3a" letterSpacing="1">
        MD, FACP, CMD
      </text>

      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0170B9" />
          <stop offset="100%" stopColor="#0693e3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
