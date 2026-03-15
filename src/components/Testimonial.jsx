import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TESTIMONIALS = [
  {
    name: "Hazel Dawson",
    role: "Managing Director",
    quote:
      "Voice Control changed how I’m perceived in professional settings. I didn’t become louder — I became clearer, calmer, and more authoritative. Meetings shifted. People listened without interruption.",
  },
  {
    name: "Rati Jhaveri",
    role: "Educator & Public Speaker",
    quote:
      "This is not performance training. It’s structural voice work. I learned how breath, pacing, and tone create authority without effort. The results were immediate and sustainable.",
  },
  {
    name: "Aditi Nayak",
    role: "Operations Manager",
    quote:
      "I used to over-explain and rush. Voice Control helped me slow down and sound grounded. My communication became confident — without forcing confidence.",
  },
  {
    name: "Michael Turner",
    role: "Senior Management Consultant",
    quote:
      "Voice Control gave me precision. I speak less, but with more impact. Clients respond faster and with more trust.",
  },
  {
    name: "Elena Morozova",
    role: "University Lecturer",
    quote:
      "The method connects voice technique with meaning. My lectures became clearer, calmer, and more engaging — without performance or strain.",
  },
  {
    name: "Daniel Brooks",
    role: "Corporate Lawyer",
    quote:
      "I stopped forcing confidence. The work helped me regulate pace, breath, and tone — which changed how authority is perceived in negotiations.",
  },
  {
    name: "Priya Shah",
    role: "Founder & CEO",
    quote:
      "Voice Control refined how I speak under pressure. Board meetings, pitches, and difficult conversations became controlled and grounded.",
  },
  {
    name: "Laura Bennett",
    role: "Communications Manager",
    quote:
      "This is not vocal polishing. It’s structural work that changes how your message lands. The difference is subtle — and powerful.",
  },
];

function Testimonial() {
  return (
    <section id="testimonial" className="bg-[#EFF9F0]">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-500 sm:text-base">
            Testimonial
          </h5>
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl">
            My clients say
          </h2>
          <p className="text-base italic leading-relaxed text-gray-600 sm:text-lg">
            Phasellus facilisis malesuada blandit. Morbi hendrerit eu elit sit
            amet euismod. Nam a efficitur nulla. Duis placerat urna in ex
            pulvinar aliquet.
          </p>
        </div>

        <div className="relative mt-10 md:mt-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            loop={TESTIMONIALS.length > 3}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              
            }}

            className="!items-stretch"
          >
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`} className="pb-4 !h-auto">
                <article className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6 h-full">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium text-green-600 sm:text-base">
                        {item.role}
                      </p>
                    </div>

                    <span className="text-3xl leading-none text-green-500 sm:text-4xl">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                      </svg>
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base">
                    {item.quote}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="testimonial-prev absolute md:-left-4 -left-2 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-green-200 bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-400"
          >
            <IoIosArrowBack />
          </button>
          <button
            type="button"
            className="testimonial-next absolute md:-right-4 -right-2 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-green-200 bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-400"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
