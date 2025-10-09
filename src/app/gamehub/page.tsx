
import type { Metadata } from 'next';
import { GameHubClient } from '@/components/sections/gamehub-client';

export const metadata: Metadata = {
  title: "SYNC TECH GameHub | Play Wordle, Crosswords & More Online",
  description: "Take a break and challenge your mind with the SYNC TECH GameHub. Play free online mini-games like Wordle, Crosswords, and other brain-teasing puzzles. Fun for everyone!",
  keywords: [
    "online mini-games", "play wordle online", "free online puzzles", "brain games", "crossword puzzles", "SYNC TECH games", "daily puzzles", "word games"
  ],
};

export default function GameHubPage() {
  return <GameHubClient />;
}
