const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Builders, researchers, founders, creatives — anyone who wants to stay ahead of AI developments and connect with others doing the same.",
  },
  {
    question: "How is this different from free Discord servers?",
    answer:
      "Quality over quantity. Paid membership filters for serious people. No spam, no self-promotion, just focused discussion and real insights.",
  },
  {
    question: "What happens after I join?",
    answer:
      "You'll get immediate access to the Discord server. Introduce yourself, browse the resource library, and jump into ongoing discussions.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Monthly subscriptions can be cancelled anytime. Annual plans can be cancelled for a prorated refund within 30 days.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Not currently. We believe in the value of the community. If it's not for you, cancel within your first month.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            Questions?
          </h2>
          <p className="text-muted">Quick answers to common questions.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-border pb-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted mb-4">Still have questions?</p>
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
