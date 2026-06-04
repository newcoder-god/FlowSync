export default function DashboardPage() {
  return (
    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Dashboard Overview
        </h1>

        <p className="mt-4 text-gray-400">
          Welcome back to FlowSync.
        </p>

      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Revenue
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            $48.2K
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Active Users
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            12,430
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Automation Rate
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            98%
          </h3>
        </div>

      </div>

    </div>
  );
}