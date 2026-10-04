import Link from "next/link";

export default function ContactPage() {
  const channels = [
    {
      label: "Email",
      value: "hi@gierszew.dev",
      href: "mailto:hi@gierszew.dev",
      desc: "Best way to reach me. I reply within 24h.",
      tag: "01",
    },
    {
      label: "GitHub",
      value: "@gierszew",
      href: "https://github.com/gierszew",
      desc: "Where all the code lives. WIPs included.",
      tag: "02",
    },
    {
      label: "LinkedIn",
      value: "in/gierszew",
      href: "https://www.linkedin.com/in/wiktor-gierszewski-3a6753429/",
      desc: "For professional stuff. And recommendations.",
      tag: "03",
    },
    {
      label: "Discord",
      value: "@gierszew",
      href: "https://discord.com/users/364038019742695424",
      desc: "Second best way to contact me.",
      tag: "04",
    },
  ];

  return (
    <main className="flex flex-col w-full pt-32 pb-24 font-sans">
      <section className="w-full px-6">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-green-400">01. contact</span>
          <h1 className="mt-3 font-mono text-4xl md:text-5xl text-zinc-100 leading-tight">
            Let's talk<span className="text-green-400">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hi –
            my inbox is always open. I'll get back to you as soon as I can.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 font-mono text-xs text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Currently available for new opportunities
          </div>
        </div>
      </section>

      <section className="w-full px-6 mt-24">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-green-400">02. channels</span>
          <h2 className="mt-2 mb-12 font-mono text-2xl md:text-3xl text-zinc-100">
            Where to find me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-xl border border-white/10 bg-white/2 p-6 transition-all hover:border-green-400/30 hover:bg-white/4 hover:shadow-[0_0_40px_-20px_#4ade80]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-green-400/70">
                    {c.tag}.
                  </span>
                  <span className="font-mono text-xs text-zinc-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-400">
                    ↗
                  </span>
                </div>
                <h3 className="mt-4 font-mono text-lg text-zinc-100">{c.label}</h3>
                <p className="mt-1 font-mono text-sm text-green-300">{c.value}</p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 mt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-zinc-100">
            Or just say hi<span className="text-green-400">.</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Really. I don't bite.
          </p>
          <a
            href="mailto:giewik00@gmail.com"
            className="mt-8 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-6 py-3 font-mono text-sm text-green-300 transition-all hover:border-green-400/60 hover:bg-green-400/20 hover:shadow-[0_0_30px_-6px_#4ade80]"
          >
            Hi Gierszew →
          </a>
        </div>
      </section>
    </main>
  );
}