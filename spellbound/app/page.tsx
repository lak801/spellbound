'use client';

import Image from "next/image";
import Logo from '@/public/images/Spellbound_Logo.png';
import BoxArt from '@/public/images/BoxArt.png';
import Horizontal from '@/public/images/test-horizontal.png';
import { useState } from 'react';
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="font-sans text-white">
      <nav className="w-full h-12 bg-gradient-to-r from-[#823f85] to-[#447c82] flex items-center justify-center shadow-lg">
        <a href="#support" className="text-lg font-semibold tracking-wide hover:text-yellow-300 transition-colors duration-200">✨ Support Us Here ✨</a>
      </nav>
      <main className="bg-gradient-to-b from-[#000012] via-[#823f85] to-[#447c82] w-full flex flex-col items-center justify-center ">

        <header className="flex flex-col items-center justify-center relative">
          <Image
            src={Logo}
            alt="Spellbound Logo"
            className="absolute bg- top-15 md:w-[60%] lg:w-[60%]"
          />
          <Image
            src={BoxArt}
            alt="Box Art"
            className="rounded-md md:hidden lg:w-[40%] mt-12"
          />
          <Image
            src={Horizontal}
            alt="Box Art"
            className="rounded-md hidden md:block w-full lg:w-[100%]"
          />

          {/* Action Buttons */}
          <div className=" absolute bottom-20 sm:bottom-30 md:bottom-30 lg:bottom-30 xl:bottom-90 left-1/2 transform -translate-x-1/2 flex gap-6 lg:gap-10 justify-center flex-wrap">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-96 lg:text-[29px] bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 hover:from-pink-300 hover:via-purple-300 hover:to-pink-200 text-white font-bold py-3 px-8 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-pink-500/50 border-2 border-pink-200 backdrop-blur-sm flex items-center justify-center"
              style={{
                boxShadow: '0 0 20px #5662F6, 0 0 40px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              Join Discord
            </a>
            <a
              href="https://kickstarter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-96 lg:text-[29px] w-min bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 hover:from-purple-300 hover:via-pink-300 hover:to-purple-200 text-white font-bold py-3 px-8 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 border-2 border-purple-200 backdrop-blur-sm flex items-center justify-center text-center"
              style={{
                boxShadow: '0 0 20px #05CE78, 0 0 40px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              Support Kickstarter
            </a>
          </div>
        </header>

        {/* <Carousel /> */}

      </main>
    </div>
  );
}
