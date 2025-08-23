
import Link from 'next/link';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const BloggerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.75 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h16.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3H3.75zm10.033 4.155a.75.75 0 0 0-1.06 1.06l1.72 1.72H9.25a.75.75 0 0 0 0 1.5h5.193l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3z"
      clipRule="evenodd"
      style={{
        fill: '#FF5722',
        stroke: '#fff',
        strokeWidth: 1.5,
        paintOrder: 'stroke',
      }}
      transform="translate(0.5, 0.5) scale(0.9)"
    />
    <path
      d="M8.25 9.75h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H8.25a2.25 2.25 0 0 1-2.25-2.25V9.75h2.25zm0 1.5H6v.75a.75.75 0 0 0 .75.75h1.5v-1.5z"
      fill="#fff"
      transform="translate(0.5, 0.5) scale(0.9)"
    />
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm">Global IT Solutions & 24/7 Support.</p>
            <p className="text-sm">Global Headquarters</p>
            <a href="mailto:synctechire@gmail.com" className="text-sm hover:text-primary transition-colors">
              synctechire@gmail.com
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
                 <li>
                  <Link href="/presentation" className="text-sm hover:text-primary transition-colors">
                    Presentation
                  </Link>
                </li>
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
              <h3 className="font-semibold mb-4">Legal & Admin</h3>
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
            <div className="flex flex-wrap gap-2">
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
              <Button variant="outline" size="icon" asChild>
                <a href="https://synctech-ie.blogspot.com/" aria-label="Blogger" target="_blank" rel="noopener noreferrer">
                  <BloggerIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
         <div className="mt-8 border-t pt-8">
            <div 
              className="trustpilot-widget" 
              data-locale="en-US" 
              data-template-id="56278e9abfbbba0bdcd568bc" 
              data-businessunit-id="689cbe87e91f287c6dde1dd9" 
              data-style-height="52px" 
              data-style-width="100%" 
              data-token="156951d1-2c7b-4d24-99bd-38a1e9b007ee"
            >
              <a href="https://www.trustpilot.com/review/synctech.ie" target="_blank" rel="noopener">Trustpilot</a>
            </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SYNC TECH. All rights reserved. | <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link> | <Link href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}
