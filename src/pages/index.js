import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import JoinAlterYouthRevolution from "@/components/AlterYouthJoinForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`items-center justify-items-center min-h-[200vh]`}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Navbar />
        <div
          className="bg-cover bg-center w-full h-[85vh] "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0)), url("hero_pc.jpg")`,
          }}
        >
          <div className=" h-full flex max-w-screen-xl justify-between items-center px-24 mx-auto">
            <div className="flex flex-col h-full justify-center items-start text-white">
              <h1 className="text-6xl font-bold">
                Start your
                <br />
                scholarship
              </h1>
              <h3 className="text-lg pt-5">
                Directly for students in Government Primary
                <br />
                Schools throughout Bangladesh
              </h3>
            </div>
            <JoinAlterYouthRevolution />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
