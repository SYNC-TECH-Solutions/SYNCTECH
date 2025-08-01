import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FloatingCta() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
            aria-label="Contact Us"
          >
            <Link href="#contact">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Contact Us</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
