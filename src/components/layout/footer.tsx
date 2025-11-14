
import Link from 'next/link';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const mainLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/news-and-events', label: 'Updates' },
  { href: '/contact', label: 'Contact' },
];

const secondaryLinks = [
    { href: '/presentation', label: 'Presentation' },
    { href: '/guidelines-synctech', label: 'SYNC TECH Guides' },
    { href: '/become-a-partner', label: 'Become a Partner' },
    { href: '/gamehub', label: 'Game Hub' },
    { href: '/game-business-strategy', label: 'Game Monetization' },
];

const legalLinks = [
    { href: '/faq', label: 'FAQ' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/accessibility-statement', label: 'Accessibility' },
]

const servicesLinks = [
    { href: '/services/web-development', label: 'Web Design & Development' },
    { href: '/services/ai-machine-learning', label: 'AI & ML' },
    { href: '/services/managed-cloud', label: 'Cloud Management & Optimization' },
    { href: '/services/finops-cost-management', label: 'FinOps & Cost Management' },
    { href: '/services/cybersecurity', label: 'Cybersecurity' },
    { href: '/services/digital-growth-seo', label: 'Digital Growth & SEO' },
    { href: '/services/games', label: 'Game Development' },
];

const partnershipLinks = [
    { href: '/services/wordpress', label: 'WordPress' },
    { href: '/services/woocommerce', label: 'WooCommerce' },
    { href: '/services/jetpack', label: 'Jetpack' },
    { href: 'https://stripe.com/', label: 'Stripe' },
    { href: 'https://www.godaddy.com/pro', label: 'GoDaddy Pro' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          <div className="flex flex-col gap-4 md:col-span-1">
            <Logo />
            <p className="text-sm">Global IT Solutions & 24/7 Support.</p>
            <p className="text-sm">Global Headquarters</p>
            <a href="mailto:synctechire@gmail.com" className="text-sm hover:text-primary transition-colors">
              synctechire@gmail.com
            </a>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                {mainLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-4 text-primary">Explore</h3>
                <ul className="space-y-2">
                    {secondaryLinks.map((item) => (
                    <li key={item.label}>
                        <Link href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</Link>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Services</h3>
              <ul className="space-y-2">
                {servicesLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-4 text-primary">Our Partnerships</h3>
                <ul className="space-y-2">
                    {partnershipLinks.map((item) => (
                    <li key={item.label}>
                        {item.href.startsWith('/') ? (
                            <Link href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</Link>
                        ) : (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">{item.label}</a>
                        )}
                    </li>
                    ))}
                </ul>
            </div>
             <div>
              <h3 className="font-semibold mb-4 text-primary">Legal & Admin</h3>
              <ul className="space-y-2">
                 {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 border-t pt-8 gap-4">
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold">Follow us on:</p>
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
              </div>
            </div>
            <div 
              className="trustpilot-widget w-full max-w-xs" 
              data-locale="en-US" 
              data-template-id="56278e9abfbbba0bdcd568bc" 
              data-businessunit-id="689cbe87e91f287c6dde1dd9" 
              data-style-height="52px" 
              data-style-width="100%"
              data-theme="dark"
              data-token="156951d1-2c7b-4d24-99bd-38a1e9b007ee"
            >
              <a href="https://www.trustpilot.com/review/synctech.ie" target="_blank" rel="noopener">Trustpilot</a>
            </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SYNC TECH. All rights reserved. | <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link> | <Link href="/terms-and-conditions" className="hover:text-primary">Terms &amp; Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}
