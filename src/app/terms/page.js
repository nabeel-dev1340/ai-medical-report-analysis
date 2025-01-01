"use client";
import React from "react";
import PolicyLayout from "../../components/Policy/PolicyLayout";
import PolicySection from "../../components/Policy/PolicySection";

const TermsPage = () => {
  return (
    <PolicyLayout title="Terms of Service">
      <div className="space-y-8">
        <p className="text-gray-600">Last updated: January 1, 2025</p>

        <PolicySection title="1. Acceptance of Terms">
          <p>
            By accessing and using MedAI&apos;s services, you agree to be bound
            by these Terms of Service. If you disagree with any part of these
            terms, you may not access our service.
          </p>
        </PolicySection>

        <PolicySection title="2. Description of Service">
          <p>
            MedAI provides AI-powered analysis of medical reports and documents.
            Our service is intended to assist and supplement, not replace,
            professional medical advice, diagnosis, or treatment.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Analysis of medical reports and images</li>
            <li>AI-generated insights and recommendations</li>
            <li>Document storage and management</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. Medical Disclaimer">
          <p>
            MedAI is not a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of your physician or
            other qualified health provider with any questions you may have
            regarding a medical condition.
          </p>
        </PolicySection>

        <PolicySection title="4. User Responsibilities">
          <p>You are responsible for:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Maintaining the confidentiality of your account</li>
            <li>Ensuring the accuracy of uploaded documents</li>
            <li>Using the service in compliance with applicable laws</li>
            <li>Not sharing access to your account with unauthorized users</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. Data Usage">
          <p>By using our service, you grant MedAI the right to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Process and analyze uploaded documents</li>
            <li>Store data securely in accordance with our Privacy Policy</li>
            <li>Use anonymized data for service improvement</li>
          </ul>
        </PolicySection>

        <PolicySection title="6. Service Limitations">
          <p>
            We strive to maintain high service availability but cannot guarantee
            uninterrupted access. We reserve the right to modify or discontinue
            the service with reasonable notice.
          </p>
        </PolicySection>

        <PolicySection title="7. Termination">
          <p>
            We may terminate or suspend your account immediately for any breach
            of these Terms. You may terminate your account at any time by
            contacting our support team.
          </p>
        </PolicySection>
      </div>
    </PolicyLayout>
  );
};

export default TermsPage;
