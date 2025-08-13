
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah L.",
    title: "CEO of FashionForward",
    quote: "SYNC TECH delivered a stunning website that exceeded our expectations, all within our budget. Their commitment to quality and value is unmatched.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "business woman"
  },
  {
    name: "Michael B.",
    title: "Director at Creative Co.",
    quote: "The team provided a high-end AI solution at a fraction of the cost of other agencies. The ROI has been phenomenal. Highly recommended for their quality and affordability.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man professional"
  },
  {
    name: "Jessica T.",
    title: "Founder of FitLife",
    quote: "They built our mobile app on time and on budget, with a level of quality we didn't think was possible at this price point. A fantastic partner to work with.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "smiling woman"
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="testimonials"
      ref={ref}
      className={cn(
        "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Client Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Hear from businesses who have experienced the SYNC TECH difference: top-tier results and exceptional value.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-background">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                           <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
