import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ href, to, children, className = "", ...props }) => {
  // Support both href (Next.js style) and to (React Router style)
  const destination = to || href;

  return (
    <RouterLink
      to={destination}
      className={`text-blue-600 hover:text-blue-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
