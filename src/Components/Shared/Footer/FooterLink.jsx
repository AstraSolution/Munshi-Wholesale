
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FooterLink({ path, children }) {
  return (
    <li>
      <Link to={path} className="text-gray-400 hover:text-red-600 text-sm">
        <MotionTextHover>{children}</MotionTextHover>
      </Link>
    </li>
  );
}

const MotionTextHover = ({ children }) => {
  return (
    <motion.span
      whileHover={{
        letterSpacing: "0.1em", 
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children.split("").map((char, index) => (
        <motion.span key={index}>{char}</motion.span>
      ))}
    </motion.span>
  );
};
