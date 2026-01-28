const faqs = [
  {
    question: "What differentiates this from public AI news?",
    answer:
      "Curation and community. We don't aggregate—we filter. 500+ members discussing, testing, validating what actually works. The connections are worth the price alone.",
  },
  {
    question: "How has the community evolved since 2021?",
    answer:
      "Same members, sharper focus. We've always been about discovering digital technology. Now we're focused on AI—the most consequential technology of our lifetime.",
  },
  {
    question: "What happens after I join?",
    answer:
      "Immediate Discord access. Introduce yourself, browse the resource library, join ongoing discussions. Weekly calls begin next Monday.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Yes. Annual plans refunded prorated within 30 days. No questions asked.",
  },
  {
    question: "Is there a trial?",
    answer:
      "No. Serious members create better communities. If it's not for you, cancel within 30 days for full refund.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 px-6 border-t border-wood/30 relative">
      {/* Decorative columns */}
      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-amber/10 via-transparent to-amber/10" />
      <div className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-amber/10 via-transparent to-amber/10" />
      
      <div className="max-w-2xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-amber/30" />
          <span className="text-amber/70 font-mono text-xs tracking-[0.3em] uppercase">Questions</span>
          <div className="h-px w-12 bg-amber/30" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group relative">
              {/* Hover arch effect */}
              <div className="absolute -inset-2 border border-amber/0 group-hover:border-amber/10 rounded-t-[20px] rounded-b-sm transition-all" />
              
              <div className="glass p-6 rounded-t-[16px] rounded-b-sm border-t border-wood group-hover:border-amber/20 transition-colors relative">
                {/* Side light strip */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber/30 via-amber/10 to-amber/30 rounded-l" />
                
                <h3 className="font-serif text-cream mb-3 text-lg">{faq.question}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact - like a door plate */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="h-px w-16 bg-amber/20 mb-4" />
            <p className="text-foreground-muted/40 text-xs font-mono mb-3 tracking-wider">ADDITIONAL INQUIRIES</p>
            <a
              href="mailto:hello@shinyobject.club"
              className="text-amber hover:text-amber-bright transition-colors font-mono text-sm tracking-wider border-b border-amber/30 pb-1 hover:border-amber"
            >
              hello@shinyobject.club
            </a>
            <div className="h-px w-16 bg-amber/20 mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
