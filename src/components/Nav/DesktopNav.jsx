"use client";
// components/Navigation/DesktopNav.jsx
import React from "react";
import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/signin" variant="button">
        Sign In
      </NavLink>
    </nav>
  );
};

export default DesktopNav;
