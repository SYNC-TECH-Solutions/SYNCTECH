
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Award, Code, Github, Globe, Linkedin, Mail, MapPin, Phone, Star, User } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sheraz Hussain | Founder of SYNC TECH, Technologist & Entrepreneur",
  description: "Explore the portfolio of Sheraz Hussain, a First-Class Honors Computing graduate and the founder of SYNC TECH. Discover his journey of building high-value technology assets and ventures in AI, full-stack engineering, and cybersecurity.",
  keywords: ["Sheraz Hussain", "SYNC TECH founder", "technology entrepreneur", "AI developer", "full-stack engineer", "technology ventures", "cloud computing expert", "cybersecurity professional", "Next.js developer", "React developer", "Python developer", "Dublin"],
};

const skills = {
    "Programming": ["Python", "C#", "TypeScript", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Angular", "Ionic", "Express", "scikit-learn", "React.js", "Node.js", "FastAPI", "Django", "Flask", "Bootstrap"],
    "AI & NLP": ["Generative AI", "AI/ML", "Prompt Engineering", "Keyword Extraction", "OpenAI", "Google AI Studio"],
    "Cloud & DevOps": ["DevSecOps", "CI/CD Pipelines", "AWS (EC2, S3, Lambda, IAM)", "GCP", "Firebase", "Docker", "Kubernetes", "GitHub Actions", "Azure", "Terraform", "Serverless"],
    "Cybersecurity": ["Penetration Testing", "Zero Trust Architecture", "Data Encryption", "Threat Detection", "Network Security"],
    "Web & Mobile": ["HTML5", "CSS3", "Tailwind CSS", "Material UI", "Capacitor", "Google Maps API"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Firebase Realtime Database", "BigQuery"],
    "Software Development": ["Agile", "REST API", "Microservices", "OOP"],
    "E-Commerce & Web": ["Shopify", "WordPress", "SEO", "Digital Marketing"],
    "Soft Skills": ["Leadership", "Teamwork", "Problem-solving", "Attention to Detail", "Communication", "Time Management"],
};

const projects = [
    {
        title: "Market Genius – An AI-Powered Financial Signal Platform",
        description: "Developed a real-time financial signal platform using Next.js and Genkit. The platform delivers AI-generated insights for stocks and cryptocurrencies with contextual analysis and sentiment summaries.",
        link: "https://github.com/SherazHussain546/Market-Genius",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Genkit", "Firebase", "Alpha Vantage API"]
    },
    {
        title: "Job4You – Your Personal AI Recruiter",
        description: "Created an automated job-application assistant with Python and GPT-4. The assistant successfully processed over 100 simulated job applications for university peers.",
        link: "https://github.com/SherazHussain546/Job4You",
        tech: ["Angular", "Firebase", "GPT-4", "scikit-learn"]
    },
    {
        title: "ChattyAI - A Conversational AI Assistant",
        description: "Architected and built a cross-platform AI chatbot using the Gemini API, Angular, Ionic, and Firebase, deployed within a university department as a study aid.",
        link: "https://github.com/SherazHussain546/ChattyAI",
        tech: ["Firebase", "TypeScript", "Vite", "Tailwind", "SQLite/Drizzle"]
    },
    {
        title: "GoExploree – Real Estate Mobile App",
        description: "Developed a cross-platform real estate mobile app using Ionic Angular, Capacitor, Firebase Auth, PostgreSQL via Drizzle ORM, and Google Maps integration.",
        link: "https://github.com/SherazHussain546/GoExploree",
        tech: ["Ionic", "Angular", "Capacitor", "Firebase", "PostgreSQL"]
    },
];

const experiences = [
    {
        role: "Founder & Lead Technologist",
        company: "SYNC TECH",
        date: "2023 – Present",
        points: [
            "Architected the vision for SYNC TECH to bridge the gap between high-end, enterprise-level IT solutions and the businesses that need them most, focusing on affordability and 24/7 global support.",
            "Lead the design and development of custom web applications, AI automation tools, and cybersecurity frameworks for a diverse portfolio of clients, from startups to established enterprises.",
            "Oversee all technical strategy, project management, and client relations, ensuring every solution delivers measurable ROI and aligns with our core mission of driving growth through technology.",
        ]
    },
     {
        role: "Co-Founder",
        company: "APTLY DRESSED",
        date: "2024 – Present",
        points: [
            "Co-founded APTLY DRESSED, a premier fashion affiliate aggregator designed to solve the fragmented online shopping experience by providing expertly curated, complete outfit solutions.",
            "Spearheaded the technology vision and execution, leveraging SYNC TECH Solutions to build and launch the platform, including a high-performance Next.js frontend and an AI-powered 'Complete the Look' feature using Google's Genkit.",
            "Architected a lean, zero-inventory-risk business model based on affiliate marketing, establishing a scalable and profitable digital venture from the ground up.",
        ]
    },
    {
        role: "E-Commerce & Digital Strategist (via SYNC TECH)",
        company: "Stylish Marble Art",
        date: "2024 - Present",
        points: [
            "Led the end-to-end digital transformation for a luxury retailer, including the development of a custom e-commerce website on a modern tech stack.",
            "Managed the brand's entire online presence, implementing a multi-channel digital marketing strategy across Facebook, Instagram, and Google.",
            "Executed targeted SEO and keyword campaigns to dramatically improve search engine rankings and drive qualified organic traffic.",
        ]
    },
    {
        role: "Founder & E-Commerce Strategist",
        company: "Luxe Threads",
        date: "2024 - Present",
        points: [
            "Launched and managed an online fashion brand on WordPress/WooCommerce, handling everything from custom web development (HTML/CSS) to digital marketing strategy.",
            "Executed targeted SEO and Google Ads campaigns that increased organic traffic by 50% and lifted conversion rates by 25%, proving a strong grasp of the full e-commerce lifecycle.",
        ]
    },
     {
        role: "Deputy Manager",
        company: "Castore",
        date: "April 2024 – Present",
        points: [
            "Led and mentored a team of 12+ staff, driving a 55% increase in monthly sales targets through effective leadership and performance management.",
            "Designed and implemented an inventory management system with real-time analytics, reducing stock discrepancies by 30% and demonstrating a strong capability for operational improvement.",
        ]
    },
    {
        role: "Peer Mentor",
        company: "Dublin Business School",
        date: "September 2022 – May 2023",
        points: [
            "Mentored 20+ students each semester, providing guidance on complex technical projects and professional development.",
            "Honored with the Student Leader Award (Peer Mentor with Distinction) for exceptional leadership and impact.",
        ]
    },
];

const certifications = [
    "Electronic Arts (EA) Software Engineering Job Simulation | Forage",
    "Deloitte Australia Cyber Job Simulation | Forage",
    "Deloitte Australia Data Analytics Job Simulation | Forage",
    "Mastercard Cybersecurity Job Simulation | Forage",
    "Google Ads AI-Powered Performance Certification | Google",
    "Graduate Work Readiness (Gold, Silver, Bronze) | Dublin Business School",
];

export default function FounderPage() {
  return (
    <div className="bg-secondary">
      <div className="container max-w-6xl py-16 md:py-24">
        {/* --- Header Section --- */}
        <header className="grid md:grid-cols-3 gap-8 items-center mb-16">
            <div className="md:col-span-1 flex justify-center">
                 <Image 
                  src="/founder.jpg" 
                  alt="Sheraz Hussain, founder of SYNC TECH" 
                  width={250} 
                  height={250} 
                  className="rounded-full object-cover border-4 border-primary"
                  data-ai-hint="professional headshot"
                />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sheraz Hussain</h1>
                <p className="mt-2 text-xl text-primary font-semibold">Founder of SYNC TECH | Technologist & Entrepreneur</p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Dublin, Ireland</span>
                    <a href="mailto:sherazhussainofficial1@gmail.com" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> sherazhussainofficial1@gmail.com</a>
                    <a href="tel:+353830682026" className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> +353 83 068 2026</a>
                </div>
                 <div className="mt-4 flex justify-center md:justify-start gap-2">
                    <Button variant="outline" size="icon" asChild><a href="https://linkedin.com/in/sherazhussain546/" target="_blank" rel="noopener noreferrer"><Linkedin /></a></Button>
                    <Button variant="outline" size="icon" asChild><a href="https://github.com/SherazHussain546" target="_blank" rel="noopener noreferrer"><Github /></a></Button>
                    <Button variant="outline" size="icon" asChild><a href="https://aptlydressed.com" target="_blank" rel="noopener noreferrer"><Globe /></a></Button>
                </div>
            </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                {/* --- Founder's Profile --- */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><User className="text-primary" /> Founder's Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">As a First-Class Honors Computing graduate and a passionate technologist, I founded SYNC TECH with a clear mission: to dismantle the barrier between elite, enterprise-level technology and the businesses that need it to grow. My journey has been driven by a relentless pursuit of innovation, from developing sophisticated AI-driven platforms to architecting secure, full-stack solutions. Each project and venture in my portfolio, including my work in e-commerce with Luxe Threads and my leadership roles, has been a stepping stone toward building SYNC TECH—a company that embodies technical excellence, strategic thinking, and a commitment to delivering tangible value. This is more than a portfolio; it's the story of building assets that solve real-world problems.</p>
                    </CardContent>
                </Card>

                 {/* --- Portfolio of Ventures & Key Assets --- */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Briefcase className="text-primary"/> Portfolio of Ventures & Key Assets</h2>
                    <div className="space-y-6">
                        {projects.map(proj => (
                            <Card key={proj.title}>
                                <CardHeader>
                                    <CardTitle>
                                         <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-between">
                                            {proj.title} <Github className="h-5 w-5 text-muted-foreground" />
                                        </a>
                                    </CardTitle>
                                    <CardDescription>{proj.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                 {/* --- Professional Journey --- */}
                 <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Building className="text-primary"/> Professional Journey</h2>
                    <div className="space-y-6">
                        {experiences.map(exp => (
                             <Card key={exp.company + exp.role}>
                                <CardHeader>
                                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                                    <CardDescription>{exp.company} | {exp.date}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                                        {exp.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                 </section>

            </div>
            <aside className="lg:col-span-1 space-y-8">
                 {/* --- Education --- */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold">Bachelor of Science in Computing (First Class Honors)</h3>
                        <p className="text-muted-foreground text-sm">Dublin Business School, 2021 – 2025</p>
                        <p className="text-xs text-primary mt-2">Award: Peer-Mentor Leadership Award</p>
                    </CardContent>
                </Card>

                 {/* --- Core Competencies --- */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Code className="text-primary"/> Core Competencies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {Object.entries(skills).map(([category, list]) => (
                            <div key={category}>
                                <h3 className="font-semibold mb-2 text-sm text-primary">{category}</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {list.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                
                 {/* --- Certifications --- */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Award className="text-primary"/> Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {certifications.map(cert => (
                                <li key={cert} className="flex items-start gap-2">
                                    <Star className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                                    <span>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}
