
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CISO, TechCorp",
      rating: 5,
      text: "DarkThreat has revolutionized our threat intelligence capabilities. We've prevented three major data breaches this year alone thanks to their early warning system.",
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "Security Manager, FinanceFirst",
      rating: 5,
      text: "The analyst-enriched alerts are game-changing. No more false positives - just actionable intelligence that actually matters to our business.",
      company: "FinanceFirst"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, HealthSecure",
      rating: 5,
      text: "Implementation was seamless and the API integration with our SIEM took less than a day. The dark web coverage is unmatched.",
      company: "HealthSecure"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-threat-dark to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
            Trusted by Security Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers say about DarkThreat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="threat-card group">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    <div className="text-xs text-primary">{review.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
