import React from "react";
import '../../css/Security.css'
const Security = () => {
  return (
    <div>
      <div class="security-container">
        <h1 class="security-heading">Security</h1>

        <div class="security-text">
          <p>
            At Ace Cart, we prioritize the security and privacy of our
            customers. We have implemented rigorous measures to ensure a safe
            and secure shopping experience.
          </p>
        </div>

        <div class="security-section">
          <h2>Data Encryption</h2>
          <p>
            All communication between your device and our servers is encrypted
            using industry-standard SSL (Secure Socket Layer) technology. This
            ensures that your personal and financial information is protected
            from unauthorized access.
          </p>
        </div>

        <div class="security-section">
          <h2>Secure Payment Gateways</h2>
          <p>
            We only work with trusted and reputable payment gateways that employ
            advanced security protocols. This guarantees that your payment
            information is processed securely and your transactions are
            protected.
          </p>
        </div>

        <div class="security-section">
          <h2>Strict Privacy Policy</h2>
          <p>
            Your privacy is of utmost importance to us. We adhere to a strict
            privacy policy that governs the collection, use, and storage of your
            personal information. We will never share your data with third
            parties without your consent.
          </p>
        </div>

        <div class="security-section">
          <h2>Continuous Monitoring</h2>
          <p>
            We have a dedicated team of security experts who constantly monitor
            our systems for any potential vulnerabilities or threats. This
            allows us to promptly address any security issues and ensure the
            ongoing protection of your information.
          </p>
        </div>

        <div class="security-cta">
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Security;
