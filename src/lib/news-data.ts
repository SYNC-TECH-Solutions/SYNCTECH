
export type NewsPost = {
  title: string;
  slug: string;
  date: string; // YYYY-MM-DD
  content: string; // Can be simple text or HTML
  image?: string;
  imageHint?: string;
  hashtags?: string[];
};

export const newsPosts: NewsPost[] = [
  {
    title: "SYNC TECH Launches New AI-Powered Analytics Platform",
    slug: "launch-of-ai-analytics-platform",
    date: "2024-09-15",
    content: "<p>We are thrilled to announce the launch of our next-generation AI-powered analytics platform. This new service leverages advanced machine learning to provide businesses with deeper insights, predictive modeling, and a tangible competitive edge. Early adopters have reported a 30% increase in operational efficiency.</p>",
    image: "https://picsum.photos/seed/news1/800/400",
    imageHint: "data analytics dashboard",
    hashtags: ["#AI", "#Analytics", "#TechLaunch", "#DataScience"],
  },
  {
    title: "Founder Sheraz Hussain to Speak at Dublin Tech Summit",
    slug: "sheraz-hussain-dublin-tech-summit",
    date: "2024-09-10",
    content: "<p>Our founder, Sheraz Hussain, has been invited to speak at the upcoming Dublin Tech Summit. He will be sharing his insights on 'The Future of AI in Small Business' and discussing how emerging technologies can be leveraged for growth. Join him on October 5th at 3 PM on the main stage.</p>",
    image: "https://picsum.photos/seed/news2/800/400",
    imageHint: "conference stage presentation",
    hashtags: ["#DublinTechSummit", "#AI", "#FutureOfTech", "#Leadership"],
  },
  {
    title: "SYNC TECH Awarded 'Top Cybersecurity Provider 2024'",
    slug: "top-cybersecurity-provider-2024",
    date: "2024-09-02",
    content: "<p>We are honored to be recognized as a 'Top Cybersecurity Provider for 2024' by TechReview Ireland. This award is a testament to our team's commitment to providing robust, affordable, and proactive security solutions that protect our clients' most valuable digital assets.</p>",
    image: "https://picsum.photos/seed/news3/800/400",
    imageHint: "award trophy certificate",
    hashtags: ["#Cybersecurity", "#Award", "#TechExcellence", "#Security"],
  },
];

export function getPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}
