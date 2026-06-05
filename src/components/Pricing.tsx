import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: [
      "Basic analytics",
      "Task management",
      "AI assistant",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Advanced analytics",
      "Unlimited tasks",
      "Priority AI",
    ],
  },
];

export default function Pricing() {

  return (
    <section
      id="pricing"
      className="px-6 py-28"
    >

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Pricing
          </h2>

          <p className="mt-4 text-gray-400">
            Flexible pricing for modern teams.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl"
            >

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4 text-5xl font-bold">
                {plan.price}
                <span className="text-lg text-gray-400">
                  /month
                </span>
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">

                {plan.features.map((feature) => (
                  <li key={feature}>
                    • {feature}
                  </li>
                ))}

              </ul>

              <Link
                href="/signup"
                className="mt-8 inline-block rounded-2xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
              >
                Get Started
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}