import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

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
    quote: "Cyber Silo helped us take control. Now we detect threats faster and respond smarter, everything just works together."
  },
  {
    name: "Michael Rodriguez",
    role: "IT Risk Manager",
    company: "Healthcare Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "Audits used to stress us out. With Cyber Silo's tools, compliance feels manageable and security feels stronger."
  },
  {
    name: "David Thompson",
    role: "Security Analyst",
    company: "Healthcare Organization",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "We caught risks we didn't even know existed. Cyber Silo gave us visibility, control, and peace of mind."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-montserrat font-bold text-foreground mb-4">
            <span className="glow-text">Our Customers</span> Say It Best
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground text-lg">
                      {testimonial.role}, {testimonial.company}
                    </h3>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </p>
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
