import React from "react";
import Img from "../assets/images/sevil-about.webp";
import Icon1 from "../assets/images/icon-1.webp";
import Icon2 from "../assets/images/icon-2.webp";
import Icon3 from "../assets/images/icon-3.webp";

function About() {
  return (
    <section id="about">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
          <div className="flex-1">
            <img
              src={Img}
              alt="About Sevil Velsha"
              decoding="async"
              loading="lazy"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-green-700 sm:text-base">
              About Me
            </h4>
            <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Voice as Identity
            </h2>
            <p className="pt-2 text-sm leading-relaxed text-gray-600 sm:text-base md:pt-4 md:text-lg">
              I am Sevil Velsha, with a Ph.D. in Intonation and Acoustics, a
              voice and communication expert, and creator of The Voice Studio. I
              help professionals, leaders, educators, and performers unlock the
              power of their voice so they can speak with clarity, authority,
              and emotional impact. Whether you are presenting on stage, leading
              a team, negotiating a deal, or preparing for TED, your voice is
              your instrument of influence. And yes, you can train it.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-xl rounded-bl-none border border-gray-300 px-6 py-10 sm:px-7 sm:py-12">
              <img
                alt="Science + Soul"
                loading="lazy"
                decoding="async"
                className="absolute -top-4 h-10 w-10"
                src={Icon1}
              />
              <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Science + Soul
              </h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                I blend cutting-edge linguistic research with embodied
                performance techniques.
              </p>
            </div>

            <div className="relative rounded-xl rounded-tl-none border border-gray-300 px-6 py-10 sm:px-7 sm:py-12">
              <img
                alt="Actor's Discipline"
                loading="lazy"
                decoding="async"
                className="absolute -top-4 h-10 w-10"
                src={Icon2}
              />
              <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Actor's Discipline
              </h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Trained in classical theatre vocality and expressive delivery.
              </p>
            </div>

            <div className="relative rounded-xl rounded-br-none border border-gray-300 px-6 py-10 sm:col-span-2 sm:px-7 sm:py-12 lg:col-span-1">
              <img
                alt="Voice as Identity"
                loading="lazy"
                decoding="async"
                className="absolute -top-4 h-10 w-10"
                src={Icon3}
              />
              <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Voice as Identity
              </h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Your voice is your story. Your power. Let's make it heard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
