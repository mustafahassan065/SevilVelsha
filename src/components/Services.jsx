import React from "react";
import Master from "../assets/images/masters-leadership.webp";
import Coaching from "../assets/images/coaching.webp";
import Dancing from "../assets/images/dancing.webp";

const SERVICE_SECTIONS = [
  {
    image: Master,
    imageAlt: "Keynote speaking",
    tag: "Keynote Speaking",
    tagColor: "bg-[#FF6E68]",
    tagPosition: "right-3 sm:right-4 md:right-5",
    borderColor: "border-[#FF6E68]",
    title:
      "Dynamic talks on voice power, performance under pressure, communication science, and the emotional art of speech.",
    points: [
      "The Science of Charisma",
      "How to Persuade with Your Voice",
      "Sounding Confident When You're Not",
      "Voice as Leadership: Tone, Trust and Timing",
    ],
  },
  {
    image: Coaching,
    imageAlt: "Coaching and workshops",
    tag: "1:1 Coaching and Workshops",
    tagColor: "bg-[#79D779]",
    tagPosition: "left-3 sm:left-4 md:left-5",
    borderColor: "border-[#79D779]",
    title:
      "Bespoke training for professionals, executives, actors, and academics in:",
    points: [
      "Negotiation and Presentation Voice Control",
      "High-Stakes Speaking: Interviews, TEDx, Pitches",
      "Accent Shaping and Intonation Mastery",
      "Emotional Expression through Voice",
    ],
  },
  {
    image: Dancing,
    imageAlt: "Author and researcher",
    tag: "Author and Researcher",
    tagColor: "bg-[#EFEA53]",
    tagPosition: "right-3 sm:right-4 md:right-5",
    borderColor: "border-[#EFEA53]",
    title: "Author of Voice Control: A Professional Method for Vocal Authority",
    points: [
      "Published in international journals on prosody, articulation, and expressive acoustics.",
      "An acoustic and emotional approach to classical theatre and powerful speech delivery.",
      "\"Warming the Voice, Waking the Text\"",
    ],
  },
];

function Services() {
  return (
    <section id="services">
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-28 md:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-500 sm:text-base">
            How We Work
          </h5>
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl">
            What I Do
          </h2>
          <p className="text-base italic leading-relaxed text-gray-600 sm:text-lg">
            Phasellus facilisis malesuada blandit. Morbi hendrerit eu elit sit
            amet euismod. Nam a efficitur nulla. Duis placerat urna in ex
            pulvinar aliquet.
          </p>
        </div>

        <div className="mt-10 space-y-12 md:mt-12 md:space-y-20">
          {SERVICE_SECTIONS.map((section, index) => {
            const singleLastItem = section.points.length % 2 === 1;

            return (
              <article key={index} className="space-y-5 md:space-y-10">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    alt={section.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-[260px] w-full object-cover sm:h-[320px] md:h-[380px] lg:h-[460px]"
                    src={section.image}
                  />
                  <span
                    className={`absolute bottom-3 ${section.tagPosition} rounded-xl rounded-bl-none ${section.tagColor} px-4 py-2 text-[11px] font-medium tracking-wide text-white sm:bottom-4 sm:px-5 sm:text-xs md:px-6 md:py-2.5 md:text-sm`}
                  >
                    {section.tag}
                  </span>
                </div>

                <div className="space-y-7 md:space-y-9">
                <h3 className="mx-auto max-w-4xl px-2 text-center text-lg font-bold leading-snug text-gray-800 sm:text-xl md:text-2xl">
                  {section.title}
                </h3>

                <div className="grid gap-6 text-gray-600 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {section.points.map((point, pointIndex) => {
                    const isLastSingle =
                      singleLastItem && pointIndex === section.points.length - 1;

                    return (
                      <p
                        key={pointIndex}
                        className={`flex min-h-[84px] items-center justify-center rounded-xl border px-5 py-4 text-center text-base leading-relaxed sm:min-h-[96px] sm:px-6 sm:py-5 sm:text-lg md:px-7 md:py-6 ${section.borderColor} ${
                          isLastSingle ? "md:col-span-2" : ""
                        }`}
                      >
                        {point}
                      </p>
                    );
                  })}
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
