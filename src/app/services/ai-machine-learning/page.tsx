
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Bot, BrainCircuit, Cloud, Cpu, GanttChartSquare, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "AI & Machine Learning Consulting Services Ireland | Sync Tech",
  description: "Sync Tech offers cutting-edge AI and ML solutions in Ireland. Drive innovation, enhance efficiency, and unlock your business potential with our expert consulting.",
};

const technicalDisciplines = [
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: "Deep Learning",
        description: "Mimic human cognitive functions to build sophisticated models for predictive analytics and advanced automation."
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "Natural Language Processing (NLP)",
        description: "Shape customer interactions and derive insights from feedback using chatbots and automated text analysis."
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "Computer Vision",
        description: "Automate visual data processing to enhance productivity in sectors like manufacturing and security."
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "MLOps",
        description: "Manage the entire machine learning lifecycle to ensure models are robust, scalable, and continuously optimized."
    }
];

export default function AiMlPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">AI & Machine Learning Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Harness the power of AI to drive innovation, enhance operational efficiency, and unlock your business's full potential. Sync Tech delivers tailored AI solutions for enterprises in Ireland.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free AI Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AI/ML Matters Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Why AI & ML Matter for Your Business</h2>
                  <p className="mt-4 text-muted-foreground text-lg">As modern enterprises grapple with vast amounts of data and complex decisions, AI and ML have become critical tools. They empower companies to automate tasks, derive actionable insights, and enhance productivity, providing a robust foundation for sustainable growth.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Automate and Streamline</h3>
                              <p className="text-muted-foreground">Focus on business automation AI to reduce human error and free up your team for strategic work.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Data-Driven Insights</h3>
                              <p className="text-muted-foreground">Cultivate a culture of informed decision-making by leveraging predictive analytics and insights from your existing data.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="/aiml.png" 
                    alt="Abstract visualization of Artificial Intelligence and Machine Learning"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="artificial intelligence brain"
                />
              </div>
          </div>
      </section>

      {/* Technical Disciplines Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Technical AI & ML Expertise</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our services cover several key disciplines within the AI and Machine Learning landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalDisciplines.map((service) => (
              <Card key={service.title} className="text-center p-6 bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  {service.icon}
                  <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Cloud & Platform Integration Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative order-last md:order-first">
                    <Image 
                        src="/cloud.png" 
                        alt="Cloud platforms integration"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="cloud platforms"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">Robust Cloud & Platform Integration</h2>
                    <p className="mt-4 text-muted-foreground">The deployment of AI solutions is powered by robust cloud infrastructure. We leverage leading platforms like <span className="font-semibold text-primary">AWS AI</span>, <span className="font-semibold text-primary">Azure Machine Learning</span>, and <span className="font-semibold text-primary">Google Cloud AI</span> to implement scalable solutions quickly and efficiently. By using managed ML services and real-time inference, we provide a significant competitive advantage.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business with AI?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  Partner with Sync Tech today and unlock the power of AI and Machine Learning for your enterprise. Let’s innovate together!
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
