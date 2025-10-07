
'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Handshake, Code, Bot, Shield, Cloud, FileText, Server, BookUser } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    category: "General & Business Questions",
    icon: <Handshake className="w-8 h-8 text-primary" />,
    questions: [
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
      }
    ]
  },
  {
    category: "Web Development & Digital Growth",
    icon: <Code className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "Do you only build new websites, or can you update my existing site?",
        answer: "We offer both. We can build a high-performance, bespoke website or e-commerce store from scratch that focuses on conversions and user experience. We also provide <a href='/services' class='text-primary hover:underline'>Application Modernization</a> services to refactor and update legacy applications and websites for secure, scalable cloud environments, enhancing speed and agility."
      },
      {
        question: "What steps do you take to ensure my new website is secure?",
        answer: "Security is baked into our web development process from the start. Key measures include: <ul class='list-disc list-inside space-y-2 mt-2'><li>Using secure, modern Content Management Systems (CMS) and frameworks.</li><li>Implementing Web Application Firewalls (WAF), malware detection, and DDoS protection.</li><li>Regularly applying security updates and patches to the CMS, themes, and all third-party plugins.</li><li>Ensuring secure hosting, typically on a Managed Cloud environment with built-in security protocols and 24/7 monitoring.</li></ul>"
      },
      {
        question: "What is included in your Digital Growth & SEO service?",
        answer: "Our <a href='/services' class='text-primary hover:underline'>Digital Growth and SEO service</a> is focused on improving your online visibility and driving qualified traffic with a strong ROI. This includes: <ul class='list-disc list-inside space-y-2 mt-2'><li>Search Engine Optimization (SEO): Keyword research, on-page optimization, technical SEO audits, and content strategy.</li><li>Performance Analytics: Tracking and reporting on key metrics to ensure your online presence is continually growing and converting visitors effectively.</li></ul>"
      }
    ]
  },
  {
    category: "AI & Automation Services",
    icon: <Bot className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "How can AI Automation help my business?",
        answer: "AI Automation leverages Artificial Intelligence and Machine Learning to automate repetitive workflows, enhance operational efficiency, and provide a competitive edge. This can include: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Smart Data Processing:</strong> Automating data entry, validation, and reporting (e.g., smart payroll validation).</li><li><strong>AI-Powered Analytics:</strong> Developing custom AI engines for tasks like scientific data analysis or real-time decision-making.</li><li><strong>Customer Engagement:</strong> Implementing AI Chatbots for instant, 24/7 customer support.</li><li><strong>System Integration:</strong> Connecting your existing systems (ERP, CRM) to create seamless, automated workflows.</li></ul>"
      },
      {
        question: "Do I need to be a large company to use your AI services?",
        answer: "Not at all. We specialize in making powerful AI and automation accessible and affordable, even for Small to Medium-sized Enterprises (SMEs). We focus on practical, applied AI solutions that deliver immediate value and a clear ROI, such as setting up your first AI agent or automated workflow in less than an hour during a <a href='/contact' class='text-primary hover:underline'>consultation</a>."
      },
      {
        question: "How do you address the security risks of integrating AI into my operations?",
        answer: "We view AI security as a fundamental part of data security. Our approach includes: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Data Governance:</strong> Managing what data is accessed by AI tools (especially Large Language Models), and ensuring proper permissions and control to prevent leaks of sensitive information.</li><li><strong>Secure Development:</strong> Following secure AI development guidelines and conducting risk assessments for all new AI/ML systems.</li><li><strong>Mitigation:</strong> Protecting against AI-specific threats like 'data poisoning' or 'jailbreaking,' and ensuring that human responsibility and oversight remain in the loop.</li></ul>"
      }
    ]
  },
  {
    category: "Cybersecurity & Cloud Solutions",
    icon: <Shield className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "What is Managed Cybersecurity, and why do I need it?",
        answer: "Managed Cybersecurity is an outsourced service where we take full responsibility for protecting your digital assets 24/7. It's essential because cyber threats are complex and relentless. Our service provides: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Continuous Monitoring:</strong> Using advanced technologies (often AI-powered) for real-time threat detection and response.</li><li><strong>Proactive Measures:</strong> Including vulnerability assessments, penetration testing, and security architecture design (firewalls, IDS).</li><li><strong>Incident Response:</strong> Immediate action to block threats, isolate compromised systems, and provide recovery services in the event of an attack.</li></ul>"
      },
      {
        question: "How can moving to the cloud improve my security?",
        answer: "Migrating to a Managed Cloud environment significantly enhances security compared to managing everything on-premises. Cloud providers invest heavily in world-class security infrastructure. Our managed cloud services provide: <ul class='list-disc list-inside space-y-2 mt-2'><li><strong>Built-in Security:</strong> Enterprise-grade security protocols, encryption, and compliance features.</li><li><strong>Scalability & Resilience:</strong> Redundancy, frequent backups, and a clear disaster recovery plan to prevent data loss and minimize downtime.</li><li><strong>Automation:</strong> Automating routine security tasks like patching and monitoring, reducing the burden on your team.</li></ul>"
      },
      {
        question: "What happens if I want to switch to another provider later on?",
        answer: "We believe in making our partnerships mutually beneficial and long-term, but we also ensure you maintain control of your data. We design our solutions to avoid vendor lock-in where possible. We will provide a clear exit strategy that ensures you have full access to your data, a comprehensive data migration plan, and support for the transition to a new environment, should you ever choose to leave."
      }
    ]
  },
  {
    category: "Cloud Migration & FinOps",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "What is 'Cloud Migration'?",
        answer: "Cloud Migration is the process of moving an organization's digital assets—such as data, applications, and IT resources—from on-premises infrastructure or a legacy system to a cloud environment (e.g., AWS, Azure, GCP), or from one cloud platform to another."
      },
      {
        question: "What are the common strategies for cloud migration (the 6 R's)?",
        answer: "We utilize the 6 R's strategy framework for migration planning: Rehost (Lift-and-Shift), Replatform (optimization with minor changes), Refactor/Rearchitect (major changes for cloud-native benefits), Repurchase (move to a SaaS solution), Retire (decommissioning), and Retain (keeping some workloads on-premise)."
      },
      {
        question: "What is FinOps?",
        answer: "FinOps (Cloud Financial Operations) is a cultural practice that brings financial accountability to the variable spending model of the cloud. It combines systems, best practices, and culture to help teams manage their cloud costs, maximize business value, and increase agility."
      },
      {
        question: "How do your FinOps services help control costs?",
        answer: "Our FinOps services provide Cloud Cost Management and Cloud Cost Estimation tools. We track and analyze how, where, and when your cloud budget is being spent, identifying waste, optimizing resource utilization (e.g., utilizing reserved instances), and creating accurate future spending forecasts."
      },
      {
        question: "What are the key risks associated with cloud migration?",
        answer: "Key risks include potential downtime during the final cutover, the possibility of data loss or exposure if security protocols are misconfigured, and compatibility issues with legacy applications that may require extensive refactoring."
      }
    ]
  },
  {
    category: "GDPR & Data Compliance",
    icon: <FileText className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "What is the GDPR?",
        answer: "The General Data Protection Regulation (GDPR) is an EU law that governs data protection and privacy for all individuals within the European Union and the European Economic Area. It imposes strict rules on how organizations must safeguard personal data."
      },
      {
        question: "Who must comply with the GDPR?",
        answer: "Any organization that processes the personal data of people in the EU must comply, regardless of where the organization itself is based. This includes data controllers (who determine processing purposes) and data processors (who process data on their behalf)."
      },
      {
        question: "What is the difference between a Data Controller and a Data Processor?",
        answer: "The Data Controller (you, the client) determines why and how personal data is processed. The Data Processor (us, the service provider) processes the data only on the documented instructions of the Controller."
      },
      {
        question: "Do you provide a Data Processing Agreement (DPA)?",
        answer: "Yes. Before commencing any service that involves the processing of your users' personal data, we execute a comprehensive Data Processing Agreement (DPA) that contractually defines our obligations as the Data Processor under GDPR standards."
      },
      {
        question: "Does GDPR mandate the use of encryption?",
        answer: "While not explicitly mandatory in all cases, the GDPR requires organizations to implement 'appropriate technical and organizational measures' to secure personal data. Encryption is cited as a core example and is generally considered the most appropriate technical measure for securing data both in transit and at rest."
      }
    ]
  },
  {
    category: "Service Level Agreements (SLAs)",
    icon: <Server className="w-8 h-8 text-primary" />,
    questions: [
      {
        question: "What is a Service Level Agreement (SLA)?",
        answer: "An SLA is a formal, documented commitment between us and you that defines the services we will provide, the minimum expected level of performance (e.g., uptime, response times), how performance will be measured, and what remedies are provided if targets are missed."
      },
      {
        question: "What are the key measurable components of your SLAs?",
        answer: "Our SLAs focus on three key metrics: Response Time (time to acknowledge an incident), Resolution Time (time to restore service), and System Uptime (percentage of time critical systems are available). We also specify agreed-upon maintenance windows."
      },
      {
        question: "How do you define service priority levels for incident response?",
        answer: "Incidents are categorized based on business impact: P1 (Critical): Service is down, major business function affected. P2 (High): Service is degraded, significant but not total impact. P3 (Medium): Minor issue, service is usable but impaired. Each level has a corresponding guaranteed response and resolution time."
      },
      {
        question: "What are Service Credits?",
        answer: "Service Credits are financial remedies or penalties that the service provider must issue to the client if the agreed-upon SLA performance targets (such as uptime percentages) are not met within a given service period."
      },
      {
        question: "What types of SLAs do you offer?",
        answer: "We offer Customer-based SLAs (customized agreement with a single client), Service-based SLAs (same level of service for all users of a specific service, e.g., cloud hosting), and Multilevel SLAs (covering different service levels within an organization or across different infrastructure tiers)."
      }
    ]
  },
  {
    category: "Project & Development Process",
    icon: <BookUser className="w-8 h-8 text-primary" />,
    questions: [
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

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a question? Search for answers or browse by category.
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
            <Input 
                type="search"
                placeholder="Search questions..."
                className="w-full text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
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
  );
}

    