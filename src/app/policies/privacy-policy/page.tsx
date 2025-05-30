import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-4">
      <Card className="container mx-auto px-4 py-8 max-w-6xl text-sm text-gray-800">
        <CardHeader className="text-2xl font-semibold mb-6">
          Privacy Policy
        </CardHeader>

        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, process, and
              protect your personal information. By using our services, you
              agree to the collection and use of information in accordance with
              this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-base font-medium mb-2">
              2.1 Personal Information
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Billing and payment information</li>
              <li>Company information (if applicable)</li>
              <li>Usage data and preferences</li>
            </ul>

            <h3 className="text-base font-medium mb-2">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Time zone and location</li>
              <li>Usage patterns and interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To process payments and transactions</li>
              <li>To improve our services and user experience</li>
              <li>To send administrative information and updates</li>
              <li>To provide customer support</li>
              <li>To detect and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity
              on our service and hold certain information. Cookies are files
              with small amount of data that may include an anonymous unique
              identifier.
            </p>
            <h3 className="text-base font-medium mb-2">
              Types of Cookies We Use:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Essential cookies: Required for the operation of our website
              </li>
              <li>
                Analytical cookies: To analyze how users interact with our
                service
              </li>
              <li>Functional cookies: To remember your preferences</li>
              <li>Advertising cookies: To deliver relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Payment Information
            </h2>
            <p className="mb-4">
              We use trusted third-party payment processors to handle all
              payments. We do not store your payment information on our servers.
              All payment data is encrypted and securely processed through our
              payment partners.
            </p>
            <h3 className="text-base font-medium mb-2">
              Payment Data We Process:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Transaction history</li>
              <li>Billing address</li>
              <li>Payment method details (last 4 digits only)</li>
              <li>Subscription information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your
              personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data backups</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. Third-Party Services
            </h2>
            <p className="mb-4">
              We may employ third-party companies and individuals to facilitate
              our service, provide service-related services, or assist us in
              analyzing how our service is used. These third parties have access
              to your personal information only to perform these tasks on our
              behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Your Rights</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request data deletion</li>
              <li>Right to object to data processing</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the <span>&ldquo;Last updated&rdquo;</span> date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: privacy@narbagroup.com</li>
            </ul>
          </section>

          <footer className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Last updated:{" "}
              <span className="text-slate-400 font-semibold">
                30th May, 2025
              </span>
            </p>
          </footer>
        </CardContent>
      </Card>
    </div>
  );
}
