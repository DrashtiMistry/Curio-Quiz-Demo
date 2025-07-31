import React from "react";
import { motion as Motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <Motion.div
            key={index}
            className="w-3 h-3 bg-blue-600 rounded-full"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}
      </Motion.div>
    </div>
  );
};

export default Loader;
