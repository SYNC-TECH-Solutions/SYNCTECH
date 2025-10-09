
'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Script from 'next/script';

// Note: Metadata export is not used in client components but can be kept for reference
// or moved to a layout if needed for server-side rendering of the head tag.
export const metadata: Metadata = {
  title: "SYNC TECH GameHub | Play Wordle, Crosswords & More Online",
  description: "Take a break and challenge your mind with the SYNC TECH GameHub. Play free online mini-games like Wordle, Crosswords, and other brain-teasing puzzles. Fun for everyone!",
  keywords: [
    "online mini-games", "play wordle online", "free online puzzles", "brain games", "crossword puzzles", "SYNC TECH games", "daily puzzles", "word games"
  ],
};

const WordlePreview = () => (
  <div className="aspect-video rounded-lg border bg-secondary/50 p-4 flex flex-col justify-center items-center gap-1">
    {[
      [{ l: 'W', s: 'present' }, { l: 'E', s: 'absent' }, { l: 'A', s: 'absent' }, { l: 'R', s: 'absent' }, { l: 'Y', s: 'absent' }],
      [{ l: 'P', s: 'absent' }, { l: 'I', s: 'absent' }, { l: 'L', s: 'present' }, { l: 'O', s: 'correct' }, { l: 'T', s: 'absent' }],
      [{ l: 'S', s: 'absent' }, { l: 'O', s: 'correct' }, { l: 'L', s: 'present' }, { l: 'V', s: 'absent' }, { l: 'E', s: 'present' }],
      [{ l: 'W', s: 'absent' }, { l: 'O', s: 'correct' }, { l: 'R', s: 'correct' }, { l: 'L', s: 'absent' }, { l: 'D', s: 'absent' }],
      [{ l: 'W', s: 'absent' }, { l: 'O', s: 'correct' }, { l: 'R', s: 'correct' }, { l: 'D', 'correct' }, { l: 'L', s: 'correct' }],
    ].map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-1">
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className={cn('w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded text-white font-bold text-lg', {
              'bg-yellow-500': cell.s === 'present',
              'bg-green-600': cell.s === 'correct',
              'bg-gray-500': cell.s === 'absent',
            })}
          >
            {cell.l}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const CrosswordPreview = () => (
  <div className="aspect-video rounded-lg border bg-secondary/50 p-4 flex justify-center items-center">
    <div className="grid grid-cols-8 gap-px bg-muted-foreground/50">
      {Array.from({ length: 64 }).map((_, i) => {
        const isBlack = [1, 3, 5, 7, 8, 10, 15, 17, 20, 22, 24, 26, 28, 30, 33, 35, 38, 41, 43, 45, 47, 50, 55, 57, 59, 61, 62, 63].includes(i);
        return (
          <div key={i} className={cn('w-5 h-5', isBlack ? 'bg-foreground' : 'bg-background')} />
        );
      })}
    </div>
  </div>
);

const SudokuPreview = () => (
  <div className="aspect-video rounded-lg border bg-secondary/50 p-4 flex justify-center items-center">
    <div className="grid grid-cols-9 grid-rows-9 gap-px bg-muted-foreground/50 border-2 border-foreground">
      {Array.from({ length: 81 }).map((_, i) => {
        const row = Math.floor(i / 9);
        const col = i % 9;
        const numbers: {[key: number]: number} = {0: 5, 2: 3, 10: 6, 20: 1, 22: 9, 23: 5, 30: 8, 38: 6, 42: 3, 50: 8, 57: 7, 59: 3, 60: 1, 68: 8, 72: 2, 75: 7, 78: 4, 80: 9};
        return (
          <div
            key={i}
            className={cn(
              'w-5 h-5 flex items-center justify-center bg-background text-foreground text-sm font-bold',
              col % 3 === 2 && col !== 8 && 'border-r-2 border-foreground',
              row % 3 === 2 && row !== 8 && 'border-b-2 border-foreground'
            )}
          >
            {numbers[i] || ''}
          </div>
        );
      })}
    </div>
  </div>
);


const games = [
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Wordle",
    description: "Guess the hidden five-letter word in six tries. A new puzzle is available every day. Can you solve it?",
    status: "Live",
    link: "https://wordle.synctech.ie",
    preview: <WordlePreview />,
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Crossword",
    description: "Test your vocabulary with our classic crossword puzzle. A perfect way to sharpen your mind during a coffee break.",
    status: "Coming Soon",
    link: "#",
    preview: <CrosswordPreview />,
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Sudoku",
    description: "A logic-based number-placement puzzle. Fill the 9x9 grid so that each column, row, and 3x3 subgrid contains all digits from 1 to 9.",
    status: "Coming Soon",
    link: "#",
    preview: <SudokuPreview />,
  },
];

export default function GameHubPage() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7334468000130380"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div className="bg-background">
        {/* --- Hero Section --- */}
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-secondary">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>

          <div className="container text-center z-10">
            <Gamepad2 className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Welcome to the <span className="text-primary">GameHub</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Take a break, challenge your mind, and have some fun. Explore our collection of free online mini-games.
            </p>
          </div>
        </section>

        {/* --- Games Section --- */}
        <section id="games" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Choose Your Challenge</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We're always adding new games and puzzles. See what's available now and what's coming soon!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game) => (
                <Card key={game.title} className="flex flex-col bg-card hover:border-primary transition-colors hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                          {game.icon}
                          <CardTitle className="text-xl">{game.title}</CardTitle>
                      </div>
                      <Badge variant={game.status === 'Live' ? 'default' : 'secondary'}>{game.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                      {game.preview}
                      <p className="text-muted-foreground text-sm">{game.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" disabled={game.status !== 'Live'}>
                      <Link href={game.link} target={game.status === 'Live' ? '_blank' : '_self'} rel="noopener noreferrer">
                        {game.status === 'Live' ? 'Play Now' : 'Coming Soon'}
                        {game.status === 'Live' && <ArrowRight className="ml-2 h-5 w-5" />}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Ad Placeholder */}
            <Card className="mt-16 bg-secondary/50 border-dashed">
                <CardHeader>
                    <CardTitle className="text-center text-sm font-normal text-muted-foreground">Advertisement</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[100px]">
                    {/* 
                        This is where you would place your AdSense ad unit code.
                        Make sure your AdSense account is approved and you have generated an ad unit.
                        
                        <ins class="adsbygoogle"
                            style={{ display: 'block' }}
                            data-ad-client="ca-pub-7334468000130380"
                            data-ad-slot="YOUR_AD_SLOT_ID"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script> 
                    */}
                     <p className="text-sm text-muted-foreground">Ad unit will be displayed here once configured.</p>
                </CardContent>
            </Card>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Have an Idea for a Game?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We built this GameHub to showcase our development skills in a fun way. If you have an idea for a web or mobile game, our team can bring it to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Game Idea <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
