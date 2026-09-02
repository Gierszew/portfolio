import Image from "next/image";

export default function Home() {
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
              <div>I love to create applications that people use</div>
              <div>Wenomeshinasama</div>
              <div>Tomaharbisau</div>
              <div>Wifenlof eser lifterbraun</div>
            </h1>
            <p className="bottom-text">I build commerce apps</p>
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
