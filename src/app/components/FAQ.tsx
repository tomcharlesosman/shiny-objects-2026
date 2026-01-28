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
    <section className="py-32 px-6 border-t border-border relative">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-copper font-mono text-xs tracking-wider">FAQ</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass p-6 rounded-sm border-t border-stone hover:border-copper/30 transition-colors">
              <h3 className="font-serif text-marble mb-2">{faq.question}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground-muted/40 text-xs font-mono mb-4">ADDITIONAL QUESTIONS</p>
          <a
            href="mailto:hello@shinyobject.club"
            className="text-copper hover:text-copper-bright transition-colors font-mono text-sm"
          >
            hello@shinyobject.club
          </a>
        </div>
      </div>
    </section>
  );
}
