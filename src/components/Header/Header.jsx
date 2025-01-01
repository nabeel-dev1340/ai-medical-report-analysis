"use client";
// components/Header/Header.jsx
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import DesktopNav from "../Nav/DesktopNav";
import MobileNav from "../Nav/MobileNav";
import MenuToggle from "../Nav/MenuToggle";
import NavLink from "../Nav/NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 px-6 py-4 lg:py-5">
          <div className="flex items-center justify-between">
            <NavLink href="/">
              <Logo />
            </NavLink>
            <DesktopNav />
            <MenuToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
        <MobileNav isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
