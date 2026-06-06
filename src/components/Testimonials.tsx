import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CISO",
    company: "Global Logistics Firm",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "DarkThreat helped us take control. Now we detect threats faster and respond smarter — everything just works together seamlessly."
  },
  {
    name: "Michael Rodriguez",
    role: "IT Risk Manager",
    company: "Healthcare Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "Audits used to stress us out. With DarkThreat's monitoring tools, compliance feels manageable and our security posture is genuinely stronger."
  },
  {
    name: "David Thompson",
    role: "Security Analyst",
    company: "Technology Organization",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "We caught credential exposures we didn't even know existed. DarkThreat gave us visibility, control, and genuine peace of mind."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
            <span className="glow-text">Our Customers</span> Say It Best
          </h2>
          <p className="text-lg text-muted-foreground">Trusted by security leaders across industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Profile */}
                  <div className="flex flex-col items-center gap-3 pt-2 border-t border-border w-full">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}, ${testimonial.role}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

