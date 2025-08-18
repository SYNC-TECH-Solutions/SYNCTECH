
export type Project = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  image: string;
  imageHint: string;
  techStack: string[];
  results: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Analytics for Bio-Pharma",
    slug: "ai-biopharma-analytics",
    excerpt: "Developed a custom AI engine that automated the analysis of scientific data, accelerating biomarker validation by an estimated five years.",
    description: "For a leading bio-pharmaceutical client, we engineered a sophisticated AI and Machine Learning platform to automate the analysis of complex genomic and proteomic data. This system replaced a manual process that was slow and prone to human error, enabling researchers to identify potential drug targets and validate biomarkers at an unprecedented speed. The platform integrated seamlessly with their existing research databases and provided an intuitive dashboard for scientists to explore the results.",
    image: "https://placehold.co/1200x600.png",
    imageHint: "ai science data",
    techStack: ["Python", "TensorFlow", "AWS SageMaker", "Data Analytics", "Next.js"],
    results: "The AI engine automated a process that was projected to take nearly five years of manual work, dramatically accelerating the drug discovery pipeline and providing a significant competitive advantage.",
  },
  {
    title: "ChattyAI - Full-Stack AI Chatbot",
    slug: "chattyai-full-stack-ai-chatbot",
    excerpt: "Engineered a full-stack, real-time AI chatbot with user authentication, demonstrating expertise in modern MERN stack and OpenAI integration.",
    description: "Developed 'ChattyAI', a complete conversational AI application from the ground up. The platform allows users to sign up, log in, and engage in real-time conversations with an advanced AI model. The system securely stores chat history, allowing users to revisit and manage their past conversations. This project showcases the ability to build secure, scalable, full-stack applications that integrate cutting-edge AI services.",
    image: "https://placehold.co/1200x600.png",
    imageHint: "chatbot interface",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Material-UI", "TypeScript", "JWT"],
    results: "Successfully built and deployed a feature-rich AI application, demonstrating proficiency in MERN stack development, secure user authentication, and seamless integration with third-party AI APIs like OpenAI.",
    liveUrl: "https://github.com/SherazHussain546/ChattyAI",
  },
  {
    title: "Stylish Marble Art - E-Commerce Store",
    slug: "stylish-marble-art-ecommerce",
    excerpt: "Developed a bespoke e-commerce platform for a luxury marble art retailer, enhancing online presence and driving sales.",
    description: "Created a visually stunning and highly functional e-commerce website for Stylish Marble Art, a retailer of premium marble crafts. The platform showcases their products with high-resolution imagery and provides a seamless shopping experience from browsing to checkout. The site is built to be fast, secure, and easy for the client to manage.",
    image: "/project/SMA.png",
    imageHint: "marble art ecommerce",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "E-commerce"],
    results: "Launched a successful online store, leading to a 40% increase in customer inquiries and a streamlined sales process for a niche, high-value product line.",
    liveUrl: "https://www.stylishmarbleart.com",
  },
  {
    title: "E-COMMERCE MANAGER | LUXE THREADS",
    slug: "luxe-threads-ecommerce",
    excerpt: "Launched and managed a fashion e-commerce brand, driving a 50% increase in organic traffic and a 25% lift in conversion rates.",
    description: "Launched and managed an online fashion brand on WordPress/WooCommerce with custom HTML/CSS, integrating Stripe and PayPal for seamless checkout. Executed SEO and Google Ads campaigns that increased organic traffic by 50% and lifted conversion rates by 25%. The project involved a deep dive into customer analytics to optimize the user journey, from landing page to checkout, resulting in a highly efficient sales funnel.",
    image: "/project/luxethreads.png",
    imageHint: "fashion website e-commerce",
    techStack: ["WordPress", "WooCommerce", "Stripe", "PayPal", "SEO", "Google Ads", "HTML/CSS"],
    results: "Estimated a pre-revenue of approximately €18,750 per month from Google Ads based on 15,000 monthly visitors, a 2.5% conversion rate, and a €75 average order value.",
    liveUrl: "https://synctech.ie",
  },
  {
    title: "GoExploree – Real Estate Mobile App",
    slug: "goexploree-real-estate-app",
    excerpt: "Developed a cross-platform mobile app for a student accommodation service, enabling 30+ tenants to browse and schedule viewings.",
    description: "Developed a cross-platform real estate mobile app for a local student accommodation service, enabling 30+ prospective tenants to browse and schedule viewings. The app was built using a modern stack to ensure a seamless experience on both iOS and Android. Key features included property listings with high-res images, interactive maps for location scouting, and an integrated calendar system for scheduling viewings directly with property managers.",
    image: "/project/goexploree.png",
    imageHint: "mobile app interface",
    techStack: ["Ionic", "Angular", "Capacitor", "Firebase", "PostgreSQL", "Google Maps API"],
    results: "Successfully enabled 30+ prospective tenants to browse properties and schedule viewings, streamlining the rental process and reducing administrative overhead for the accommodation service by 40%.",
    liveUrl: "https://github.com/SherazHussain546/GoExploree",
  },
  {
    title: "ATLANTIC HOTEL - Live Project",
    slug: "atlantic-hotel-booking-system",
    excerpt: "Led the redesign of the Atlantic Hotel website, creating a custom booking system that boosted revenue by 67%.",
    description: "Led the redesign and development of the Atlantic Hotel website, creating a user-friendly interface and a custom booking management system. This project involved integrating multiple third-party booking APIs (Booking.com, Airbnb, OpenTable) into a single, unified dashboard for hotel staff. The new system automated room availability checks and pricing adjustments, significantly improving operational efficiency.",
    image: "/project/atlantichotel.png",
    imageHint: "hotel booking system",
    techStack: ["Booking.com API", "Airbnb API", "OpenTable API", "React", "Node.js", "Express"],
    results: "Integrated major booking platforms, resulting in a 67% increase in direct booking revenue and improved operational efficiency for hotel staff, saving an average of 10 hours per week on administrative tasks.",
    liveUrl: "http://www.atlantichotel.ie",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
