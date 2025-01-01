"use client";
// pages/index.jsx
import React, { useState } from "react";
import Header from "../components/Header/Header";
import FileUpload from "../components/FileUpload/FileUpload";
import BenefitCard from "../components/Benefits/BenefitCard";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "application/pdf",
      "image/jpg", // Explicitly adding jpg
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Example: Word docs
    ];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload a valid file (PNG, JPG, PDF).");
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
    } else {
      setError("Please select a file to upload.");
    }
  };

  const benefits = [
    {
      icon: "📄",
      title: "Detailed Summaries",
      description:
        "Get a concise summary of your medical report with AI-powered insights.",
    },
    {
      icon: "💡",
      title: "Smart Recommendations",
      description:
        "Receive actionable insights to guide your healthcare decisions.",
    },
    {
      icon: "🔍",
      title: "Accurate Diagnosis",
      description:
        "Leverage AI for precise and reliable analysis of your medical reports.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <div className="max-w-7xl w-full bg-white rounded-lg p-10 mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
              Analyse Medical Reports with AI
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Upload your medical reports to receive detailed insights,
              recommendations, and summaries powered by AI.
            </p>
          </div>

           {/* Upload Section */}
          <div id="upload-section" className="flex flex-col items-center space-y-4">
            <FileUpload onFileChange={handleFileChange} error={error} />
            <p className="text-sm text-gray-500">
              Supported file types: <span className="font-semibold">PDF, PNG, JPG, DOCX</span>
            </p>
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition ease-in-out duration-300"
            >
              Upload and Analyse
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          {/* Disclaimer Section */}
          <div className="mt-12 text-center text-sm text-gray-500 px-6 sm:px-12">
            <p>
              <strong>Disclaimer:</strong> The insights and recommendations
              provided by this platform are based on artificial intelligence and
              should not be considered a substitute for professional medical
              advice. Always consult a qualified healthcare provider for
              diagnosis and treatment.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
