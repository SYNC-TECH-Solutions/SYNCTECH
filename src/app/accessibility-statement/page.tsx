
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
                            SYNC TECH is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to make our website, <a href="https://synctech.ie" className="text-primary hover:underline">synctech.ie</a>, as accessible and usable as possible.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Conformance Status</h2>
                        <p className="text-muted-foreground">
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                        </p>
                         <p className="text-muted-foreground">
                            Our website is partially conformant with **WCAG 2.1 level AA**. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to achieve full conformance.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. Measures Taken</h2>
                        <p className="text-muted-foreground">
                            We have taken the following measures to ensure accessibility:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                            <li><strong>Semantic HTML:</strong> We use correct heading structures and semantic HTML5 elements to aid navigation for screen readers.</li>
                            <li><strong>Alternative Text:</strong> All meaningful images on our site have descriptive alternative text.</li>
                            <li><strong>Keyboard Navigation:</strong> Our website is navigable using only a keyboard.</li>
                            <li><strong>Contrast and Colors:</strong> We have ensured that text and background color contrasts meet or exceed WCAG AA requirements.</li>
                            <li><strong>Responsive Design:</strong> Our site is designed to be accessible on various devices and screen sizes.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Known Limitations</h2>
                        <p className="text-muted-foreground">
                           Despite our best efforts, there may be some limitations. Below is a description of known limitations and potential solutions. Please contact us if you observe an issue not listed below.
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                            <li><strong>Third-Party Content:</strong> Some embedded content from third parties (e.g., videos) may not fully conform to our accessibility standards. We are working with our partners to improve this.</li>
                         </ul>
                    </div>

                     <div className="space-y-2">
                        <h2 className="text-xl font-semibold">5. Feedback and Contact Information</h2>
                        <p className="text-muted-foreground">
                           We welcome your feedback on the accessibility of our website. Please let us know if you encounter any accessibility barriers. We aim to respond to feedback within 5 business days.
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
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
