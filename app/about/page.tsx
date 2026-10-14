import Link from "next/link";

export default function AboutPage() {
  const timeline = [
    {
      year: "2025",
      title: "Started CS at Gdańsk Tech",
      desc: "",
    }
  ];

  const skills = [
    { group: "Languages",               items: ["TypeScript", "JavaScript", "Python", "C++"] },
    { group: "Frontend",                items: ["React", "Next.js", "Tailwind"] },
    { group: "Backend",                 items: ["Node.js", "PostgreSQL", "REST", "MySQL", "Express.js"] },
    { group: "Tools",                   items: ["Git", "Docker", "Vercel", "Linux"] },
    { group: "Graphics Programming",    items: ["C++", "OpenGL"]}
  ];

  return (
    <main className="flex flex-col w-full pt-32 pb-24 font-sans">
      <section className="w-full px-6">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-green-400">01. about</span>
          <h1 className="mt-3 font-mono text-4xl md:text-5xl text-zinc-100 leading-tight">
            Hey, I'm Wiktor<span className="text-green-400">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Full-stack developer and 2nd year Computer Science student at Gdańsk University of Technology.
            I build things for the web - from small experiments to full-blown apps.
            Currently I am learning OpenGL for graphics development.
          </p>
        </div>
      </section>

      <section className="w-full px-6 mt-20">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/3 w-full">
            <h2 className="font-mono text-sm text-zinc-500 uppercase tracking-widest">
              quick facts
            </h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-sm">
              {[
                ["Location",  "Gdańsk, Poland"],
                ["Age",       "21"],
                ["Focus",     "Full-stack / Web / Graphics Programmer"],
                ["Languages", "PL / EN"],
                ["Status",    "Open to internships"],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">{label}</span>
                  <span className="text-zinc-200">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
              <Link
                href="mailto:giewik00@gmail.com"
                className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-green-300 transition-all hover:border-green-400/60 hover:bg-green-400/20"
              >
                mail me →
              </Link>
              <Link
                href="https://github.com/gierszew"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10"
              >
                github ↗
              </Link>
              <Link
                href="https://www.linkedin.com/in/wiktor-gierszewski-3a6753429/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10"
              >
                linkedin ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 mt-32">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-green-400">02. journey</span>
          <h2 className="mt-2 font-mono text-2xl md:text-3xl text-zinc-100">
            How I got here
          </h2>

          <ol className="mt-12 relative border-l border-white/10 ml-3">
            {timeline.map((item) => (
              <li key={item.year} className="relative pl-8 pb-12 last:pb-0">
                <span className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                <span className="font-mono text-xs text-green-400">{item.year}</span>
                <h3 className="mt-1 font-mono text-lg text-zinc-100">{item.title}</h3>
                <p className="mt-2 max-w-lg text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full px-6 mt-32 pt-16 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-green-400">03. skills</span>
          <h2 className="mt-2 font-mono text-2xl md:text-3xl text-zinc-100">
            Tech I work with
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((s) => (
              <div
                key={s.group}
                className="rounded-xl border border-white/10 bg-white/2 p-6 transition-all hover:border-green-400/30 hover:bg-white/4"
              >
                <h3 className="font-mono text-sm text-green-400 uppercase tracking-widest">
                  {s.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}