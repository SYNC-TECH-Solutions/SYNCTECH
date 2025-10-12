
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
     <div className="py-20 md:py-28">
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>Terms and Conditions</CardTitle>
                    <CardDescription>Last Updated: {lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground">
                           By accessing and using our website, <a href="https://synctech.ie" className="text-primary hover:underline">synctech.ie</a> (the "Site"), and our services, you agree to be bound by these Terms and Conditions ("Terms") and our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. If you do not agree with all of these terms, then you are expressly prohibited from using the Site and you must discontinue use immediately. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Our Services</h2>
                        <p className="text-muted-foreground">
                            SYNC TECH provides a range of technology services including, but not limited to, Web Development, AI Automation, Cloud Hosting, Cybersecurity, and Digital Growth consulting. The specific details, scope, deliverables, timelines, and fees for any services provided will be governed by a separate, written agreement or Statement of Work ("SOW") between you and SYNC TECH.
                        </p>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. User Representations and Lawful Use</h2>
                        <p className="text-muted-foreground">
                            By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms; (2) you will not use the Site for any illegal or unauthorized purpose; and (3) your use of the Site will not violate any applicable law or regulation.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Intellectual Property Rights</h2>
                        <p className="text-muted-foreground">
                            Unless otherwise indicated, the Site itself and all its content, including but not limited to source code, databases, functionality, software, website designs, text, photographs, and graphics (collectively, "Content"), and the trademarks and logos contained therein ("Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws. You are granted a limited license to access and use the Site for your personal, non-commercial use only.
                        </p>
                         <p className="text-muted-foreground">
                            For services rendered, the intellectual property rights for the final, delivered work product will be transferred to you upon full and final payment, as will be explicitly detailed in the SOW.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Disclaimer of Warranties</h2>
                        <p className="text-muted-foreground">
                           The Site and its Content are provided on an "as-is" and "as-available" basis. You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the Site’s content.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                           In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the Site or our services, even if we have been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us for services during the six (6) month period prior to any cause of action arising.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">7. Governing Law and Jurisdiction</h2>
                        <p className="text-muted-foreground">
                           These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of Ireland. You agree that the courts of Dublin, Ireland shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">8. Contact Us</h2>
                        <p className="text-muted-foreground">
                           If you have any questions or concerns about these Terms and Conditions, please contact us at: <a href="mailto:synctechire@gmail.com" className="text-primary hover:underline">synctechire@gmail.com</a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}

    