"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectFollow from "./components/ProjectFollow";
import Terminal from "./components/Terminal";
import projects from "../projects.json";
import ProjectMini from "./components/ProjectMini";
import { Analytics } from "@vercel/analytics/next";
import { title } from "process";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const myProjects = projects.projects;

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="flex flex-col flex-1 font-sans">
      <section className="relative flex min-h-screen w-full items-center justify-center px-6 pt-32 pb-20">
        
        <div className="container mx-auto flex w-full max-w-6xl flex-col md:flex-row items-center gap-12">
          <div className="flex w-full md:w-1/2 flex-col">
            <h1 className={`main-text ${visible ? "visible" : ""}`}>
              <div>I love to create applications</div>
              <div>that people use</div>
            </h1>
            <p className="bottom-text mt-11">
              I build full stack
              <em> applications </em> and
              <em> web applications </em>
              that people use. 
            </p>
            <div className="relative mt-10 flex flex-row">
              <ProjectFollow />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 justify-center">
            <Terminal />
          </div>
        </div>
      </section>

      <section className="w-full py-16 border-y border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            stack I work with
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 opacity-60">
            {["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"].map((t) => (
              <span key={t} className="font-mono text-sm text-zinc-400">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row gap-12 px-6 items-center">
          <div className="md:w-2/3">
            <span className="font-mono text-xs text-green-400">01. Hello World!</span>
            <h2 className="mt-2 font-mono text-2xl md:text-3xl text-zinc-100">
              A bit about me
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              2nd year Computer Science student at Gdańsk University of Technology. I got into coding, because I like to interact in any way, shape or form with people.
              Some would say that I could be a psychologist or someone who can really interact with others. 
              But I like this type of interaction in which I can create virtual worlds for another person and interact with them from within.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-green-400">02. My amazing projects</span>
            </div>
            <Link href="/projects" className="font-mono text-xs text-zinc-400 hover:text-green-300 transition-colors">
              all projects →
            </Link>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProjects.map((project) => (
                <ProjectMini
                  key={project.index}
                  index={project.index}
                  year={project.year}
                  title={project.title}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
            </div>
        </div>
      </section>

      <section className="w-full py-24 border-y border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-mono text-xs text-green-400">03. Trust me with these</span>
          <h2 className="mt-2 mb-12 font-mono text-2xl md:text-3xl text-zinc-100">
            My expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind, React Native", icon: "◆" },
              { title: "Backend",  desc: "Node.js, PostgreSQL, REST APIs",     icon: "◈" },
              { title: "Tooling",  desc: "Git, Docker, Vercel, CI/CD",          icon: "◇" },
              { title: "Graphics Programmer", desc: "C++, OpenGL", icon: "◈" }
            ].map((s) => (
              <div key={s.title} className="group rounded-xl border border-white/10 bg-white/2 p-6 transition-all hover:border-green-400/30 hover:bg-white/4">
                <span className="text-green-400 text-xl">{s.icon}</span>
                <h3 className="mt-4 font-mono text-lg text-zinc-100">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-mono text-xs text-green-400">04. Let's keep in touch</span>
          <h2 className="mt-4 font-mono text-3xl md:text-4xl text-zinc-100">
            Let's build something together
          </h2>
          <p className="mt-4 text-zinc-400">
            Open to internships, freelance and collaboration.
          </p>
          <a
            href="mailto:giewik00@gmail.com"
            className="mt-8 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-6 py-3 font-mono text-sm text-green-300 transition-all hover:border-green-400/60 hover:bg-green-400/20 hover:shadow-[0_0_30px_-6px_#4ade80]"
          >
            mail me →
          </a>
        </div>
      </section>

      <Analytics />
    </main>
  );
}