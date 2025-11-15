
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '../logo';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/news-and-events', label: 'Updates' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLinks = ({ className, onItemClick }: { className?: string, onItemClick?: () => void }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium', className)}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onItemClick}
          className="text-foreground/80 transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="SYNC TECH Home">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] p-0">
               <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full p-6 pt-12">
                <SheetClose asChild>
                  <Link href="/" className="mb-8">
                    <Logo />
                  </Link>
                </SheetClose>
                <NavLinks 
                  className="flex-col items-start gap-6 text-lg" 
                  onItemClick={() => {
                    // This logic will be inside the SheetClose but we can't directly close it from here.
                    // The Sheet component handles closing on navigation by default if links are wrapped correctly.
                  }}
                />
                <div className="mt-auto">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
