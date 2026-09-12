"use client";

import { useEffect, useState } from "react";

type Line = {
    prompt?: string;
    text: string;
    color?: string;
    delayAfter?: number;
}

const LINES: Line[] = [
    {
        prompt: "$", text: "whoami", delayAfter: 400
    },
    {
        text: "Wiktor Gierszewski aka Gierszew", color: "#a1a1aa"
    },
    {
        text: "2nd year student @ Gdańsk University of Technology", color: "#a1a1aa", delayAfter: 600
    },
    {
        prompt: "$", text: "cat stack.json", delayAfter: 400
    },
    {
        text: '{ "react", "next.js", "typescript", "node" }', color: "#4ade80"
    },
    {
        prompt: "$", text: "./status.sh", delayAfter: 400
    },
    {
        text: "✓ available for work", color: "#4ade80"
    }
];

export default function Terminal() {
    const [renderedLines, setRenderedLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= LINES.length) return;

        const line = LINES[lineIndex];
        const fullText = (line.prompt ? line.prompt + " " : "") + line.text;

        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setCurrentLine(fullText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 40);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setRenderedLines((prev) => [...prev, fullText]);
                setCurrentLine("");
                setCharIndex(0);
                setLineIndex(lineIndex + 1);
            }, line.delayAfter ?? 300);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, lineIndex]);
    
    const activeColor = LINES[lineIndex]?.color;
    const activePrompt = LINES[lineIndex]?.prompt;

    return(
        <div className="terminal-panel">
            <div className="terminal">
                <div className="terminal-header">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                    <h3>~:bash</h3>
                </div>
                <div className="terminal-body">
                    
                </div>
            </div>
        </div>
    )
}