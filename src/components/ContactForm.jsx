import React from 'react'
import { IoIosLink } from "react-icons/io";
import { MdCall, MdMailOutline } from "react-icons/md";

function ContactForm() {
  return (
    <div className='min-h-screen bg-white'>
      <section id="contact" class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div class="mx-auto mb-10 flex w-full max-w-3xl flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm sm:mb-12 sm:p-6">
          <h5 class="mb-2 text-green-500 uppercase tracking-wider font-semibold">
            Contact
          </h5>
          <h2 class="mb-4 text-center text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
            Get In Touch
          </h2>
          <p class="text-center text-base italic leading-relaxed text-gray-600 sm:text-lg">
            We'd love to hear from you! Whether you have a question about voice
            coaching, feedback to share, or want to book Sevil for a speaking
            engagement, we're all ears. While we can't respond to every message,
            please know that we see you, we hear you, and we appreciate you.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <div class="mb-10 border-t border-gray-200 pt-8 sm:mb-12">
              <h3 class="mb-6 text-xl font-semibold text-gray-900 sm:text-2xl">
                Contact Information
              </h3>
              <div class="space-y-6">
                <div class="flex items-start gap-3 sm:gap-4">
                  <MdMailOutline size={20} className='text-green-600' />
                  <div>
                    <p class="font-semibold text-gray-900 mb-1">
                      Press inquiries:
                    </p>
                    <a
                      href="mailto:info@sevilvelsha.com"
                      class="break-all text-sm text-green-600 no-underline hover:text-green-700 sm:break-normal"
                    >
                      info@sevilvelsha.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-3 sm:gap-4">
                  <MdCall size={20} className='text-green-600' />
                  <div>
                    <p class="font-semibold text-gray-900 mb-1">
                      Speaking bookings:
                    </p>
                    <a
                      href="mailto:bookings@sevilvelsha.com"
                      class="break-all text-sm text-green-600 no-underline hover:text-green-700 sm:break-normal"
                    >
                      bookings@sevilvelsha.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-3 sm:gap-4">
                  <IoIosLink size={20} className='text-green-600' />
                  <div>
                    <p class="font-semibold text-gray-900 mb-1">
                      Brand partnerships:
                    </p>
                    <a
                      href="mailto:partnerships@sevilvelsha.com"
                      class="break-all text-sm text-green-600 no-underline hover:text-green-700 sm:break-normal"
                    >
                      partnerships@sevilvelsha.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 my-8"></div>

            <div class="mb-8">
              <h3 class="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">Inquiries</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Got a question or something to share? Use the contact form to
                reach the Sevil Velsha team. We can't respond to every message,
                but we do read them all and your stories often help shape future
                content and coaching programs.
              </p>
              <p class="text-gray-600 text-sm italic">
                If you're looking for support on a personal topic, check out our
                complete library of resources and coaching services. You can
                explore our services to find exactly what you're looking for.
              </p>
            </div>
          </div>

          <div>
            <div class="border-t border-gray-200 pt-8 xl:sticky xl:top-24">
              <h4 class="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                Have a question?
              </h4>
              <p class="text-gray-600 mb-6">
                For all other inquiries, please use this form to get in touch
                with the Sevil Velsha team.
              </p>

              <form class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="name"
                      required=""
                      placeholder="Enter your name"
                      class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      type="text"
                      value=""
                      name="name"
                    ></input>
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      required=""
                      placeholder="Enter your email"
                      class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      type="email"
                      value=""
                      name="email"
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    required=""
                    placeholder="What is this regarding?"
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    type="text"
                    value=""
                    name="subject"
                  ></input>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    rows="6"
                    placeholder="Tell us how we can help you..."
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                <div class="pt-2">
                  <button
                    type="submit"
                    class="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
