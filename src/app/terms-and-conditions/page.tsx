
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
                           By accessing and using our website, <a href="https://synctech.ie" className="text-primary hover:underline">synctech.ie</a> (the "Site"), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our Site or services. We reserve the right to modify these terms at any time. All changes will be effective immediately upon posting to the Site, and your continued use of the Site thereafter constitutes your acceptance of the changes.
                        </p>
                         <p className="text-sm text-amber-500">
                           <strong>Disclaimer:</strong> This is a template for Terms and Conditions and does not constitute legal advice. You should consult with a legal professional to ensure it meets your specific needs and complies with all applicable laws.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Our Services</h2>
                        <p className="text-muted-foreground">
                            SYNC TECH provides a range of technology services including, but not limited to, Web Development, AI Automation, Cloud Hosting, Cybersecurity, Mobile App Development, and Search Engine Optimization (SEO). The specific details, scope, timelines, and fees for any services to be provided will be outlined in a separate, written agreement or Statement of Work ("SOW") between you and SYNC TECH.
                        </p>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. Use of the Site</h2>
                        <p className="text-muted-foreground">
                            You agree to use the Site for lawful purposes only. You are prohibited from using the Site to post or transmit any material that is threatening, defamatory, obscene, or that infringes on the intellectual property rights of others. You agree not to engage in any activity that could harm the Site, its security, or its performance.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Intellectual Property Rights</h2>
                        <p className="text-muted-foreground">
                            Unless otherwise indicated, the Site and all its content, including but not limited to text, graphics, logos, images, software, and the arrangement thereof (collectively, "Content"), are the proprietary property of SYNC TECH or our licensors and are protected by Irish and international copyright, trademark, and other intellectual property laws. You are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Disclaimers</h2>
                        <p className="text-muted-foreground">
                           The Site and its Content are provided on an "as is" and "as available" basis. SYNC TECH makes no warranties, express or implied, regarding the operation of the Site or the information, content, or materials included on it. To the fullest extent permissible by law, we disclaim all warranties, including but not limited to implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the Site, its servers, or email sent from us are free of viruses or other harmful components.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                           SYNC TECH will not be liable for any damages of any kind arising from the use of this Site, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages. Our total liability to you for any damages shall not exceed the amount of fifty euros (€50). This limitation of liability is a fundamental element of the basis of the bargain between you and us.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">7. Governing Law and Jurisdiction</h2>
                        <p className="text-muted-foreground">
                           These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of Ireland. You agree to submit to the exclusive jurisdiction of the courts located in Dublin, Ireland to resolve any legal matter arising from these terms.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">8. Contact Us</h2>
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
