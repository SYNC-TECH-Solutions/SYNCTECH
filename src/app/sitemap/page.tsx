
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { posts } from '@/lib/posts';
import { projects } from '@/lib/projects';
import { newsPosts } from '@/lib/news-data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sitemap | SYNC TECH",
  description: "Navigate the SYNC TECH website. Find quick links to all our pages, services, portfolio case studies, blog articles, and company information.",
  robots: {
    index: true,
    follow: true,
  }
};

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/portfolio', label: 'Our Work & Portfolio' },
  { href: '/blog', label: 'Tech Blog' },
  { href: '/news-and-events', label: 'SYNC TECH Feed' },
  { href: '/testimonials', label: 'Client Testimonials' },
  { href: '/contact', label: 'Contact Us' },
];

const companyLinks = [
    { href: '/become-a-partner', label: 'Become a Partner' },
    { href: '/presentation', label: 'Partnership Proposal' },
    { href: '/guidelines-synctech', label: 'Brand Guidelines' },
    { href: '/SherazHussain_SYNCTECH', label: "Founder's Profile" },
];

const legalLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/accessibility-statement', label: 'Accessibility Statement' },
];

const List = ({ children }: { children: React.ReactNode }) => (
    <ul className="space-y-3">{children}</ul>
);

const ListItem = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link href={href} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowRight className="h-4 w-4 mr-2 text-primary/50" />
            <span>{label}</span>
        </Link>
    </li>
);

export default function SitemapPage() {
  return (
    <div className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sitemap</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A complete overview of the SYNC TECH website. Use these links to navigate to any page.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Card>
            <CardHeader>
              <CardTitle>Main Pages</CardTitle>
            </CardHeader>
            <CardContent>
                <List>
                    {mainLinks.map(link => <ListItem key={link.href} {...link} />)}
                </List>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company</CardTitle>
            </CardHeader>
            <CardContent>
                 <List>
                    {companyLinks.map(link => <ListItem key={link.href} {...link} />)}
                </List>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle>Legal</CardTitle>
            </CardHeader>
            <CardContent>
                 <List>
                    {legalLinks.map(link => <ListItem key={link.href} {...link} />)}
                </List>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Portfolio Case Studies</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              <List>
                {projects.map(project => <ListItem key={project.slug} href={`/portfolio/${project.slug}`} label={project.title} />)}
              </List>
            </CardContent>
          </Card>
          
           <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Blog Articles</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
               <List>
                {posts.map(post => <ListItem key={post.slug} href={`/blog/${post.slug}`} label={post.title} />)}
              </List>
            </CardContent>
          </Card>

           <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>News & Events Feed</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
               <List>
                {newsPosts.map(post => <ListItem key={post.slug} href={`/news-and-events/${post.slug}`} label={post.title} />)}
               </List>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
