import { Youtube } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Yahan se import karo
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

const VOICE_CONTROL_LINKS = [
  { label: "Voice Control Video Course", href: "/voice-control-course" },
  { label: "Voice Control Book", href: "/voice-control-book" },
  { label: "Voice Control Coaching", href: "/voice-control-coaching" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61582826969455", icon: FaFacebookF },
  { label: "Youtube", href: "https://www.youtube.com/@VoiceStudio-t7j", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/sevilvelsha/?igsh=MXVoN29zNWIza2NzdQ%3D%3Ds", icon: LuInstagram },
  { label: "Tik Tok", href: "https://www.tiktok.com/@sevilvelsha?lang=en", icon: FaTiktok },
  { label: "X/Twitter", href: "https://x.com/sevilvelsha", icon: FaXTwitter },
];

// Gold theme colors
const THEME = {
  bg: "#F4EFE6",           // Light cream background
  text: "#1E1B18",         // Dark text
  textMuted: "#6B6560",    // Muted text
  accent: "#B68A4C",       // Gold accent
  accentLight: "#D4C9B8",  // Light gold for borders
  white: "#FFFFFF"
};

function VoiceFooter() {
  return (
    <footer id="blogs" style={{ backgroundColor: THEME.bg }}>
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 md:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <h2 
              className="text-2xl font-semibold sm:text-3xl"
              style={{ color: THEME.text }}
            >
              Sevil Velsha
            </h2>
            <p 
              className="text-sm font-medium leading-relaxed sm:text-base"
              style={{ color: THEME.textMuted }}
            >
              Unlock the power of your voice, speak with clarity, authority,
              and emotional impact. Whether you are presenting on stage,
              leading a team, negotiating a deal, or preparing for TED, your
              voice is your instrument of influence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="mb-4 text-xl font-semibold sm:text-2xl"
              style={{ color: THEME.text }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span 
                    className="pt-1 text-base font-bold"
                    style={{ color: THEME.accent }}
                  >
                    <IoIosArrowForward />
                  </span>
                  <a
                    className="text-sm transition hover:underline sm:text-base"
                    style={{ color: THEME.textMuted }}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Voice Control Links */}
          <div>
            <h3 
              className="mb-4 text-xl font-semibold sm:text-2xl"
              style={{ color: THEME.text }}
            >
              Voice Control
            </h3>
            <ul className="space-y-2">
              {VOICE_CONTROL_LINKS.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span 
                    className="pt-1 text-base font-bold"
                    style={{ color: THEME.accent }}
                  >
                    <IoIosArrowForward />
                  </span>
                  <NavLink
                    className="text-sm transition hover:underline sm:text-base"
                    style={{ color: THEME.textMuted }}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 
              className="mb-4 text-xl font-semibold sm:text-2xl"
              style={{ color: THEME.text }}
            >
              Stay Connected
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.youtube.com/@VoiceStudio-t7j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition hover:underline sm:text-base"
                  style={{ color: THEME.textMuted }}
                >
                  YouTube: [The Voice Studio - Sevil Velsha]
                </a>
              </li>
              <li>
                <a
                  className="text-sm transition hover:underline sm:text-base"
                  style={{ color: THEME.textMuted }}
                  href="https://www.instagram.com/sevilvelsha?igsh=MXVoN29zNWIza2NzdQ%3D%3D"
                >
                  Instagram: @sevil.velsha
                </a>
              </li>
              <li>
                <NavLink
                  className="text-sm transition hover:underline sm:text-base"
                  style={{ color: THEME.textMuted }}
                  to="/blog/voice-ui-design-art"
                >
                  Blog: Sound and Presence - Reflections on Speaking, Voice and
                  Performance
                </NavLink>
              </li>
            </ul>

            {/* Mobile Social Icons */}
            <div className="mt-5 flex items-center gap-2 md:hidden">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="p-2 text-xl transition"
                    style={{ 
                      backgroundColor: THEME.accent,
                      color: THEME.white
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="mt-8 border-t"
          style={{ borderColor: THEME.accentLight }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p 
            className="text-sm font-semibold text-center md:text-left sm:text-base"
            style={{ color: THEME.textMuted }}
          >
            Copyright (c) 2025 Sevil Velsha
          </p>

          {/* Desktop Social Icons */}
          <div className="hidden items-center gap-2 md:flex">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="text-xl transition flex items-center justify-center"
                  style={{ 
                    backgroundColor: THEME.accent,
                    color: THEME.white,
                    width: "36px",
                    height: "36px"
                  }}
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

export default VoiceFooter;