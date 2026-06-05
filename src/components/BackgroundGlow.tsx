export default function BackgroundGlow() {

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute left-[-10%] top-[-10%] h-125 w-125 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-125 w-125 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />

    </div>
  );
}