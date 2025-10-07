
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccessibilityStatementPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="py-20 md:py-28">
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>Accessibility Statement for SYNC TECH</CardTitle>
                    <CardDescription>Last Updated: {lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">1. Our Commitment</h2>
                        <p className="text-muted-foreground">
                            SYNC TECH is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to make our website, <a href="https://synctech.ie" className="text-primary hover:underline">synctech.ie</a>, accessible to the widest possible audience, regardless of technology or ability.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Conformance Status</h2>
                        <p className="text-muted-foreground">
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                        </p>
                         <p className="text-muted-foreground">
                            Our website is partially conformant with **WCAG 2.1 Level AA**. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to identify and fix these issues to achieve full conformance.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. Measures We've Taken</h2>
                        <p className="text-muted-foreground">
                            We have taken the following measures to ensure the accessibility of our website:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                            <li><strong>Semantic HTML:</strong> We use correct heading structures and semantic HTML5 elements to structure content and aid navigation for screen readers.</li>
                            <li><strong>Alternative Text:</strong> We provide descriptive alternative text for all meaningful images on our site.</li>
                            <li><strong>Keyboard Navigation:</strong> Our website is designed to be fully navigable using only a keyboard. Focus indicators are present to help users understand where they are on the page.</li>
                            <li><strong>Color Contrast:</strong> We have ensured that text and background color contrasts meet or exceed WCAG AA requirements to improve readability.</li>
                            <li><strong>Responsive Design:</strong> Our site is designed to be responsive and accessible on a wide range of devices, including desktops, tablets, and mobile phones.</li>
                             <li><strong>Clear Language:</strong> We strive to use clear and simple language to make our content as easy to understand as possible.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Known Limitations and Future Improvements</h2>
                        <p className="text-muted-foreground">
                           Despite our best efforts to ensure accessibility, there may be some limitations. We are aware of the following issues and are working to address them:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                            <li><strong>Third-Party Content:</strong> Some embedded content from third-party services (e.g., videos from YouTube, widgets) may not fully conform to our accessibility standards. We are limited in our ability to control this content but will prioritize accessible alternatives where possible.</li>
                         </ul>
                         <p className="text-muted-foreground">We are committed to a continuous process of improvement and will be conducting regular accessibility audits to identify and fix issues.</p>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Feedback and Contact Information</h2>
                        <p className="text-muted-foreground">
                           We welcome your feedback on the accessibility of our website. Please let us know if you encounter any accessibility barriers or have suggestions for improvement. We aim to respond to feedback within 5 business days.
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li><strong>Email:</strong> <a href="mailto:synctechire@gmail.com" className="text-primary hover:underline">synctechire@gmail.com</a></li>
                            <li><strong>Phone:</strong> +353 83 068 2026</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">6. Technical Specifications</h2>
                        <p className="text-muted-foreground">
                           Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)</li>
                        </ul>
                         <p className="text-muted-foreground">These technologies are relied upon for conformance with the accessibility standards used.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
