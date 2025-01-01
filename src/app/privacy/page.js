"use client";
import React from "react";
import PolicyLayout from "../../components/Policy/PolicyLayout";
import PolicySection from "../../components/Policy/PolicySection";

const PrivacyPage = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="space-y-8">
        <p className="text-gray-600">Last updated: January 1, 2025</p>

        <PolicySection title="1. Information We Collect">
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Personal information (name, email, contact details)</li>
            <li>Medical documents and reports you upload</li>
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
          </ul>
        </PolicySection>

        <PolicySection title="2. Use of Information">
          <p>Your information is used for:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Providing and improving our AI analysis services</li>
            <li>Communicating about your account and updates</li>
            <li>Ensuring service security and preventing fraud</li>
            <li>Research and development (using anonymized data)</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. Data Protection">
          <p>We implement robust security measures to protect your data:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>End-to-end encryption for data transmission</li>
            <li>Secure data storage in certified facilities</li>
            <li>Regular security audits and updates</li>
            <li>Strict access controls and authentication</li>
          </ul>
        </PolicySection>

        <PolicySection title="4. HIPAA Compliance">
          <p>
            Our service is designed to be HIPAA-compliant. We maintain
            appropriate physical, technical, and administrative safeguards to
            protect your health information.
          </p>
        </PolicySection>

        <PolicySection title="5. Data Sharing">
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Service providers who assist our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>
        </PolicySection>

        <PolicySection title="6. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Access your personal information</li>
            <li>Request data correction or deletion</li>
            <li>Opt-out of certain data uses</li>
            <li>Export your data</li>
          </ul>
        </PolicySection>

        <PolicySection title="7. Contact Us">
          <p>
            For privacy-related inquiries, contact our Data Protection Officer
            at:
          </p>
          <p className="mt-2">
            Email: privacy@medai.com
            <br />
            Address: 123 Health Street, Medical District
            <br />
            Phone: (555) 123-4567
          </p>
        </PolicySection>
      </div>
    </PolicyLayout>
  );
};

export default PrivacyPage;
