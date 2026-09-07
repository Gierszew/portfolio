"use client"

import { MouseEvent, useEffect, useRef, useState } from "react";
import ProjectFollow from "./components/ProjectFollow";
import Header from "./components/Header";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [])

  return (
    <>
      <main className="flex flex-col flex-1 items-center justify-center font-sans">
        <div className="flex flex-row justify-center w-screen">
          <div className="flex flex-col w-xl">
            <div className="flex">
              <div className="pulsating-circle"></div>
              <div>Available???</div>
            </div>
            <h1 className={`main-text ${visible? "visible" : ""}`}>
              <div>I love to create applications </div>
              <div>that people use</div>
            </h1>
            <p className="bottom-text mt-11">
              I build full stack
              <em> applications </em> and
              <em> web applications </em>

              that people use
            </p>
            <div
              className="relative flex flex-row">
              <ProjectFollow />
              <div>
                <a>
                  <button>

                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-xl">
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