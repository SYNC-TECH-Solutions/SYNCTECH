
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2, Brain, Puzzle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "SYNC TECH GameHub | Play Free Online Puzzles & Brain Games in Dublin",
  description: "Challenge your mind with the SYNC TECH GameHub. Play free online mini-games like Wordle, daily Crosswords, and Sudoku. Perfect for a quick break in Dublin, our brain-teasing puzzles are fun, free, and waiting for you!",
  keywords: [
    "online mini-games Dublin", "play wordle online Ireland", "free online puzzles Dublin", "brain games Ireland", "crossword puzzles online", "free sudoku Dublin", "SYNC TECH games", "daily puzzles Ireland", "word games", "logic puzzles", "office break games Dublin", "free games to play", "mind games online"
  ],
};

const games = [
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Wordle",
    description: "Guess the hidden five-letter word in six tries. A new puzzle is available every day. A perfect daily challenge!",
    status: "Live",
    link: "https://wordle.synctech.ie",
    preview: <Image src="/wordle.png" alt="Wordle game preview" width={300} height={300} className="object-contain" />,
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Crossword",
    description: "Test your vocabulary with our classic crossword puzzle. A perfect way to sharpen your mind during a coffee break.",
    status: "Coming Soon",
    link: "#",
    preview: <Image src="/crossword.png" alt="Crossword game preview" width={300} height={300} className="object-contain" />,
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-primary" />,
    title: "Sudoku",
    description: "Engage your logic with the classic number puzzle. Fill the 9x9 grid and challenge your problem-solving skills.",
    status: "Coming Soon",
    link: "#",
    preview: <Image src="/sudoku.png" alt="Sudoku game preview" width={300} height={300} className="object-contain" />,
  },
];

const faqs = [
    {
        question: "Are the games on the GameHub completely free to play?",
        answer: "Yes, absolutely! All the games available on the SYNC TECH GameHub are completely free to play. There are no hidden costs or subscriptions required."
    },
    {
        question: "Do I need to create an account to play?",
        answer: "No account is needed. You can start playing any of our live games immediately just by visiting the page. We wanted to make it as easy as possible to jump in and have fun."
    },
    {
        question: "How often are new games added?",
        answer: "We plan to add new games and puzzles periodically. Our goal is to expand the GameHub as a fun showcase of our development capabilities. Keep an eye on this page for future announcements!"
    },
    {
        question: "Why did a tech company build a GameHub?",
        answer: "The GameHub is a fun way for us to showcase our skills in web and application development. It demonstrates our ability to build engaging, high-quality digital experiences. Plus, we believe everyone deserves a fun break!"
    }
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
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            The SYNC TECH <span className="text-primary">GameHub</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Ready for a challenge? Take a break and sharpen your mind with our collection of free online Wordle, Crosswords, and other brain-teasing puzzles.
          </p>
        </div>
      </section>

      {/* Ad Banner Section */}
      <section className="py-8 flex justify-center">
        <div className="ad-container w-[300px] h-[100px] md:w-[728px] md:h-[90px] flex items-center justify-center">
            <Script id="ad-config" strategy="lazyOnload">
              {`
                 if (window.innerWidth < 768) {
                    atOptions = {
                        'key' : '9c3905e9408544a04ca2123d2427a1b5',
                        'format' : 'iframe',
                        'height' : 100,
                        'width' : 300,
                        'params' : {}
                    };
                } else {
                    atOptions = {
                        'key' : '5c3a37a93551c89f5a898b3cf17d23f7',
                        'format' : 'iframe',
                        'height' : 90,
                        'width' : 728,
                        'params' : {}
                    };
                }
              `}
            </Script>
            <Script 
              src="//www.profitablecreativeformat.com/5c3a37a93551c89f5a898b3cf17d23f7/invoke.js"
              strategy="lazyOnload" 
            />
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
                    <div className="rounded-lg border bg-secondary/50 flex flex-col justify-center items-center overflow-hidden p-4">
                        {game.preview}
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

      {/* --- Why We Built This Section --- */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <Brain className="h-12 w-12 text-primary mb-4 mx-auto md:mx-0" />
                <h2 className="text-3xl md:text-4xl font-bold">More Than Just Games</h2>
                <p className="mt-4 text-muted-foreground">
                    The SYNC TECH GameHub is a passion project and a showcase of our development capabilities. We built it to demonstrate our expertise in creating fun, engaging, and high-quality web applications from the ground up. It's a testament to our commitment to clean code, great user experience, and robust performance.
                </p>
                 <p className="mt-4 text-muted-foreground">
                    If you have an idea for a web or mobile application—whether it's a game, a tool, or a new platform—our team has the skills to bring it to life.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                    <Link href="/contact">
                        Discuss Your Project Idea <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    </Button>
                </div>
            </div>
            <div className="flex justify-center">
                 <Image src="/project/gamehub-showcase.png" alt="Showcase of game development code" width={500} height={400} className="rounded-lg shadow-lg" data-ai-hint="code on screen" />
            </div>
        </div>
      </section>

       {/* --- FAQ Section --- */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <Puzzle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Have a question about the GameHub? We've got answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
