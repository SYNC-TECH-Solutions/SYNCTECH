
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    title: "CEO of FashionForward",
    quote: "SYNC TECH delivered a stunning website that exceeded our expectations, all within our budget. Their commitment to quality and value is unmatched.",
    avatar: "/STreview.png",
  },
  {
    name: "Michael B.",
    title: "Director at Creative Co.",
    quote: "The team provided a high-end AI solution at a fraction of the cost of other agencies. The ROI has been phenomenal. Highly recommended for their quality and affordability.",
    avatar: "/STreview.png",
  },
  {
    name: "Jessica T.",
    title: "Founder of FitLife",
    quote: "They built our mobile app on time and on budget, with a level of quality we didn't think was possible at this price point. A fantastic partner to work with.",
    avatar: "/STreview.png",
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
        "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Client Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Hear from businesses who have experienced the SYNC TECH difference: top-tier results and exceptional value.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-2 sm:p-4 h-full">
                  <Card className="bg-secondary h-full flex flex-col justify-between">
                    <CardContent className="p-6">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                        </div>
                      <p className="text-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex items-center p-6 pt-0">
                        <Avatar className="h-12 w-12 mr-4">
                           <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex -left-4 md:-left-12" />
          <CarouselNext className="hidden sm:inline-flex -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
