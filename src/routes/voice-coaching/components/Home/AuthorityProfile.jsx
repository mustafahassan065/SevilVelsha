import { motion } from "framer-motion";

export default function AuthorityProfile() {
  return (
    <section id="about" className="bg-white p-[5%]">
      <div className=" grid lg:grid-cols-2  2xl:gap-20 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <div className=" ">
            <img
              src="/images/profile.png"
              alt="Dr. Sevil Velsha"
              className=" object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="        text-2xl md:text-5xl lg:text-5xl  xl:text-6xl font-garamond font-medium text-black leading-tight">
            Scientist by Training.
            <br />
            <span className="text-[#c2a66a]">Authority </span>by Design.
          </h2>

          <p className="mt-3 text-[#6B6B6B] leading-relaxed max-w-xl font-light md:text-base text-sm">
            Dr. Sevil Velsha has spent over a decade studying how authority is
            perceived through voice. She works with intelligent professionals
            whose competence is routinely underestimated—not because of skill,
            but because their voice does not carry power.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-sm tracking-widest font-bold  text-[#5B7C99] uppercase">
                Methodology
              </p>
              <p className="mt-1 text-sm font-light text-[#6B6B6B]">
                Evidence-based. Non-performative. Private.
              </p>
            </div>

            <div>
              <p className="text-sm tracking-widest font-bold text-[#C2B280] uppercase">
                Selectivity
              </p>
              <p className="mt-1 text-sm font-light text-[#6B6B6B]">
                Limited to 20 participants per cohort.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
