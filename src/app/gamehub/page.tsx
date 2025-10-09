
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: "SYNC TECH GameHub | Play Wordle, Crosswords & More Online",
  description: "Take a break and challenge your mind with the SYNC TECH GameHub. Play free online mini-games like Wordle, Crosswords, and other brain-teasing puzzles. Fun for everyone!",
  keywords: [
    "online mini-games", "play wordle online", "free online puzzles", "brain games", "crossword puzzles", "SYNC TECH games", "daily puzzles", "word games"
  ],
};

const games = [
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Wordle",
    description: "Guess the hidden five-letter word in six tries. A new puzzle is available every day. Can you solve it?",
    status: "Live",
    link: "https://wordle.synctech.ie",
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Crossword",
    description: "Test your vocabulary with our classic crossword puzzle. A perfect way to sharpen your mind during a coffee break.",
    status: "Coming Soon",
    link: "#",
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Sudoku",
    description: "A logic-based number-placement puzzle. Fill the 9x9 grid so that each column, row, and 3x3 subgrid contains all digits from 1 to 9.",
    status: "Coming Soon",
    link: "#",
  },
];

export default function GameHubPage() {
  return (
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
                    <div className="aspect-video rounded-lg border bg-secondary/50 p-4 flex flex-col justify-center items-center gap-1">
                        {/* Placeholder for game preview */}
                    </div>
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
  );
}
