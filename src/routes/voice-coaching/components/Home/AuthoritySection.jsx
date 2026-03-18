import { motion } from "framer-motion";
import { FiMic, FiGlobe, FiAward } from "react-icons/fi";

export default function AuthoritySection() {
  const items = [
    {
      icon: <FiMic />,
      title: "Voice Diagnostics",
      desc: "Identify exactly where your authority is leaking through acoustic analysis.",
    },
    {
      icon: <FiGlobe />,
      title: "Global Resonance",
      desc: "It’s not about losing an accent. It’s about gaining the weight that commands respect.",
    },
    {
      icon: <FiAward />,
      title: "Executive Gravitas",
      desc: "Align posture, breath, and pitch to command the room before you finish your first sentence.",
    },
  ];

  return (
    <section id="approach" className="bg-white p-[5%]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center  text-2xl md:text-5xl lg:text-5xl  xl:text-6xl font-garamond font-medium text-black leading-tight"
        >
          From Expertise to{" "}
          <span className="text-[#C2B280]">Auditory Authority.</span>
        </motion.h2>

        <div className="md:mt-16 mt-6 grid md:gap-8 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF9F6] rounded-2xl xl:p-14 md:p-8 p-5 text-center"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-[#5c7c99] text-xl">
                {item.icon}
              </div>

              <h3 className="font-medium text-[#1A1A1B] font-garamond md:text-2xl text-lg">
                {item.title}
              </h3>

              <p className="md:mt-3 mt-1 md:text-sm text-xs text-[#6B6B6B]  leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
