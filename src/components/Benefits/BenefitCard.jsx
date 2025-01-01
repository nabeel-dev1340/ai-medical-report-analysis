"use client";
// components/Benefits/BenefitCard.jsx
import React from "react";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="p-8 bg-white rounded-lg transition">
      <div className="text-blue-500 text-6xl mb-4">{icon}</div>
      <h3 className="font-semibold text-2xl text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
