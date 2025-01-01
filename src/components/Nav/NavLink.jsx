"use client";
// components/Navigation/NavLink.jsx
import React from "react";
import Link from "next/link";

const NavLink = ({ href, children, variant = "default" }) => {
  const styles = {
    default:
      "text-white hover:text-blue-100 font-medium transition-colors duration-200",
    button:
      "px-4 py-2 text-blue-600 bg-white rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 shadow-sm",
    mobile:
      "block text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200",
  };

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
};

export default NavLink;
