
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Handshake, Code, Bot, Shield, Cloud, FileText, Server, BookUser, Users, Milestone, Briefcase, DollarSign } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import type { Metadata } from 'next';
import Head from 'next/head';

const faqCategories = [
  {
    category: "General & Business Questions",
    icon: <Handshake className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "What is SYNC TECH, and what does the name mean?",
        answer: "The name SYNC TECH stands for 'Synchronizing Technology.' Our core mission is to perfectly align and synchronize advanced technologies—like AI, cloud infrastructure, and cybersecurity—with your specific business goals. We don't just provide services; we act as a strategic partner to ensure all your technological components work in harmony, creating a powerful, efficient, and synchronized engine for growth. It's about turning technology from a cost center into your greatest asset. You can <a href='/about' class='text-primary hover:underline'>learn more about our vision here</a>."
      },
      {
        question: "What makes SYNC TECH different from other IT and development companies?",
        answer: "Our primary differentiator is our focus on delivering top-tier results and exceptional value. We combine high-end technology solutions—Web Development, AI, and advanced Cybersecurity—with a commitment to competitive, transparent pricing. We aim to deliver the best possible Return on Investment (ROI) for our clients, as demonstrated by our client <a href='/testimonials' class='text-primary hover:underline'>testimonials</a>."
      },
      {
        question: "What is the typical process for starting a new project?",
        answer: "Our typical process starts with a thorough consultation and assessment. <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Discovery:</strong> We analyze your current processes, systems (like ERPs or spreadsheets), and business objectives to identify improvement opportunities.</li><li><strong>Strategy & Proposal:</strong> We design a tailored solution and present a detailed proposal, outlining the scope, technology stack, timeline, and pricing.</li><li><strong>Development & Integration:</strong> Our team builds the solution, integrating it with your existing systems using efficient methods, often including no-code/low-code technologies for faster deployment.</li><li><strong>Launch & Support:</strong> We ensure a smooth deployment, provide comprehensive training, and offer ongoing 24/7 global support and maintenance.</li></ul>"
      },
      {
        question: "What pricing models do you offer for your services?",
        answer: "We offer flexible pricing to suit your project's needs and budget. The most common models are: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Fixed-Price Contract:</strong> Ideal for projects with a clearly defined scope, where a firm price is agreed upon in advance.</li><li><strong>Time & Materials (T&M):</strong> Best for projects where requirements may evolve, where you pay for the hours and resources our experts dedicate to your needs.</li><li><strong>Monthly/Annual Retainer:</strong> Available for ongoing support, maintenance, or managed services (like Cybersecurity and Managed Cloud).</li></ul>"
      },
       {
        question: "Your website is synctech.ie. Does the '.ie' mean you only work with businesses in Ireland?",
        answer: "While we are proud to be headquartered in Dublin, Ireland, we are a global company. The '.ie' domain reflects our roots, but our services and 24/7 support network are designed for businesses worldwide. We have a proven track record of successfully delivering projects for clients in different countries and time zones."
      }
    ]
  },
  {
    category: "The People & Expertise",
    icon: <Users className="w-8 h-8 text-primary" />,
    questions: [
        {
            question: "Who is Sheraz Hussain, and why did he start SYNC TECH?",
            answer: "Sheraz Hussain is a First-Class Honors Computing graduate and the founder of SYNC TECH. He started the company with a clear mission: to dismantle the barrier between elite, enterprise-level technology and the businesses that need it most. His background in full-stack engineering, AI, and cloud computing revealed a major market gap for affordable, high-quality IT solutions. You can learn more about his journey and see his work on his <a href='/SherazHussain_SYNCTECH' class='text-primary hover:underline'>founder's portfolio page</a>."
        },
        {
            question: "What kind of certifications do your developers have?",
            answer: "Our team is committed to continuous learning and professional development. Our founder, Sheraz Hussain, holds multiple industry-recognized job simulation certificates from leading companies like Electronic Arts (EA), Deloitte, and Mastercard in fields such as Software Engineering, Cybersecurity, and Data Analytics. This commitment to excellence is a core part of our company culture."
        },
        {
            question: "Do you have specific teams for different services (e.g., an 'AI team' and a 'web team')?",
            answer: "As a lean and agile company, our experts are often cross-trained, but we do have specialists who lead different practice areas. For larger projects, we assemble a dedicated team with the right mix of skills—such as AI/ML engineers, full-stack developers, and cybersecurity analysts—to ensure focused expertise and a successful outcome."
        },
        {
            question: "How do you stay up-to-date with new technologies?",
            answer: "Staying current is a core part of our business model. Our team actively engages in continuous professional development, participates in industry job simulations, contributes to open-source projects, and constantly prototypes with emerging technologies. This hands-on approach ensures that the solutions we deliver for clients like you are modern, efficient, and future-proof."
        },
        {
            question: "Are the people working on my project full-time employees or freelancers?",
            answer: "The core of our strategy, design, and project management is handled by our dedicated in-house team, led by our founder. To maintain our competitive pricing and scale our expertise, we leverage a trusted global network of specialized freelance developers and partners who are vetted for their skills and reliability. This flexible model allows us to bring in top-tier talent for your specific needs without the overhead of a large, permanent staff."
        }
    ]
  },
  {
    category: "Defining the Tech",
    icon: <Code className="w-8 h-8 text-primary" />,
    questions: [
        {
            question: "What is the 'Cloud'?",
            answer: "The 'Cloud' refers to a global network of remote servers that are used to store and manage data, run applications, and deliver services over the internet. It's more than just 'storage on the internet'—it's a complete ecosystem that provides computing power, databases, and software on demand. This allows businesses to access powerful resources without having to own and manage their own physical hardware, enabling greater flexibility, scalability, and often, cost savings. Our <a href='/services' class='text-primary hover:underline'>Managed Cloud services</a> help you harness this power securely and efficiently."
        },
        {
            question: "What is 'DevOps'?",
            answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the development lifecycle and provide continuous delivery with high software quality. It's not about two specific people; it's a collaborative culture and methodology. By automating and integrating the processes between development and operations teams, we can build, test, and release software faster and more reliably."
        },
        {
            question: "What are 'Full-Stack' services?",
            answer: "A 'Full-Stack' developer or service provider is proficient in both the 'frontend' (what the user sees and interacts with, like your website's layout and buttons) and the 'backend' (the server, database, and logic that power the application). When we offer full-stack services, it means we can handle a project from concept to completion—from designing the user interface to building the server-side infrastructure that makes it all work."
        },
        {
            question: "What do you mean by 'scalable'?",
            answer: "Scalability is the ability of a system to handle a growing amount of work. When we build a 'scalable' website or application, we design it to perform just as well for 10,000 customers as it does for 10. We achieve this by using modern cloud architectures and efficient code, ensuring your platform can grow with your business without crashing or slowing down."
        },
        {
            question: "What is a 'MERN stack'?",
            answer: "MERN is an acronym for a specific set of technologies used to build full-stack web applications. It stands for MongoDB (a database), Express.js (a backend framework), React (a frontend library), and Node.js (a backend environment). It's not a single language, but a popular and powerful combination of JavaScript-based technologies that allows for the rapid development of modern, high-performance web applications, like the <a href='/portfolio/chattyai-full-stack-ai-chatbot' class='text-primary hover:underline'>ChattyAI project</a> in our portfolio."
        }
    ]
  },
  {
    category: "Growth & Strategy",
    icon: <Milestone className="w-8 h-8 text-primary" />,
    questions: [
        {
            question: "What is Digital Growth & SEO?",
            answer: "Our Digital Growth & SEO service is about making your business more visible online and turning that visibility into revenue. It's not just about keywords; it's a holistic strategy that includes: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Technical SEO:</strong> Ensuring your site is fast, mobile-friendly, and easy for Google to crawl.</li><li><strong>Content Strategy:</strong> Creating valuable content that answers your customers' questions and establishes you as an authority.</li><li><strong>On-Page Optimization:</strong> Structuring your site's content and HTML to clearly signal what you're about to search engines.</li></ul> The goal is to rank higher than your competitors for the terms your customers are searching for, driving qualified traffic to your site."
        },
        {
            question: "Do you help with paid advertising like Google Ads?",
            answer: "Yes, we do. While our primary focus is on organic growth through SEO, we recognize that a comprehensive digital strategy often includes paid advertising. We can assist with setting up and managing targeted Google Ads and social media ad campaigns to complement your SEO efforts and drive immediate traffic for key initiatives."
        },
        {
            question: "Can you help me define a Minimum Viable Product (MVP)?",
            answer: "Absolutely. This is a core part of our strategic process, especially for startups and new projects. We work with you to identify the essential, core features your product needs to launch and solve a real problem for your first users. This MVP approach allows you to get to market faster, gather valuable feedback, and iterate based on real-world data, all while managing your initial budget effectively."
        },
        {
            question: "How much of my time will you need during a project?",
            answer: "Your time commitment will vary based on the project phase. It's most intensive during the initial Discovery and Strategy phase, where we need your input to define goals. After that, we typically establish a weekly or bi-weekly check-in schedule to review progress and gather feedback. We aim to be efficient with your time, providing clear updates and only involving you in key decisions, so you can continue to run your business."
        },
        {
            question: "Do you work on projects that mix physical and digital tech?",
            answer: "Yes, this is an area where we can add significant value. A common example is integrating e-commerce platforms with physical inventory management systems. We can develop solutions that, for instance, connect in-store barcode scanners or POS systems directly to your website's stock levels, ensuring your digital and physical operations are perfectly synchronized."
        }
    ]
  },
  {
    category: "Security, Quality & Compliance",
    icon: <Shield className="w-8 h-8 text-primary" />,
    questions: [
        {
            question: "What is an SLA, and do you offer one?",
            answer: "An SLA, or Service Level Agreement, is a formal contract defining the level of service you can expect from us, including metrics for uptime and response times. Yes, we offer SLAs for our managed hosting and support retainers. These agreements guarantee a specific response time for critical issues, giving you peace of mind that your business is protected. You can learn more about our commitment in the <a href='/faq#service-level-agreements-slas' class='text-primary hover:underline'>SLA section of our FAQ</a>."
        },
        {
            question: "Does SYNC TECH have industry certifications like ISO 27001?",
            answer: "While we are not yet formally ISO 27001 certified, we are actively working towards this goal as part of our long-term roadmap. Our internal processes and security protocols are designed and implemented in alignment with the best practices and control frameworks outlined by standards like ISO 27001 and the NIST Cybersecurity Framework. We take security and compliance very seriously as a foundational element of our services."
        },
        {
            question: "How do you handle data privacy and GDPR?",
            answer: "We adhere strictly to GDPR principles. As your Data Processor, we only handle personal data according to your documented instructions. We execute a Data Processing Agreement (DPA) before any project begins, and we implement 'privacy by design' principles, including strong encryption and access controls, to protect all data. You can find more detail in our <a href='/faq#gdpr-data-compliance' class='text-primary hover-underline'>GDPR FAQ section</a> and our official <a href='/privacy-policy' class='text-primary hover:underline'>Privacy Policy</a>."
        },
        {
            question: "How do you test a new app to ensure it has no 'bugs'?",
            answer: "Our Quality Assurance (QA) process is multi-layered. It includes: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Unit Testing:</strong> Developers test individual components of the code.</li><li><strong>Integration Testing:</strong> We test how different parts of the application work together.</li><li><strong>User Acceptance Testing (UAT):</strong> Before launch, you and your team will have a chance to test the application in a staging environment to ensure it meets all your requirements and is free of critical bugs.</li></ul>"
        },
        {
            question: "If a security breach happens on a server you manage, who is liable?",
            answer: "This is a critical question. As part of our commitment to managing risk, we are actively in the process of securing comprehensive Professional Indemnity and Cyber Liability insurance. The specifics of liability are formally defined in our Service Level Agreement (SLA) and contract. Our goal is to provide robust technical protection and have a clear, contractually-defined process for handling such events, ensuring our clients are protected."
        }
    ]
  },
  {
    category: "Cost & Value",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    questions: [
        {
            question: "How do you keep prices competitive while delivering high quality?",
            answer: "Our business model is built on efficiency. We operate with a lean core team and leverage a global network of specialized talent, which keeps our overheads low. We also focus on using modern, efficient technologies and pre-built components where appropriate to accelerate development without sacrificing quality. This allows us to pass those cost savings on to you, offering enterprise-level results at a price that is accessible."
        },
        {
            question: "Are your projects custom-quoted, or do you have tiered pricing?",
            answer: "Nearly all of our projects are custom-quoted. We believe a 'one-size-fits-all' approach doesn't deliver the best value. We start with a free consultation to understand your specific needs and budget, and then we provide a detailed, transparent proposal tailored to your goals. This ensures you only pay for what you need."
        },
        {
            question: "Are your AI or Cloud solutions accessible to SMEs?",
            answer: "Yes, absolutely. This is a core part of our mission. We specialize in making powerful technologies accessible. Whether it's setting up your first automated workflow or migrating a small application to the cloud, we design solutions that are practical, affordable, and deliver a clear ROI for small-to-medium enterprises (SMEs)."
        },
        {
            question: "What is FinOps and how does it save me money?",
            answer: "FinOps (Financial Operations) is a practice we use to manage your cloud spending. Instead of getting a surprise bill at the end of the month, we proactively monitor, analyze, and optimize your cloud usage. We identify and eliminate wasted resources (like idle servers) and ensure you're on the most cost-effective pricing plan. This brings financial accountability to your cloud usage and directly lowers your monthly bill."
        },
        {
            question: "If I only need a website, do I have to pay for a full suite of services?",
            answer: "No, of course not. Our services are entirely à la carte. If you only need a high-performance website, that is what we will quote and deliver. We can always add more services like SEO or AI automation later on as your business grows and your needs evolve."
        }
    ]
  },
  {
    category: "Technology & Projects",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    questions: [
        {
            question: "What technology stacks do you specialize in for Web Development?",
            answer: "We are experts in modern, JavaScript-based stacks, primarily the MERN/MEAN stack (MongoDB, Express.js, React/Angular, Node.js). We have a particular specialization in using <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Next.js</a> for building high-performance, server-rendered React applications. However, we are technology-agnostic and always choose the right tools for the job based on your project's specific requirements."
        },
        {
            question: "What kind of support do you offer after a project is launched?",
            answer: "We offer several levels of post-launch support. Every project comes with a standard warranty period to fix any bugs. Beyond that, we offer monthly and annual support retainers for ongoing maintenance, security updates, and general technical assistance, all governed by a clear Service Level Agreement (SLA)."
        },
        {
            question: "Can you share a success story relevant to a small retail business?",
            answer: "Certainly. Our work with <a href='/portfolio/stylish-marble-art-ecommerce' class='text-primary hover:underline'>Stylish Marble Art</a> is a perfect example. We built a bespoke e-commerce platform for this luxury retailer, which led to a 40% increase in customer inquiries. This project demonstrates our ability to create beautiful, high-converting online stores for niche retail businesses. You can read the full case study in our portfolio."
        },
        {
            question: "What is Application Modernization and how do I know if I need it?",
            answer: "Application Modernization is the process of updating older, legacy software applications to modern, more efficient technologies (like moving them to the cloud). You might need it if your current software is slow, unreliable, difficult to update, insecure, or not mobile-friendly. Modernizing can reduce costs, improve security, and make your business more agile."
        },
        {
            question: "If I hire you to build an app, who legally owns the code?",
            answer: "You, the client, do. Our standard contract stipulates that upon final payment for the project, the full intellectual property (IP) and ownership of the custom code we've written for you are transferred to you. We believe you should own what you pay for."
        }
    ]
  },
  {
    category: "Partnership & Support",
    icon: <BookUser className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "How quickly can I expect a response if my website goes down?",
        answer: "For clients on one of our support retainers with an SLA, we have guaranteed response times. For a critical P1 incident like a website being down, our target acknowledgement time is typically under 15 minutes, with work beginning on a resolution immediately after. We offer 24/7 global support to ensure your business is always protected."
      },
      {
        question: "Where are your headquarters located?",
        answer: "Our global headquarters are based in Dublin, Ireland, placing us in the heart of one of Europe's leading tech hubs. However, our team and our clients are located worldwide."
      },
      {
        question: "What is the very first step to start a project with you?",
        answer: "The first step is simple: <a href='/contact' class='text-primary hover:underline'>contact us</a> for a free, no-obligation consultation. This initial conversation allows us to understand your vision, discuss your goals, and determine if we are the right fit for each other. From there, we can move forward to a more detailed discovery and proposal phase."
      },
      {
        question: "Will I have a dedicated project manager?",
        answer: "Yes. For every project, you will have a single, dedicated point of contact—typically a project manager or a lead developer. This individual will be responsible for providing regular updates, gathering your feedback, and ensuring the project stays on track, providing a clear and consistent communication channel."
      },
      {
        question: "What methodologies and technologies do you use for Web Development?",
        answer: "We primarily employ Agile/Scrum methodologies for iterative development. Our technology stack often includes MERN/MEAN (MongoDB, Express, React/Angular, Node.js) for full-stack applications, and robust content management systems like WordPress or headless CMS options."
      },
      {
        question: "How do you prevent and manage 'Scope Creep'?",
        answer: "We de-risk scope creep by conducting a thorough Discovery Phase to baseline the initial scope and define clear, written acceptance criteria. Any requested change outside the baseline must go through a formal Change Request process, including impact analysis and written approval, before being scheduled."
      },
      {
        question: "Who owns the code and intellectual property (IP) after launch?",
        answer: "You, the client, own the code and the intellectual property outright upon final payment and project handover. We ensure that production hosting accounts, domains, and any third-party licenses are registered in your name, guaranteeing you full control and portability."
      },
      {
        question: "How do you handle Quality Assurance (QA) and testing?",
        answer: "Our QA process involves multiple stages: Unit Testing (by developers), Integration Testing (for APIs/systems), and a formal User Acceptance Testing (UAT) phase where your team tests the site/app on various browsers and devices to confirm it meets all acceptance criteria prior to launch."
      },
      {
        question: "How are project timelines and development sprints estimated?",
        answer: "Timelines are estimated based on a detailed breakdown of features into user stories and tasks. We use timeboxing for sprints (typically 2 weeks), which allows us to provide reliable delivery dates. The total timeline includes time for discovery, design, development, QA, and content population."
      }
    ]
  }
];

// Since this is a client component, we can't export metadata directly.
// We'll use next/head to set the metadata for this page.
export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const allQuestions = useMemo(() => {
    return faqCategories.flatMap(category => category.questions.map(q => q.question));
  }, []);

  const searchSuggestions = useMemo(() => {
    if (!searchTerm) return [];
    const lowercasedFilter = searchTerm.toLowerCase();
    return allQuestions.filter(q => q.toLowerCase().includes(lowercasedFilter)).slice(0, 5);
  }, [searchTerm, allQuestions]);
  
  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      return faqCategories;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    
    return faqCategories.map(category => {
      const filteredQuestions = category.questions.filter(faq => 
        faq.question.toLowerCase().includes(lowercasedFilter) || 
        faq.answer.toLowerCase().includes(lowercasedFilter)
      );
      return { ...category, questions: filteredQuestions };
    }).filter(category => category.questions.length > 0);

  }, [searchTerm]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setIsPopoverOpen(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value && allQuestions.filter(q => q.toLowerCase().includes(value.toLowerCase())).length > 0) {
      setIsPopoverOpen(true);
    } else {
      setIsPopoverOpen(false);
    }
  };

  return (
    <>
    <Head>
        <title>FAQ | Frequently Asked Questions about SYNC TECH</title>
        <meta name="description" content="Find answers to common questions about SYNC TECH's services, process, technology, and pricing. Learn about our web development, AI, and cybersecurity solutions." />
        <meta name="keywords" content="SYNC TECH FAQ, IT services FAQ, web development questions, AI pricing, cybersecurity questions, tech company FAQ" />
    </Head>
    <div className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a question? Search for answers or browse by category.
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverAnchor>
                <Input 
                    type="search"
                    placeholder="Search questions..."
                    className="w-full text-base"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={() => {
                      if (searchTerm) setIsPopoverOpen(true);
                    }}
                />
              </PopoverAnchor>
              <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
                  <Command>
                    <CommandList>
                      <CommandEmpty>No suggestions found.</CommandEmpty>
                      <CommandGroup>
                        {searchSuggestions.map((suggestion, i) => (
                          <CommandItem
                            key={i}
                            value={suggestion}
                            onSelect={() => handleSuggestionClick(suggestion)}
                            className="cursor-pointer"
                          >
                            {suggestion}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
              </PopoverContent>
            </Popover>
        </div>

        <div className="space-y-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Card key={category.category}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {category.icon}
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
                        <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
                <CardContent className="py-12 text-center">
                    <h3 className="text-xl font-semibold">No Results Found</h3>
                    <p className="text-muted-foreground mt-2">
                        We couldn't find an answer to your question. Please try a different search term or contact us directly.
                    </p>
                    <p className="mt-4">
                        <a href="mailto:synctechire@gmail.com" className="text-primary hover:underline">
                            Email: synctechire@gmail.com
                        </a>
                    </p>
                </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
