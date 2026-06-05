import {
  Sparkles,
  BarChart3,
  CheckSquare,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Automation",
    description:
      "Automate repetitive workflows using AI-powered tools.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track team performance with real-time insights.",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description:
      "Manage workflows visually with drag-and-drop Kanban boards.",
  },
];

export default function Features() {

  return (
    <section
      id="features"
      className="px-6 py-28"
    >

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="mt-4 text-gray-400">
            Everything your team needs to scale productivity.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.07] p-8 backdrop-blur-xl"
              >

                <div className="mb-6 w-fit rounded-2xl bg-purple-500/20 p-4 text-purple-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}