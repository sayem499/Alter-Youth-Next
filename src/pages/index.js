import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

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
    <div
      className={`items-center justify-items-center min-h-[200vh]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Navbar/>
        <div
          className="bg-cover bg-center w-full h-[85vh]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0)), url("hero_pc.jpg")`
          }}
        >
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
