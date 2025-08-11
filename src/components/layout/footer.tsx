
import Link from 'next/link';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm">Premium Tech Solutions at Competitive Prices.</p>
            <p className="text-sm">Dublin, Ireland</p>
            <a href="mailto:hello@synctech.ie" className="text-sm hover:text-primary transition-colors">
              hello@synctech.ie
            </a>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Web Development</li>
                <li>AI Automation</li>
                <li>Cloud Hosting</li>
                <li>Cybersecurity</li>
                <li>Mobile Apps</li>
                <li>SEO</li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-sm hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                 <li>
                  <Link href="/accessibility-statement" className="text-sm hover:text-primary transition-colors">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/company/synctechie/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
              </Button>
               <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/synctech.ie" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram className="h-4 w-4" /></a>
              </Button>
               <Button variant="outline" size="icon" asChild>
                <a href="https://www.facebook.com/share/19LP52QsnN/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook className="h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/SherazHussain546" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SYNC TECH. All rights reserved. | <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link> | <Link href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}
