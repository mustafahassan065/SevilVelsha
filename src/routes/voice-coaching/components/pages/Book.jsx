import { motion } from "framer-motion";
const CALENDLY_URL = "https://calendly.com/sevilvelsha/20-minute-meeting";

export default function Book() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] flex flex-col items-center pt-24 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl text-center mb-8"
      >
        <p className="text-xs font-semibold tracking-[3px] uppercase text-gray-400 mb-3">
          Application Received
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank you.</h1>
        <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed">
          Please book your <strong>20-minute Executive Clarity Call</strong>{" "}
          below.
        </p>
      </motion.div>

      {/* Calendly inline embed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        style={{ minHeight: "800px" }}
      >
        <iframe
          src={`${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1`}
          width="100%"
          height="850"
          frameBorder="0"
          title="Book your Executive Clarity Call"
          className="block"
        />
      </motion.div>

      <p className="mt-6 text-xs text-gray-400 text-center">
        Trouble booking?{" "}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600 transition"
        >
          Open Calendly directly →
        </a>
      </p>
    </div>
  );
}
