// components/Policy/PolicySection.jsx
import React from "react";

const PolicySection = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="prose prose-blue max-w-none">{children}</div>
    </section>
  );
};

export default PolicySection;
