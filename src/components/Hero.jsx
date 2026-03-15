import React from "react";
import Img from "../assets/images/hero-img.webp";

function Hero() {
  return (
    <section id="home" className="bg-bgColor">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center md:gap-12 lg:px-10 lg:py-16">
        <div className="flex flex-1 flex-col justify-center gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-green-500 sm:text-sm">
              Ph.D. in intonation and acoustics
            </h3>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Sevil Velsha Voice of Influence
            </h1>
          </div>
          <div>
            <span className="block max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
              Speaker | Author | Vocal Dynamics Coach | Presentation Strategist
            </span>
          </div>
          <div className="mt-2 sm:mt-3">
            <a
              className="inline-block cursor-pointer rounded-full rounded-tr-none bg-[#81e281] px-7 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-[#74d574] sm:px-10 sm:py-3.5 sm:text-base"
              href="/booking"
            >
              Request a Voice Evaluation
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center md:justify-end">
          <img
            src={Img}
            alt="Sevil Velsha portrait"
            decoding="async"
            loading="lazy"
            className="h-auto w-full max-w-[460px] rounded-2xl object-cover sm:max-w-[520px] md:max-w-[420px] lg:max-w-[540px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
