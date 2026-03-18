import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function ApplyNowSection() {
  const navigate = useNavigate();

  return (
    <section id="apply-now" className="bg-[#FAF9F6] md:py-32 py-20 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[100px] md:text-[200px] lg:text-[260px] font-serif text-[#e8e6e1] tracking-widest uppercase whitespace-nowrap">
          AUTHORITY
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm text-[#5c7c99]"
        >
          <LuUsers size={18} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-6xl lg:text-7xl font-garamond font-medium leading-tight text-[#1A1A1B]"
        >
          Apply Now.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-[#8a8a8a] max-w-lg mx-auto text-sm md:text-base font-light leading-relaxed"
        >
          You've built the expertise. Now, build the resonance to carry it.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => navigate("/voice-control-coaching/contact")}
            className="group inline-flex items-center gap-3 border-b border-gray-400 pb-2 uppercase tracking-[0.2em] text-[#1A1A1B] font-semibold text-[10px] md:text-xs hover:border-[#5B7C99] transition-colors duration-300 cursor-pointer"
          >
            Apply for Voice Authority Intensive
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 group-hover:border-[#5B7C99] transition-colors duration-300">
              <FiArrowUpRight className="text-xs" />
            </span>
          </button>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b5b5b5]"
        >
          No automated systems. Every application reviewed by Sevil personally.
        </motion.p>
      </div>
    </section>
  );
}
