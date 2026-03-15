import React from "react";
import { IoIosLink } from "react-icons/io";
import { MdCall, MdMailOutline } from "react-icons/md";

function Newsletter() {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h6 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-green-600 sm:text-base">
          Order
        </h6>

        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
            Book Sevil to speak
          </h2>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-gray-600 sm:text-lg">
            Whether it's a keynote, masterclass, or panel, Sevil brings passion,
            precision, and practical insight to every stage.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-4">
            <span className="pt-0.5 text-2xl text-green-600">
              <MdMailOutline />
            </span>
            <h3 className="text-sm font-semibold leading-snug text-gray-600 sm:text-base">
              Let's Talk - Book Sevil
            </h3>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-4">
            <span className="pt-0.5 text-2xl text-green-600">
              <IoIosLink />
            </span>
            <h3 className="text-sm font-semibold leading-snug text-gray-600 sm:text-base">
              [Download Speaker One Sheet (PDF)]
            </h3>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-4 sm:col-span-2 lg:col-span-1">
            <span className="pt-0.5 text-2xl text-green-600">
              <MdCall />
            </span>
            <h3 className="text-sm font-semibold leading-snug text-gray-600 sm:text-base">
              Available for events worldwide | Based in Vancouver, Canada
            </h3>
          </div>
        </div>

        <form className="mt-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            required
            placeholder="Your Full Name"
            className="h-12 w-full rounded-xl rounded-tl-none border border-gray-200 bg-gray-50 px-3 text-sm outline-none transition focus:border-green-300 focus:ring-2 focus:ring-green-200 md:w-1/2"
            name="name"
          />

          <div className="relative h-12 w-full md:w-1/2">
            <input
              type="email"
              required
              placeholder="Your Email"
              className="h-full w-full rounded-xl rounded-br-none border border-gray-200 bg-gray-50 px-3 pr-28 text-sm outline-none transition focus:border-green-300 focus:ring-2 focus:ring-green-200"
              name="email"
            />
            <button
              type="submit"
              className="absolute bottom-1 right-1 top-1 rounded-xl bg-[#8BEB8B] px-4 text-sm font-semibold text-gray-900 transition-colors hover:bg-[#78e378] active:scale-105"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
