export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold">
            FlowSync
          </h2>

          <p className="mt-4 max-w-sm text-gray-400">
            AI-powered productivity platform helping
            teams automate workflows and scale faster.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm text-gray-400">

          <a
            href="#"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* Social */}
        <div className="flex gap-4">

          <div className="rounded-full border border-white/10 bg-white/5 p-3">
            X
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 p-3">
            GH
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 p-3">
            IN
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        © 2026 FlowSync. All rights reserved.
      </div>

    </footer>
  );
}