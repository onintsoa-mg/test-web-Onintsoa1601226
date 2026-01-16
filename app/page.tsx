import Image from "next/image";
import { HiArrowSmDown } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-4 py-20 text-center font-sans">
      {/* Top Badge */}
      <div className="group relative mb-10 transform transition-transform hover:scale-105 cursor-default">
        <div className="absolute -inset-[1px] rounded-full bg-emerald-400/60 blur-md opacity-90 transition duration-500"></div>
        <div className="relative flex items-center gap-4 rounded-full bg-white px-8 py-4 shadow-2xl md:px-14 md:py-6">
          <div className="flex items-center justify-center">
            <Image
              src="/2_Logo_Bulle.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform md:h-12 md:w-12"
            />
          </div>
          <p className="whitespace-nowrap text-lg font-bold tracking-tight text-black md:text-2xl">
            CRÉER UN SITE WEB <span className="underline decoration-black decoration-[3px] underline-offset-[6px]">VRAIMENT</span> UNIQUE
          </p>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
        Votre <span className="text-[#34d399]">site</span> doit{" "}
        <span className="text-[#34d399]">donner envie</span> de <br />
        <span className="text-[#34d399]">rester,</span> pas de{" "}
        <span className="relative inline-block">
          <span className="text-[#34d399]">revenir</span>{" "}
          <span className="text-white">en</span>
          <span className="absolute left-0 top-[45%] h-[4px] w-full bg-[#0a0a0a] md:top-[48%] md:h-[4px]"></span>
        </span>{" "}
        <br />
        <span className="relative inline-block">
          <span className="text-[#34d399]">arrière.</span>
          <span className="absolute left-0 top-[45%] h-[4px] w-full bg-[#0a0a0a] md:top-[48%] md:h-[4px]"></span>
        </span>
      </h1>

      {/* Sub-text */}
      <p className="mb-16 max-w-2xl text-base font-medium text-gray-400 md:text-lg">
        Design moderne, SEO solide, Suivi complet :<br className="hidden md:block" />
        <span className="md:mt-1 md:block">on construit un site qui retient vos visiteurs et vous apporte des résultats.</span>
      </p>

      {/* Buttons */}
      <div className="relative flex flex-col items-center justify-center gap-20 sm:flex-row sm:gap-6">
        {/* Left button with annotation */}
        <div className="relative">
          <button className="flex items-center gap-3 rounded-[18px] bg-gradient-to-r from-[#69d9a5] to-[#3caf85] px-10 py-4 text-xl font-bold text-[#1a1a1a] transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(60,175,133,0.3)] active:scale-95 shadow-md">
            <FaCalendarAlt className="h-7 w-7 text-[#1a1a1a]" />
            Prendre RDV
          </button>

          {/* Handwritten note */}
          <div className="absolute -bottom-14 -left-6 translate-x-[-10px] pointer-events-none select-none md:block">

            <Image
              src="/3_Un_Ptit_Click.png"
              alt="Un ptit click ?"
              width={140}
              height={70}
              className="opacity-90"
            />
          </div>
        </div>

        {/* Right button */}
        <button className="flex items-center gap-2 rounded-xl border border-[#34d399]/40 bg-[#121212] px-10 py-4 text-xl font-bold text-[#34d399] transition-all hover:bg-[#34d399]/10 hover:border-[#34d399] active:scale-95">
          Découvrir nos projets
          <HiArrowSmDown className="h-6 w-6" />
        </button>
      </div>
    </main>
  );
}
