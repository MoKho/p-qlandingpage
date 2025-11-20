
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

                <h2>Sharing & Disclosure</h2>
                <p>We do <strong>not sell</strong> user data, your profile or your resume content to third parties. We do not share, transfer, or disclose user data except: (a) as necessary to provide and improve the core functionality of our application; (b) to trusted service providers that support our operations (such as hosting or logging) under written confidentiality and data protection obligations; or (c) when required by law, regulation, or valid legal process. We do not use Google user data for advertising, profiling, or marketing unrelated to providing or improving the service.</p>
                <p><strong>Google user data (your basic profile information and the specific resume file you select) is shared only with service providers acting strictly as processors on our behalf</strong> (e.g., cloud infrastructure, error monitoring) and <strong>is never provided to advertising networks or data brokers</strong>. These processors are contractually prohibited from using the data for any purpose other than delivering the services we have engaged them for.</p>

                <h2>Data Location & Transfers</h2>
                <p>Data we process (including Google user data and transient resume content) may be processed in the United States or Canada. We employ safeguards and access controls appropriate to each location. If we later add processing locations in additional jurisdictions, we will update this section and provide a prominent notice for any material change.</p>

                <h2>Limited Use of Google User Data</h2>
                <p>Our access, use, transfer, and storage of Google user data obtained via Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. We only request the minimum scopes needed for functionality, and we restrict use of data strictly to generating, analyzing, and tailoring your resume content as requested by you.</p>

                <h2>Data Retention & Deletion</h2>
                <p>We retain Google user data and resume content only for as long as needed to provide the requested functionality. Unless you explicitly opt in to persistent storage features (if/when offered), processed resume content is stored only transiently (in memory or short-lived secure cache) and is discarded after your session ends. If we introduce persistent storage, we will update this policy and clearly present an in-product notice.</p>
                <p>You may request deletion of any stored data (if applicable) by contacting us at <a href="mailto:hi@p-q.app">hi@p-q.app</a>. Upon a verified deletion request, we will remove the associated data from active systems within 30 days and from backups within 90 days (or the shortest feasible cycle). We do not retain derived data after deletion other than aggregated, non-identifiable metrics used to maintain and improve service reliability.</p>

                <h2>Your Choices & Controls</h2>
                <ul>
                    <li><strong>Data Access:</strong> You control which resume file is shared with us via the Google Drive picker and OAuth consent screen.</li>
                    <li><strong>Scope Minimization:</strong> You may decline any optional scopes; core functionality will indicate required scopes clearly.</li>
                    <li><strong>Correction:</strong> You can update your resume by re-uploading or re-selecting a file, replacing transient processed content.</li>
                    <li><strong>Deletion:</strong> Request deletion via email as described above.</li>
                </ul>

                <h2>Revoking Access</h2>
                <p>You may revoke our access to your Google account at any time by visiting your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Permissions</a> page and removing the P-Q application. Revoking access stops further data retrieval immediately; any previously stored transient data is purged according to the retention and deletion practices above.</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. If we make material changes to how we access, use, store, or share Google user data, we will provide a prominent in-product notice or email (if contact details are available) in addition to updating the “Last updated” date at the top of this page. Continued use after an update constitutes acknowledgment of the revised terms. We encourage you to review this page periodically.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:mo@p-q.app">mo@p-q.app</a>.</p>
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;
