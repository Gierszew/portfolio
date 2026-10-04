import Link from "next/link";
import { useRef, MouseEvent } from "react";

export default function ProjectFollow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const followRef = useRef<HTMLDivElement>(null);

    const followCursorPosition = function (e: MouseEvent) {
        e.preventDefault();
        const container = containerRef.current;
        const follow = followRef.current;

        if (!container || !follow) return;

        const rect = container.getBoundingClientRect();

        const isInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

        if (isInside) {
            console.log("I am in");
            const midX = (rect.right - rect.left) / 2;
            const midY = (rect.bottom - rect.top) / 2;
            console.log(midY);
            const x = (rect.right - e.clientX) - midX;
            const y = (rect.bottom - e.clientY) - midY;
            follow.style.left = `${-x * 1 / 4}px`;
            follow.style.top = `${-y * 1 / 4}px`;
        }
    }

    const backInPosition = function (e: MouseEvent) {
        const follow = followRef.current;

        if (!follow) return;

        follow.style.left = `0px`;
        follow.style.top = `0px`;
    }

    return (
        <div
            className="w-30 h-11.25"
            onMouseMove={(e) => followCursorPosition(e)}
            onMouseLeave={(e) => backInPosition(e)}
            ref={containerRef}>
            <div
                className="flex justify-center items-center follow"
                ref={followRef}>
                <Link href="/projects">
                    My projects
                </Link>
            </div>
        </div>
    )
}