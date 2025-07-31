import React from "react";
import { motion as Motion } from "framer-motion";

const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-900",
    destructive: "bg-red-600 text-white",
    outline: "border border-gray-300 bg-white text-gray-900",
  };

  return (
    <Motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Motion.span>
  );
};

export { Badge };
