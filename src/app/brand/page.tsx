
import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { Inter } from 'next/font/google';
import { CheckCircle } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "SYNC TECH Brand Guide & Founder Story | Our Identity",
  description: "Explore the official brand guide of SYNC TECH. Discover our logo, color palette, typography, and the vision of our founder, Sheraz Hussain. Your resource for SYNC TECH's corporate identity and design principles.",
  keywords: [
    "SYNC TECH brand guide", "Sheraz Hussain founder", "tech company branding", "corporate identity", "SYNC TECH logo", "brand assets", "color palette", "typography guidelines", "IT company vision"
  ],
};

const ColorSwatch = ({ hex, hsl, name }: { hex: string, hsl: string, name: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-20 w-20 rounded-lg border" style={{ backgroundColor: hex }}></div>
    <div className="text-center">
      <p className="font-semibold">{name}</p>
      <p className="text-xs text-muted-foreground">{hex}</p>
      <p className="text-xs text-muted-foreground">{hsl}</p>
    </div>
  </div>
);

export default function BrandPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Brand Identity</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            This guide outlines the core visual and philosophical elements of the SYNC TECH brand. It's a resource to ensure consistency, quality, and clarity across all communications.
          </p>
        </header>

        {/* Founder Section */}
        <Card className="mb-12 bg-secondary">
          <CardHeader>
            <CardTitle>The Visionary Behind the Brand</CardTitle>
            <CardDescription>The story and philosophy of our founder, Sheraz Hussain.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <Image 
                  src="/dublinsync.png" 
                  alt="Sheraz Hussain, founder of SYNC TECH" 
                  width={400} 
                  height={400} 
                  className="rounded-lg object-cover w-full h-auto"
                  data-ai-hint="professional headshot"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Sheraz Hussain: Architect of Accessible Technology</h3>
                <p className="text-muted-foreground mb-4">
                  SYNC TECH was founded by Sheraz Hussain, a technologist and visionary entrepreneur driven by a single, powerful mission: to dismantle the barrier between high-end IT solutions and the businesses that need them most. With a deep background in software engineering and a passion for strategic problem-solving, Sheraz identified a critical gap in the market—the space where enterprise-level quality and affordability could coexist.
                </p>
                <p className="text-muted-foreground">
                  He built SYNC TECH not just as a service provider, but as a strategic partner for growth, championing a philosophy where cutting-edge technology in AI, cybersecurity, and cloud infrastructure serves as a powerful engine for businesses of all sizes, not just the giants. His leadership ensures that every project is infused with a commitment to tangible results, measurable ROI, and unwavering 24/7 client support.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logo Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>The Logo</CardTitle>
            <CardDescription>Our primary wordmark, representing synchronization and technology.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="p-10 rounded-lg">
              <Logo className="text-6xl" />
            </div>
            <div className="max-w-md">
                <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Clarity and Impact</h3>
                        <p className="text-muted-foreground text-sm">The logo is designed to be clean, memorable, and impactful. The two parts, "SYNC" and "TECH," are unified to represent the seamless integration of our services with our clients' operations.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Color Significance</h3>
                        <p className="text-muted-foreground text-sm">White ("SYNC") signifies clarity and simplicity, while the vibrant cyan-green ("TECH") represents innovation, growth, and technology.</p>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Our official brand colors for dark and light themes.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Dark Theme (Default)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <ColorSwatch hex="#14c99e" hsl="170 80% 45%" name="Primary" />
                <ColorSwatch hex="#09090b" hsl="240 10% 3.9%" name="Background" />
                <ColorSwatch hex="#f9fafb" hsl="210 20% 98%" name="Foreground" />
                <ColorSwatch hex="#212429" hsl="228 9% 14%" name="Secondary" />
                <ColorSwatch hex="#2a2d33" hsl="228 9% 18%" name="Borders/Inputs" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Light Theme</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <ColorSwatch hex="#14c99e" hsl="170 80% 45%" name="Primary" />
                <ColorSwatch hex="#ffffff" hsl="0 0% 100%" name="Background" />
                <ColorSwatch hex="#090f19" hsl="224 71.4% 4.1%" name="Foreground" />
                <ColorSwatch hex="#f3f5f7" hsl="220 14.3% 95.9%" name="Secondary" />
                <ColorSwatch hex="#e4e7eb" hsl="220 13% 91%" name="Borders/Inputs" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography Section */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Our official brand font is Inter.</CardDescription>
          </CardHeader>
          <CardContent className={inter.className}>
            <p className="text-sm text-muted-foreground mb-6">We use the Inter font family for its excellent readability on screens and its modern, neutral aesthetic. It provides clarity and consistency across all our digital assets.</p>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Heading 1: For primary page titles</h1>
              <h2 className="text-3xl font-bold">Heading 2: For major section titles</h2>
              <h3 className="text-2xl font-semibold">Heading 3: For subsections and card titles</h3>
              <p className="text-base">This is a standard paragraph. It is used for the main body text, offering a clean and readable experience for long-form content.</p>
              <p className="text-sm text-muted-foreground">This is muted text. It's used for descriptions, captions, and other secondary information.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
