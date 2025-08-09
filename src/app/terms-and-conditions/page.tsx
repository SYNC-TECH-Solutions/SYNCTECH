import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
     <div className="py-20 md:py-28">
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>Terms and Conditions</CardTitle>
                    <CardDescription>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground">
                           By using our website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. We may revise these terms at any time, and it is your responsibility to review them for changes.
                        </p>
                         <p className="text-sm text-amber-500">
                           Disclaimer: This is a template for Terms and Conditions. You should consult with a legal professional to ensure it meets your specific needs and complies with all applicable laws.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Our Services</h2>
                        <p className="text-muted-foreground">
                            SYNC TECH provides a range of technology services, including but not limited to Web Development, AI Automation, Cloud Hosting, Cybersecurity, Mobile Apps, and SEO. The specific details of services to be provided will be outlined in a separate agreement or statement of work.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
                        <p className="text-muted-foreground">
                            You agree to use our website and services for lawful purposes only. You are responsible for any content you provide and for ensuring that it does not violate any laws or third-party rights.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
                        <p className="text-muted-foreground">
                            All content on this website, including text, graphics, logos, and software, is the property of SYNC TECH or its content suppliers and is protected by international copyright laws.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                           SYNC TECH will not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, our website or services. Our liability is limited to the maximum extent permitted by law.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Governing Law</h2>
                        <p className="text-muted-foreground">
                           These Terms and Conditions are governed by and construed in accordance with the laws of Ireland, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">7. Contact Us</h2>
                        <p className="text-muted-foreground">
                           If you have any questions about these Terms and Conditions, please contact us at: <a href="mailto:hello@synctech.ie" className="text-primary hover:underline">hello@synctech.ie</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
