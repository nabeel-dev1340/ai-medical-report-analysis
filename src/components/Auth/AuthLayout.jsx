"use client";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
