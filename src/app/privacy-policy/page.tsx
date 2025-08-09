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
                        <h2 className="text-xl font-semibold">1. Introduction</h2>
                        <p className="text-muted-foreground">
                            Welcome to SYNC TECH ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                        </p>
                         <p className="text-sm text-amber-500">
                           Disclaimer: This is a template privacy policy. You should consult with a legal professional to ensure it meets your specific needs and complies with all applicable laws.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                        <p className="text-muted-foreground">
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>
                                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you use the contact form on the Site.
                            </li>
                            <li>
                                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                            </li>
                        </ul>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. Use of Your Information</h2>
                        <p className="text-muted-foreground">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>Respond to your comments and questions and provide customer service.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                             <li>Compile anonymous statistical data and analysis for use internally.</li>
                             <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Disclosure of Your Information</h2>
                        <p className="text-muted-foreground">
                           We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                             <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                        </ul>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Security of Your Information</h2>
                        <p className="text-muted-foreground">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Contact Us</h2>
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
