"use client";
// components/FileUpload/FileUpload.jsx
import React from "react";

const FileUpload = ({ onFileChange, error }) => {
  return (
    <div className="mb-8 w-full max-w-md">
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.pdf"
        onChange={onFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-md file:border file:border-blue-500 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default FileUpload;
