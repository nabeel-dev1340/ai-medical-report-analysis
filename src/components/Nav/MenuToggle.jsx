"use client";
// components/Navigation/MenuToggle.jsx
import React from "react";
import { Menu, X } from "lucide-react";

const MenuToggle = ({ isOpen, onClick }) => {
  return (
    <button
      className="lg:hidden p-2 rounded-lg text-white hover:bg-blue-600 transition-colors duration-200"
      onClick={onClick}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};

export default MenuToggle;
