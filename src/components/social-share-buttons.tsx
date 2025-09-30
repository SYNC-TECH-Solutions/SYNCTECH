'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Input } from './ui/input';

interface SocialShareButtonsProps {
  title: string;
  slug: string;
}

export function SocialShareButtons({ title, slug }: SocialShareButtonsProps) {
  const { toast } = useToast();
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // Ensure this runs only on the client where `window` is available
    const url = `${window.location.origin}/news-and-events/${slug}`;
    setShareUrl(url);
  }, [slug]);

  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: 'Link Copied!',
      description: 'The link has been copied to your clipboard.',
    });
  };

  if (!shareUrl) return null;

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Copy link">
            <LinkIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex items-center gap-2">
          <Input value={shareUrl} readOnly className="h-8" />
          <Button size="sm" onClick={copyToClipboard}>Copy</Button>
        </PopoverContent>
      </Popover>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </Button>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </Button>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}