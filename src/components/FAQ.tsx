import JsonLd from "@/components/JsonLd";

const faqData = [
  {
    question: "What is dark web monitoring?",
    answer:
      "Dark web monitoring is a cybersecurity service that continuously scans hidden parts of the internet (dark web, deep web, forums, paste sites) to detect if your company's sensitive data, credentials, or information has been leaked, stolen, or is being discussed by threat actors.",
  },
  {
    question: "How does DarkThreat protect my organization?",
    answer:
      "DarkThreat provides 24/7 automated monitoring of dark web sources, forums, marketplaces, and paste sites. We alert you immediately when your domains, employee credentials, or company information appears in compromised databases or hacker discussions, allowing you to take action before a breach escalates.",
  },
  {
    question: "What types of threats can you detect?",
    answer:
      "We detect credential leaks (usernames/passwords), domain and subdomain exposures, data breaches, stolen corporate information, hacker chatter about your organization, phishing campaigns, ransomware preparations, and insider threat indicators across multiple dark web sources.",
  },
  {
    question: "How quickly will I be notified of a threat?",
    answer:
      "DarkThreat provides real-time alerts. When we detect your assets on the dark web, you receive immediate notifications via email and through our platform dashboard, typically within minutes of discovery, enabling rapid response to potential threats.",
  },
  {
    question: "Do I need technical expertise to use DarkThreat?",
    answer:
      "No technical expertise is required. Our platform features an intuitive dashboard with clear threat summaries, risk scores, and actionable recommendations. We provide detailed reports that are easy to understand for both technical teams and executive leadership.",
  },
  {
    question: "Can I try DarkThreat before purchasing?",
    answer:
      "Yes! We offer a 7-day free trial with full access to our monitoring capabilities. No credit card is required to start your trial. You'll get immediate visibility into any existing exposures and experience our real-time alerting system.",
  },
  {
    question: "What makes DarkThreat different from competitors?",
    answer:
      "DarkThreat combines advanced AI-powered scanning with human intelligence analysis, covers more dark web sources than most competitors, provides faster alert times, and offers an easy-to-use interface. Our enterprise plans include dedicated threat analyst support and custom intelligence feeds.",
  },
  {
    question: "Is my data secure with DarkThreat?",
    answer:
      "Absolutely. We use bank-level encryption for all data transmission and storage. We never store your actual passwords or sensitive data - only cryptographic hashes for matching. Our infrastructure is SOC 2 compliant and undergoes regular security audits.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="py-20 px-6">
      <JsonLd data={faqJsonLd} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
            Frequently Asked <span className="glow-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about dark web monitoring</p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => (
            <details
              key={faq.question}
              className="border border-border rounded-xl bg-card/50 backdrop-blur-md hover:border-primary/50 transition-all duration-300"
            >
              <summary className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer list-none font-montserrat font-semibold text-foreground text-base md:text-lg">
                {faq.question}
              </summary>
              <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
