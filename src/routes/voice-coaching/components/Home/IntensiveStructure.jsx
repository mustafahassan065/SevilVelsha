import { motion } from "framer-motion";

export default function IntensiveStructure() {
  // handleScroll function ab zaroorat nahi kyunke hum stripe par bhej rahe hain
  // lekin agar aap kahin aur use kar rahe hain toh isko rakh sakte hain

  const offers = [
    {
      tag: null,
      level: "Option 1 — Entry Level",
      title: "Voice Authority Audit",
      price: "$199",
      priceLabel: "USD / Single Session",
      description: "20-minute private voice analysis.",
      includes: [
        "Speech pace",
        "Vocal energy",
        "Articulation clarity",
        "Authority signals",
      ],
      includesLabel: "We analyze:",
      footer: "3 specific improvements you can apply immediately.",
      buttonText: "Book Voice Audit",
      highlight: false,
      // NAYA: 199$ wali Stripe Link add ki hai
      stripeLink: "https://buy.stripe.com/dRm3cwb3m4h4fDM5QF1440c"
    },
    {
      tag: "⭐ Most Popular",
      level: "Option 2",
      title: "Voice Control Intensive",
      price: "$999",
      priceLabel: "USD / Full Intensive Access",
      description: "4 private coaching sessions. Ideal for professionals preparing for presentations, interviews & important meetings.",
      includes: [
        "Voice diagnostics",
        "Articulation training",
        "Breath & vocal power",
        "Authority speaking drills",
      ],
      includesLabel: "Includes:",
      footer: null,
      buttonText: "Start Intensive Training",
      highlight: true,
      // NAYA: 999$ wali Stripe Link add ki hai
      stripeLink: "https://buy.stripe.com/00w7sM3AUcNA63c4MB1440b"
    },
    {
      tag: "Premium Transformation",
      level: "Option 3",
      title: "Executive Voice Intensive",
      price: "$5,000",
      priceLabel: "USD / Full Program Access",
      description: "Full private coaching program. Designed for founders, executives & professionals in high-stakes communication.",
      includes: [
        "Full vocal analysis",
        "Authority presence training",
        "Presentation rehearsal",
        "Advanced voice control techniques",
        "Personal speech strategy",
      ],
      includesLabel: "Includes:",
      footer: null,
      buttonText: "Apply for Private Coaching",
      highlight: false,
      // NAYA: 5000$ wali Stripe Link add ki hai
      stripeLink: "https://buy.stripe.com/3cIfZi0oI3d077g5QF1440d"
    },
  ];

  return (
    <section id="program" className="bg-[#1A1A1B] md:p-[10%] p-[5%]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-garamond font-medium text-white">
          Work With Me
        </h2>
        <div className="border border-[#5B7C99] w-20 mt-2 mx-auto"></div>
        <p className="mt-4 text-gray-400 font-light">
          Choose the level of support that fits your goals.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-stretch">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex"
          >
            <div
              className={`relative flex flex-col w-full rounded-2xl shadow-xl transition
                ${offer.highlight
                  ? "bg-[#5B7C99] text-white ring-2 ring-[#5B7C99] scale-105"
                  : "bg-[#f8f7f4] text-[#1A1A1B]"
                }`}
            >
              {/* Tag Badge */}
              {offer.tag && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap
                    ${offer.highlight
                      ? "bg-[#C2B280] text-[#1A1A1B]"
                      : "bg-[#1A1A1B] text-[#C2B280] border border-[#C2B280]"
                    }`}
                >
                  {offer.tag}
                </div>
              )}

              <div className="md:p-10 p-6 flex flex-col flex-1">
                {/* Level */}
                <p
                  className={`text-xs tracking-widest font-bold uppercase mb-3
                    ${offer.highlight ? "text-[#d4e6f5]" : "text-[#C2B280]"}`}
                >
                  {offer.level}
                </p>

                {/* Title */}
                <h3
                  className={`text-2xl font-garamond font-semibold leading-snug
                    ${offer.highlight ? "text-white" : "text-[#1A1A1B]"}`}
                >
                  {offer.title}
                </h3>

                {/* Divider */}
                <div
                  className={`w-12 border mt-2 mb-4
                    ${offer.highlight ? "border-white/40" : "border-[#5B7C99]"}`}
                ></div>

                {/* Price */}
                <div className="mb-1">
                  <span
                    className={`text-4xl font-garamond font-bold
                      ${offer.highlight ? "text-white" : "text-[#1A1A1B]"}`}
                  >
                    {offer.price}
                  </span>
                </div>
                <p
                  className={`text-xs uppercase tracking-wide font-light mb-4
                    ${offer.highlight ? "text-white/70" : "text-[#B0B0B0]"}`}
                >
                  {offer.priceLabel}
                </p>

                {/* Description */}
                <p
                  className={`text-sm font-light leading-relaxed mb-5
                    ${offer.highlight ? "text-white/80" : "text-[#6B6B6B]"}`}
                >
                  {offer.description}
                </p>

                {/* Includes List */}
                <p
                  className={`text-xs uppercase tracking-widest font-bold mb-3
                    ${offer.highlight ? "text-[#d4e6f5]" : "text-[#C2B280]"}`}
                >
                  {offer.includesLabel}
                </p>
                <ul className="space-y-2 flex-1">
                  {offer.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className={`h-1.5 w-1.5 rounded-full flex-shrink-0
                          ${offer.highlight ? "bg-white" : "bg-[#5B7C99]"}`}
                      ></span>
                      <span
                        className={`text-xs uppercase tracking-wide font-medium
                          ${offer.highlight ? "text-white/90" : "text-[#1A1A1B]"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer note */}
                {offer.footer && (
                  <p
                    className={`mt-4 text-xs font-light italic
                      ${offer.highlight ? "text-white/70" : "text-[#6B6B6B]"}`}
                  >
                    {offer.footer}
                  </p>
                )}

                {/* Button */}
                <button
                  // NAYA FIX: Button click karne par user us offer ke stripe link par jayega
                  onClick={() => window.location.href = offer.stripeLink}
                  className={`mt-8 w-full py-4 px-6 text-xs tracking-widest uppercase rounded-md font-semibold transition hover:opacity-90 shadow-lg
                    ${offer.highlight
                      ? "bg-white text-[#1A1A1B]"
                      : "bg-[#5B7C99] text-white"
                    }`}
                >
                  {offer.buttonText}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}