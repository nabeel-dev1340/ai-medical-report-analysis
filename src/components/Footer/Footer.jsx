"use client";
// components/Footer/Footer.jsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MedAI. All rights reserved.
        </p>
        <div className="mt-2 text-sm">
          <Link href="/terms" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          {" | "}
          <Link
            href="/privacy"
            className="hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
