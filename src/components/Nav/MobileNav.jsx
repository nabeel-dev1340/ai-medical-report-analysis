"use client";
// components/Navigation/MobileNav.jsx
import React from "react";
import NavLink from "./NavLink";

const MobileNav = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-600 shadow-lg z-20">
      <div className="px-6 py-4 space-y-4">
        <NavLink href="/" variant="mobile">
          Home
        </NavLink>
        <NavLink href="/about" variant="mobile">
          About
        </NavLink>
        <NavLink href="/contact" variant="mobile">
          Contact
        </NavLink>
        <NavLink href="/signin" variant="mobile">
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
