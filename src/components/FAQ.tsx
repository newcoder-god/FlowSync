const faqs = [
  {
    question:
      "What is FlowSync?",
    answer:
      "FlowSync is an AI-powered SaaS platform for workflow management.",
  },
  {
    question:
      "Does FlowSync support AI automation?",
    answer:
      "Yes. FlowSync includes AI-powered productivity tools.",
  },
  {
    question:
      "Can I use FlowSync for teams?",
    answer:
      "Absolutely. FlowSync is built for collaborative teams.",
  },
];

export default function FAQ() {

  return (
    <section
      id="faq"
      className="px-6 py-28"
    >

      <div className="mx-auto max-w-4xl">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07]"
            >

              <h3 className="text-2xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-4 text-gray-400">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}