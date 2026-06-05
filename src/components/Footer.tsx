export default function Footer() {

  return (
    <footer className="border-t border-white/10 px-6 py-10">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>

          <h2 className="text-2xl font-bold">
            FlowSync
          </h2>

          <p className="mt-2 text-gray-400">
            AI-powered workflow platform.
          </p>

        </div>

        <div className="flex gap-6 text-gray-400">

          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="transition hover:text-white"
          >
            FAQ
          </a>

        </div>

      </div>

    </footer>
  );
}