import React from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import Container from '@/components/layout/container'

export default function Terms() {
  return (
    <Container className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">Terms of Service</h1>

        <p className="mb-8 text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Agreement to Terms</h2>
            <p className="leading-relaxed text-gray-700">
              By accessing and using the {SITE_CONFIG.name} website and services, you accept and agree to be bound by
              the terms and provision of this agreement. If you do not agree to abide by the above, please do not use
              this service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Use License</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              {`Permission is granted to temporarily download one copy of the materials on ${SITE_CONFIG.name}'s website for personal,
                            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:`}
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by
              {SITE_CONFIG.name} at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Services Description</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              {SITE_CONFIG.name} provides global export services, signature event management, and strategic business
              consulting. Our services include but are not limited to:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>Premium product sourcing and global logistics</li>
              <li>Luxury event planning and execution</li>
              <li>Business consultation and strategic partnerships</li>
              <li>Market analysis and export facilitation</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">User Responsibilities</h2>
            <p className="mb-4 leading-relaxed text-gray-700">When using our services, you agree to:</p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>Not engage in any activity that could harm our business or reputation</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Payment Terms</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Payment terms for our services will be specified in individual service agreements. General payment
              conditions include:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700">
              <li>Payment is due according to the terms specified in your service agreement</li>
              <li>Late payments may incur additional fees</li>
              <li>All prices are subject to applicable taxes</li>
              <li>Refunds are handled according to our refund policy</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
            <p className="leading-relaxed text-gray-700">
              {`In no event shall ${SITE_CONFIG.name} or its suppliers be liable for any damages (including, without limitation,
                            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                            the materials on ${SITE_CONFIG.name}'s website, even if ${SITE_CONFIG.name} or an authorized representative has been
                            notified orally or in writing of the possibility of such damage.`}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Privacy Policy</h2>
            <p className="leading-relaxed text-gray-700">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our
              services, to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Intellectual Property</h2>
            <p className="leading-relaxed text-gray-700">
              All content, trademarks, and data on this website, including but not limited to software, databases, text,
              graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed
              to
              {SITE_CONFIG.name} and are protected by applicable copyright, trademark, and other intellectual property
              laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Termination</h2>
            <p className="leading-relaxed text-gray-700">
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach the Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Governing Law</h2>
            <p className="leading-relaxed text-gray-700">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
              in which {SITE_CONFIG.name} operates, and you irrevocably submit to the exclusive jurisdiction of the
              courts in that state or location.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Changes to Terms</h2>
            <p className="leading-relaxed text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact Information</h2>
            <p className="leading-relaxed text-gray-700">
              If you have any questions about these Terms of Service, please contact us at:
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
