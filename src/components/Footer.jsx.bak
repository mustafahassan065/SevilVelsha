import { Youtube } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { NavLink } from "react-router";

const QUICK_LINKS = [
  { label: "Ph.D. in intonation and acoustics", href: "#" },
  { label: "My story", href: "#" },
  { label: "About me", href: "#" },
  { label: "How We Work", href: "#" },
  { label: "Testimonial", href: "#" },
  { label: "Order", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61582826969455", icon: FaFacebookF },
  { label: "Youtube", href: "https://www.youtube.com/@VoiceStudio-t7j", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/sevilvelsha/?igsh=MXVoN29zNWIza2NzdQ%3D%3Ds", icon: LuInstagram },
  { label: "Tik Tok", href: "https://www.tiktok.com/@sevilvelsha?lang=en", icon: FaTiktok },
  { label: "Tik Tok", href: "https://x.com/sevilvelsha", icon: FaXTwitter },
];

function Footer() {
  return (
    <footer id="blogs" className="bg-bgColor">
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 md:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Sevil Velsha
            </h2>
            <p className="text-sm font-medium leading-relaxed text-gray-500 sm:text-base">
              Unlock the power of your voice, speak with clarity, authority,
              and emotional impact. Whether you are presenting on stage,
              leading a team, negotiating a deal, or preparing for TED, your
              voice is your instrument of influence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span className="pt-1 text-base font-bold text-green-600">
                    <IoIosArrowForward />
                  </span>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-700 hover:underline sm:text-base"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
              Stay Connected
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.youtube.com/@VoiceStudio-t7j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition hover:text-gray-700 hover:underline sm:text-base"
                >
                  YouTube: [The Voice Studio - Sevil Velsha]
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-500 transition hover:text-gray-700 hover:underline sm:text-base"
                  href="https://www.instagram.com/sevilvelsha?igsh=MXVoN29zNWIza2NzdQ%3D%3D"
                >
                  Instagram: @sevil.velsha
                </a>
              </li>
              <li>
                <NavLink
                  className="text-sm text-gray-500 transition hover:text-gray-700 hover:underline sm:text-base"
                  href="/blog/voice-ui-design-art"
                >
                  Blog: Sound and Presence - Reflections on Speaking, Voice and
                  Performance
                </NavLink>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2 md:hidden">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="bg-[#EFEA53] p-2 text-xl text-gray-800 transition hover:text-gray-500"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200" />

        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-gray-600 sm:text-base text-center md:text-left">
            Copyright (c) 2025 Sevil Velsha
          </p>

          <div className="hidden items-center gap-2 md:flex">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="bg-[#EFEA53] text-xl text-gray-800 transition hover:text-gray-500 size-9 flex items-center justify-center"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
