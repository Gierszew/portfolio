export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 py-8">
            <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-4 px-6 font-mono text-xs text-zinc-500">
                <span>© {new Date().getFullYear()} Wiktor Gierszewski</span>
                <span>built with Next.js</span>
            </div>
        </footer>
    )
}