const faqs = [
  {
    question: "What's the difference between this and free AI news?",
    answer:
      "Curation and community. We don't just aggregate — we filter. 500+ members discussing, testing, and sharing what actually works. Plus the connections you'll make are worth the price alone.",
  },
  {
    question: "How is this different from the 2021-2025 version?",
    answer:
      "Same community, sharper focus. We've always been about discovering digital tech. Now we're doubling down on AI — the most important technology of our lifetime. Same members, new mission.",
  },
  {
    question: "What happens after I join?",
    answer:
      "You get immediate Discord access. Introduce yourself, browse the resource library, and jump into the daily discussions. Weekly calls start next Monday.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Monthly plans cancel anytime. Annual plans can be refunded prorated within 30 days. No questions asked.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "No. We've found serious members create a better community. If it's not for you, cancel within 30 days for a full refund.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 px-6 border-t border-border bg-background-alt">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">FAQ</p>
          <h2 className="text-4xl font-bold mb-4">Questions?</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-border pb-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground-muted mb-4">Still have questions?</p>
          <a
            href="mailto:hello@shinyobject.club"
            className="text-accent hover:underline font-semibold"
          >
            hello@shinyobject.club
          </a>
        </div>
      </div>
    </section>
  );
}
