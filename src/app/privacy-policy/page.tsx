
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 md:py-28">
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>Privacy Policy</CardTitle>
                    <CardDescription>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">1. Our Commitment to Your Privacy</h2>
                        <p className="text-muted-foreground">
                            Welcome to SYNC TECH ("we," "our," or "us"). We are a tech company based in Dublin, Ireland, committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://synctech.ie" className="text-primary hover:underline">synctech.ie</a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
                        </p>
                         <p className="text-sm text-amber-500">
                           <strong>Disclaimer:</strong> This is a template Privacy Policy and does not constitute legal advice. You should consult with a legal professional to ensure this policy meets your specific needs and complies with all applicable laws, including the General Data Protection Regulation (GDPR).
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                        <p className="text-muted-foreground">
                            We collect information that you voluntarily provide to us and information that is automatically collected when you use our Site.
                        </p>
                        <h3 className="font-semibold pt-2">A. Personal Data You Provide</h3>
                        <p className="text-muted-foreground">
                            We collect personally identifiable information that you voluntarily provide to us when you use our contact form. The personal data we collect may include:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>Your Name</li>
                            <li>Your Email Address</li>
                            <li>The content of your message</li>
                        </ul>
                         <h3 className="font-semibold pt-2">B. Data We Collect Automatically</h3>
                         <p className="text-muted-foreground">
                           When you access the Site, our servers may automatically collect certain information, such as:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                             <li><strong>Log and Usage Data:</strong> IP address, browser type, operating system, access times, and the pages you have viewed.</li>
                            <li><strong>Cookies and Similar Technologies:</strong> We may use cookies to help customize the Site and improve your experience. You can remove or reject cookies in your browser settings, but be aware that such action could affect the availability and functionality of the Site.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground">
                            We use the information we collect to:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>Respond to your inquiries, questions, and comments submitted through our contact form.</li>
                            <li>Operate and maintain the security of our Site, including preventing fraudulent transactions and protecting against criminal activity.</li>
                            <li>Monitor and analyze usage and trends to improve our Site and your user experience.</li>
                            <li>Send you technical notices, updates, security alerts, and administrative messages.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Legal Basis for Processing (for EEA Users)</h2>
                        <p className="text-muted-foreground">
                           If you are in the European Economic Area (EEA), our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it. We will normally collect personal information from you only where we have your consent to do so, where we need the personal information to perform a contract with you, or where the processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms.
                        </p>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Disclosure of Your Information</h2>
                        <p className="text-muted-foreground">
                           We do not sell, trade, or rent your personal data to others. We may share information we have collected about you with third-party service providers that perform services for us or on our behalf, including:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li><strong>Email Delivery:</strong> We use Resend to send emails from our contact form.</li>
                            <li><strong>AI Validation:</strong> We use Google AI to validate form submissions for security.</li>
                            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or protect the personal safety of users of the Site or the public.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Your Data Protection Rights (GDPR)</h2>
                        <p className="text-muted-foreground">
                           If you are a resident of the EEA, you have the following data protection rights:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>The right to access, update, or delete the information we have on you.</li>
                            <li>The right of rectification.</li>
                            <li>The right to object.</li>
                            <li>The right of restriction.</li>
                            <li>The right to data portability.</li>
                            <li>The right to withdraw consent.</li>
                        </ul>
                        <p className="text-muted-foreground">If you wish to exercise any of these rights, please contact us using the contact details below.</p>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">7. Data Security and Retention</h2>
                        <p className="text-muted-foreground">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable. We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">8. Contact Us</h2>
                        <p className="text-muted-foreground">
                           If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:hello@synctech.ie" className="text-primary hover:underline">hello@synctech.ie</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
