import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah L.",
    title: "CEO of FashionForward",
    quote: "SYNC TECH transformed our e-commerce presence. Their expertise in web development and dedication to our project was outstanding. We saw a significant increase in sales and customer engagement.",
    avatar: "/testimonial-sarah.png",
    avatarHint: "woman portrait"
  },
  {
    name: "Michael B.",
    title: "Marketing Director at Creative Co.",
    quote: "The AI-powered dashboard they built for us is a game-changer. It's intuitive, powerful, and has saved us countless hours on reporting. The team was professional and a pleasure to work with.",
    avatar: "/testimonial-michael.png",
    avatarHint: "man portrait"
  },
  {
    name: "Jessica T.",
    title: "Founder of FitLife",
    quote: "From concept to launch, SYNC TECH was the perfect partner for our mobile app. They understood our vision and delivered a product that has exceeded all our expectations. Highly recommended!",
    avatar: "/testimonial-jessica.png",
    avatarHint: "woman smiling"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Real stories from businesses we've helped to succeed.
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
