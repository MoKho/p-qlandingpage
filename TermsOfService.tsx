
import React from 'react';

const TermsOfService: React.FC = () => (
    <div className="container mx-auto px-6 py-20 text-slate-300">
        <div className="max-w-4xl mx-auto bg-[#0f172a] p-8 md:p-12 rounded-lg border border-slate-700">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-6 prose prose-invert prose-p:text-slate-300 prose-h2:text-white prose-h2:text-2xl prose-a:text-teal-400 hover:prose-a:underline">
                <p>Please read these Terms of Service ("Terms") carefully before using the P-Q application (the "Service") operated by us.</p>
                
                <h2>Acceptance of Terms</h2>
                <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

                <h2>Description of Service</h2>
                <p>P-Q is an AI-powered tool that helps users tailor their resumes for specific job descriptions. The Service accesses a user-provided resume from their Google Drive and uses AI to suggest and make edits to better align it with a provided job description.</p>

                <h2>Google Authentication</h2>
                <p>Access to the Service requires authentication via a Google account. You are responsible for safeguarding your Google account and for any activities or actions under your account. We are not liable for any loss or damage arising from your failure to comply with this security obligation.</p>
                
                <h2>User Responsibilities</h2>
                <p>You are solely responsible for the content of your resume and the accuracy of the information you provide. You agree not to use the Service for any unlawful purpose or to violate any laws in your jurisdiction.</p>

                <h2>Limitation of Liability</h2>
                <p>In no event shall P-Q, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service. The service is provided on an "AS IS" and "AS AVAILABLE" basis.</p>

                <h2>Changes</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at <a href="mailto:mo@p-q.app">mo@p-q.app</a>.</p>
            </div>
        </div>
    </div>
);

export default TermsOfService;
