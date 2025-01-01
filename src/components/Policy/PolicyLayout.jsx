"use client";
// components/Policy/PolicyLayout.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PolicyLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
          <div className="bg-white rounded-lg shadow-sm p-8">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyLayout;
