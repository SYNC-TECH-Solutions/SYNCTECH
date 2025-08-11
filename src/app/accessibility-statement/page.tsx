
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccessibilityStatementPage() {
  return (
    <div className="py-20 md:py-28">
        <div className="container">
            <Card>
                <CardHeader>
                    <CardTitle>Accessibility Statement</CardTitle>
                    <CardDescription>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">1. Our Commitment</h2>
                        <p className="text-muted-foreground">
                            SYNC TECH is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">2. Conformance Status</h2>
                        <p className="text-muted-foreground">
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
                        </p>
                    </div>
                    
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">3. Feedback</h2>
                        <p className="text-muted-foreground">
                            We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
                        </p>
                         <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li><strong>Email:</strong> <a href="mailto:hello@synctech.ie" className="text-primary hover:underline">hello@synctech.ie</a></li>
                            <li><strong>Phone:</strong> +353 83 068 2026</li>
                        </ul>
                        <p className="text-muted-foreground">We try to respond to feedback within 5 business days.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">4. Technical Specifications</h2>
                        <p className="text-muted-foreground">
                           Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                            <li>HTML</li>
                            <li>WAI-ARIA</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
