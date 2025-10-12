
'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const Breadcrumb = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return null; // Don't show breadcrumbs on the home page
  }

  const toTitleCase = (str: string) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="breadcrumb" className={cn('bg-secondary', className)} {...props}>
      <ol className="container flex items-center gap-1.5 break-words py-3 text-sm text-muted-foreground sm:gap-2.5">
        <li className="inline-flex items-center gap-1.5">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;
          return (
            <React.Fragment key={href}>
              <li className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {isLast ? (
                  <span className="font-semibold text-foreground">
                    {toTitleCase(segment)}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-foreground">
                    {toTitleCase(segment)}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
Breadcrumb.displayName = 'Breadcrumb';


export { Breadcrumb };
