const COMPANIES = ['NORTHWIND', 'ACME CORP', 'CONTOSO', 'INITECH', 'UMBRELLA', 'STARK IND.', 'WAYNE CO', 'CYBERDYNE'];

export default function TrustBar() {
  const items = [...COMPANIES, ...COMPANIES]; // duplicate for seamless marquee
  return (
    <section className="py-12 px-6 border-y border-border bg-background/60">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6 reveal">
          Trusted by security teams at
        </p>
        <div
          className="relative overflow-hidden"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-12 marquee-track w-max">
            {items.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="px-6 py-3 border border-border rounded-md text-muted-foreground
                           font-montserrat font-bold tracking-widest text-sm whitespace-nowrap
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
