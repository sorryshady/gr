import React from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import Container from '@/components/layout/container'

export default function Privacy() {
  return (
    <Container className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">Privacy Policy</h1>

        <p className="mb-8 text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Introduction</h2>
            <p className="leading-relaxed text-gray-700">
              At {SITE_CONFIG.name}, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">Personal Information</h3>
                <p className="leading-relaxed text-gray-700">
                  We may collect personal information that you voluntarily provide to us, including but not limited to:
                </p>
                <ul className="mt-2 ml-6 list-disc text-gray-700">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Business information and company details</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">Automatically Collected Information</h3>
                <p className="leading-relaxed text-gray-700">
                  When you visit our website, we may automatically collect certain information about your device and
                  usage patterns, including:
                </p>
                <ul className="mt-2 ml-6 list-disc text-gray-700">
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>Providing and maintaining our services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending you relevant business communications</li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Information Sharing and Disclosure</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except in the following circumstances:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>With trusted service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Data Security</h2>
            <p className="leading-relaxed text-gray-700">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Your Rights</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed text-gray-700">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
              traffic, and understand where our visitors are coming from. You can control cookie settings through your
              browser preferences.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed text-gray-700">
              {`We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                            Privacy Policy on this page and updating the "Last updated" date at the top of this policy.`}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="leading-relaxed text-gray-700">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> {SITE_CONFIG.email}
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Company:</strong> {SITE_CONFIG.name}
              </p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
