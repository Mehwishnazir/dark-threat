const COMPANIES = [
  'Fortune 500 Financial Group',
  'Global Healthcare Network',
  'Enterprise Tech Corp',
  'National Law Partners',
  'Apex Retail Group',
  'Federal Systems LLC',
  'SecureLogistics Inc.',
  'MedData Alliance',
];

export default function TrustBar() {
  const items = [...COMPANIES, ...COMPANIES]; // duplicate for seamless marquee
  return (
    <section className="py-10 px-6 border-y border-border bg-background/60">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by security teams across industries — identities kept confidential
        </p>
        <div
          className="relative overflow-hidden"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
          aria-hidden="true"
        >
          <div className="flex gap-8 marquee-track w-max">
            {items.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="px-5 py-2.5 border border-border rounded-lg text-muted-foreground
                           font-montserrat font-semibold tracking-wide text-xs whitespace-nowrap
                           hover:text-primary hover:border-primary/40 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
