import React from "react";

function Story() {
  return (
    <section
      id="story"
      className="bg-bgColor px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h5 className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-500 sm:text-base">
          My Story
        </h5>
        <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl md:text-5xl">
          My Story: A Voice Rooted in Legacy
        </h2>
        <p className="py-3 text-base italic leading-relaxed text-gray-600 sm:py-4 sm:text-lg md:text-xl">
          Born with Crimean Tatar roots, raised with stories of exile, music,
          and survival, I know the voice is more than sound, it is legacy. It is
          how we carry the past, claim our space, and shape the future.
          <span className="px-1 font-semibold">-</span>
          From small village songs to Shakespearean stages, from scientific
          research labs to global speaker forums, my mission remains: To help
          every voice rise in power, truth, and freedom.
        </p>
      </div>
    </section>
  );
}

export default Story;
