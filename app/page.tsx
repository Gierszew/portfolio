"use client"

import Image from "next/image";
import { MouseEvent, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const followCursorPosition = function (e: MouseEvent) {
    const container = containerRef.current;
    console.log(container);
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const clampedX = Math.min(1, Math.max(0, x));
    const clampedY = Math.min(1, Math.max(0, y));

    container.style.setProperty("--x", clampedX.toString());
    container.style.setProperty("--y", clampedY.toString());

    console.log(x);
  }  
  return (
    <>
      <header>
        header
      </header>
      <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
        <div className="flex flex-row justify-center  w-screen">
          <div className="flex flex-col w-xl">
            <div className="flex">
              <div className="pulsating-circle"></div>
              <div>Available???</div>
            </div>
            <h1 className="main-text">
              <div>I love to create applications </div>
              <div>that people use</div>
            </h1>
            <p className="bottom-text mt-11">
              I build full stack
              <em> applications </em> and
              <em> web applications </em>
              
              that people use
            </p>
            <div className="relative flex flex-row">
              <div onMouseMove={(e) => followCursorPosition(e)} className="follow">
                <a>
                  ss
                </a>
              </div>
              <div>
                <a>
                  <button>

                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex  w-xl">
            <h1>
              [dopamine]
            </h1>
          </div>
        </div>
        <div className="">

        </div>
        <div className="">

        </div>
      </main>
    </>
  );
}