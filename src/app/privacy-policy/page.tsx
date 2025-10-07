
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="py-20 md:py-28">
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>Privacy Policy for SYNC TECH</CardTitle>
                    <CardDescription>Last Updated: {lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">1. Introduction</h2>
                        <p className="text-muted-foreground">
                            Welcome to SYNC TECH ("we," "our," or "us"). We are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://synctech.ie" className="text-primary hover:underline">synctech.ie</a> (the "Site"), and use our services.
                        </p>
                        <p className="text-sm text-amber-500">
                           <strong>Disclaimer:</strong> This Privacy Policy is for informational purposes and does not constitute legal advice. You should consult with a legal professional to ensure this policy meets your specific needs and complies with all applicable laws, including the General Data Protection Regulation (GDPR).
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                        <p className="text-muted-foreground">
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <h3 className="font-semibold pt-2">A. Personal Data You Provide to Us</h3>
                        <p className="text-muted-foreground">
                            We collect personally identifiable information that you voluntarily provide to us when you fill out our contact form or otherwise communicate with us. This information includes:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>Your Name</li>
                            <li>Your Email Address</li>
                            <li>The content of your message</li>
                        </ul>
                         <h3 className="font-semibold pt-2">B. Data We Collect Automatically</h3>
                         <p className="text-muted-foreground">
                           When you visit our Site, we may automatically collect certain information about your device and browsing activity. This information is primarily needed to maintain the security and operation of our Site, and for our internal analytics and reporting purposes. This includes:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                             <li><strong>Log and Usage Data:</strong> Your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.</li>
                            <li><strong>Cookies and Similar Technologies:</strong> We use cookies to help customize the Site and improve your experience. A cookie is a small data file stored on your device. Most browsers are set to accept cookies by default. You can usually choose to set your browser to remove cookies and to reject cookies.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>Respond to your inquiries and provide you with the services or information you have requested.</li>
                            <li>Monitor and analyze usage and trends to improve the functionality and user experience of our Site.</li>
                            <li>Enhance the security of our Site, including preventing fraudulent activity and investigating potential threats.</li>
                            <li>Comply with legal and regulatory obligations.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Legal Basis for Processing (for EEA/UK Users)</h2>
                        <p className="text-muted-foreground">
                           If you are in the European Economic Area (EEA) or the UK, our legal basis for collecting and using the personal information described above will depend on the context. We will normally collect personal information from you only:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>Where we have your consent to do so.</li>
                            <li>Where we need the personal information to perform a contract with you.</li>
                            <li>Where the processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms.</li>
                        </ul>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Disclosure of Your Information</h2>
                        <p className="text-muted-foreground">
                           We do not sell, trade, or rent your personal data. We may share information we have collected about you in certain situations with the following categories of third parties:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li><strong>Third-Party Service Providers:</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf. This includes email delivery (Resend), AI-powered form validation (Google AI), and website analytics (Google Analytics).</li>
                            <li><strong>By Law or to Protect Rights:</strong> We may disclose your information if we are required to do so by law or if we believe in good faith that such action is necessary to comply with a legal obligation, protect our rights or property, or investigate and prevent illegal activities.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Your Data Protection Rights Under GDPR</h2>
                        <p className="text-muted-foreground">
                           If you are a resident of the EEA or UK, you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data. Your rights include:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>The right to access, update, or delete the information we have on you.</li>
                            <li>The right of rectification if your information is inaccurate or incomplete.</li>
                            <li>The right to object to our processing of your personal data.</li>
                            <li>The right of restriction on the processing of your personal information.</li>
                            <li>The right to data portability for the information you provide to us.</li>
                            <li>The right to withdraw consent at any time where we relied on your consent to process your information.</li>
                        </ul>
                        <p className="text-muted-foreground">To exercise these rights, please contact us using the contact details provided below.</p>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">7. Data Security and Retention</h2>
                        <p className="text-muted-foreground">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">8. Contact Us</h2>
                        <p className="text-muted-foreground">
                           If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:synctechire@gmail.com" className="text-primary hover:underline">synctechire@gmail.com</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}

    