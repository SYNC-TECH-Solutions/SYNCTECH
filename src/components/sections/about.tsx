import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-last md:order-first">
            <Card className="overflow-hidden">
                <Image
                    src="/dublinsync.png"
                    alt="A stylized image representing technology and innovation in Dublin"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform hover:scale-105"
                />
            </Card>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About SYNC TECH</h2>
            <p className="text-muted-foreground mb-6">
              Founded in the heart of Dublin's thriving tech scene, SYNC TECH is driven by a simple mission: to empower businesses with transformative technology. We bridge the gap between complex innovation and practical application, ensuring our clients not only keep pace with the future but lead it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">To deliver bespoke, high-impact technology solutions that drive growth, efficiency, and competitive advantage for our partners.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Value</h3>
                  <p className="text-muted-foreground text-sm">We combine deep technical expertise with a collaborative, client-centric approach, turning ambitious ideas into robust, scalable realities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
