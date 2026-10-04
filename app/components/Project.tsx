import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  year?: string;
  index?: string;
  reverse?: boolean;   // true = obrazek po prawej
};

export default function Project({
  title,
  description,
  image,
  imageAlt,
  tags,
  liveUrl,
  repoUrl,
  year,
  index,
  reverse = false,
}: ProjectProps) {
  return (
    <article
      className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm transition-all duration-500 group-hover:border-green-400/30 group-hover:shadow-[0_0_40px_-12px_#4ade80]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={image == "/projects-images/project4.png" ? "" : "object-cover transition-transform duration-700 group-hover:scale-105"}
        />
        {index && (
          <span className="absolute left-4 top-4 font-mono text-xs text-green-400/80">
            {index}.
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center">
        {year && (
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {year}
          </span>
        )}

        <h2 className="mt-2 font-mono text-2xl md:text-3xl font-medium text-zinc-100 transition-colors group-hover:text-green-300">
          {title}
        </h2>

        <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-400 max-w-md">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-400 transition-colors group-hover:border-green-400/20 group-hover:text-green-300/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(liveUrl || repoUrl) && (
          <div className="mt-8 flex items-center gap-5 font-mono text-xs">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-green-300"
              >
                <span className="relative">
                  live
                  <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-green-400 transition-transform duration-300 group-hover/link:scale-x-100" />
                </span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                  ↗
                </span>
              </Link>
            )}

            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-green-300"
              >
                <span className="relative">
                  code
                  <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-green-400 transition-transform duration-300 group-hover/link:scale-x-100" />
                </span>
                <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                  ↗
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}