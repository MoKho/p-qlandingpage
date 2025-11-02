
import React from 'react';

const PrivacyPolicy: React.FC = () => (
    <div className="container mx-auto px-6 py-20 text-slate-300">
        <div className="max-w-4xl mx-auto bg-[#0f172a] p-8 md:p-12 rounded-lg border border-slate-700">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="space-y-6 prose prose-invert prose-p:text-slate-300 prose-h2:text-white prose-h2:text-2xl prose-a:text-teal-400 hover:prose-a:underline">
                <p>Welcome to P-Q ("we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>

                <h2>Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect via the Application includes:</p>
                <ul>
                    <li><strong>Personal Data:</strong> When you authenticate using your Google account, we receive basic profile information like your name and email address as permitted by Google's authentication service.</li>
                    <li><strong>Resume Data:</strong> To provide our service, we require access to your resume file stored on your Google Drive. We only access the specific file you select and consent to. We use this data to analyze, edit, and tailor your resume based on job descriptions you provide.</li>
                    <li><strong>Usage Data:</strong> We may use third-party tools to collect anonymous data about your interaction with our service (e.g., button clicks, features used). This data is aggregated and anonymized and helps us improve our application.</li>
                </ul>
                
                <h2>Google Drive Integration</h2>
                <p>Our service integrates with the Google Drive API to provide its core functionality. By using our service, you grant us permission to access and modify the resume file you select from your Google Drive account. This is done via the standard Google OAuth consent screen, where you explicitly approve the permissions our application requests. We do not have access to any other files in your Google Drive.</p>
                
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, operate, and maintain our service.</li>
                    <li>Improve, personalize, and expand our service.</li>
                    <li>Understand and analyze how you use our service.</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service.</li>
                </ul>

                <h2>Data Security</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:mo@p-q.app">mo@p-q.app</a>.</p>
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;
