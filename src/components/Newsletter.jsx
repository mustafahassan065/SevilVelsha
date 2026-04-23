import React from "react";
import { IoIosLink } from "react-icons/io";
import { MdCall, MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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

        {/* ══════════════════════════════════════════
            CONTACT BUTTONS — WhatsApp + Email
        ══════════════════════════════════════════ */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
            Need Support?
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/17786366633"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white no-underline transition-all hover:bg-[#20bd5a] hover:shadow-lg active:scale-[0.98]"
            >
              <FaWhatsapp className="text-lg" />
              Message on WhatsApp
            </a>

            {/* Email Button — Gmail Direct Compose */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sevilvelsha.com"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 border-gray-800 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-800 no-underline transition-all hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]"
            >
              <HiOutlineMail className="text-lg" />
              info@sevilvelsha.com
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            I reply within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;