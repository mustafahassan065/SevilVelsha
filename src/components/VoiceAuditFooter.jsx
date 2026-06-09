// components/VoiceAuditFooter.jsx
import { Youtube } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { NavLink } from "react-router";

// Voice Audit Theme Colors
const GOLD = '#C9A84C';
const DARK_BG = '#0a0a0a';
const DARK_CARD = '#111111';
const TEXT_LIGHT = '#ffffff';
const TEXT_MUTED = 'rgba(255,255,255,0.55)';
const TEXT_DIM = 'rgba(255,255,255,0.35)';

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
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588183386397", icon: FaFacebookF },
  { label: "Youtube", href: "https://www.youtube.com/@VoiceStudio-t7j", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/sevilvelsha/?igsh=MXVoN29zNWIza2NzdQ%3D%3Ds", icon: LuInstagram },
  { label: "Tik Tok", href: "https://www.tiktok.com/@sevilvelsha?lang=en", icon: FaTiktok },
  { label: "X", href: "https://x.com/sevilvelsha", icon: FaXTwitter },
];

function VoiceAuditFooter() {
  return (
    <footer style={{ backgroundColor: DARK_BG, borderTop: `1px solid ${GOLD}15` }}>
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 sm:pt-14 md:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: TEXT_LIGHT }}>
              Sevil Velsha
            </h2>
            <p className="text-sm font-medium leading-relaxed sm:text-base" style={{ color: TEXT_MUTED }}>
              Unlock the power of your voice, speak with clarity, authority,
              and emotional impact. Whether you are presenting on stage,
              leading a team, negotiating a deal, or preparing for TED, your
              voice is your instrument of influence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl" style={{ color: GOLD }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span className="pt-1 text-base font-bold" style={{ color: GOLD }}>
                    <IoIosArrowForward />
                  </span>
                  <a
                    className="text-sm transition sm:text-base"
                    style={{ color: TEXT_MUTED }}
                    href={item.href}
                    onMouseEnter={(e) => e.target.style.color = GOLD}
                    onMouseLeave={(e) => e.target.style.color = TEXT_MUTED}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl" style={{ color: GOLD }}>
              Voice Control
            </h3>
            <ul className="space-y-2">
              {VOICE_CONTROL_LINKS.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span className="pt-1 text-base font-bold" style={{ color: GOLD }}>
                    <IoIosArrowForward />
                  </span>
                  <NavLink
                    className="text-sm transition sm:text-base"
                    style={{ color: TEXT_MUTED }}
                    to={item.href}
                    onMouseEnter={(e) => e.target.style.color = GOLD}
                    onMouseLeave={(e) => e.target.style.color = TEXT_MUTED}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl" style={{ color: GOLD }}>
              Stay Connected
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.youtube.com/@VoiceStudio-t7j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition sm:text-base"
                  style={{ color: TEXT_MUTED }}
                  onMouseEnter={(e) => e.target.style.color = GOLD}
                  onMouseLeave={(e) => e.target.style.color = TEXT_MUTED}
                >
                  YouTube: [The Voice Studio - Sevil Velsha]
                </a>
              </li>
              <li>
                <a
                  className="text-sm transition sm:text-base"
                  style={{ color: TEXT_MUTED }}
                  href="https://www.instagram.com/sevilvelsha?igsh=MXVoN29zNWIza2NzdQ%3D%3D"
                  onMouseEnter={(e) => e.target.style.color = GOLD}
                  onMouseLeave={(e) => e.target.style.color = TEXT_MUTED}
                >
                  Instagram: @sevil.velsha
                </a>
              </li>
              <li>
                <NavLink
                  className="text-sm transition sm:text-base"
                  style={{ color: TEXT_MUTED }}
                  to="/blog/voice-ui-design-art"
                  onMouseEnter={(e) => e.target.style.color = GOLD}
                  onMouseLeave={(e) => e.target.style.color = TEXT_MUTED}
                >
                  Blog: Sound and Presence - Reflections on Speaking, Voice and Performance
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
                    className="p-2 text-xl transition"
                    style={{ backgroundColor: GOLD, color: DARK_BG }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8" style={{ borderTop: `1px solid ${GOLD}15` }} />

        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold sm:text-base text-center md:text-left" style={{ color: TEXT_DIM }}>
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
                  className="text-xl transition flex items-center justify-center"
                  style={{ 
                    backgroundColor: GOLD, 
                    color: DARK_BG,
                    width: '36px',
                    height: '36px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
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

export default VoiceAuditFooter;