import Image from "next/image";
import Link from "next/link";

type ProjectMiniProps = {
  title: string;
  image: string;
  imageAlt: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  year?: string;
  index?: string;
};

export default function ProjectMini({
  title,
  image,
  imageAlt,
  tags = [],
  liveUrl,
  repoUrl,
  year,
  index,
}: ProjectMiniProps) {
  const href = liveUrl || repoUrl || "#";

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/2 transition-all duration-300 hover:border-green-400/30 hover:bg-white/4 hover:shadow-[0_0_40px_-20px_#4ade80]"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {index && (
          <span className="absolute left-3 top-3 font-mono text-[10px] text-green-400/80">
            {index}.
          </span>
        )}
        {year && (
          <span className="absolute right-3 top-3 font-mono text-[10px] text-zinc-400">
            {year}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-mono text-sm text-zinc-100 transition-colors group-hover:text-green-300">
            {title}
          </h3>
          <span className="font-mono text-xs text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green-400">
            ↗
          </span>
        </div>

        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
              >
                {tag}
              </li>
            ))}
            {tags.length > 3 && (
              <li className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
                +{tags.length - 3}
              </li>
            )}
          </ul>
        )}
      </div>
    </Link>
  );
}