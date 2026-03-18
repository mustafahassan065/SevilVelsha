import { motion } from "framer-motion";

const AuthorityParadox = () => {
  return (
    <motion.div
       initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
    
    className="min-h-screen bg-white flex flex-col justify-between px-6 md:px-16 py-10">
      
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-center  text-3xl md:text-5xl lg:text-5xl  xl:text-6xl font-garamond font-medium  leading-tight text-[#1A1A1B] mb-4">
          The Authority Paradox
        </h1>
        <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
          Expertise that sounds tentative is often dismissed. We bridge the gap
          between what you know and how the world hears it.
        </p>
      </motion.div>

      <motion.footer
           initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 tracking-widest gap-6"
      >
        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          <div>
            <p className="uppercase text-[#1A1A1B] font-bold">Sevil Velsha</p>
            <p className="text-[10px] font-bold text-[#B0B0B0]">VOICE AUTHORITY INTENSIVE</p>
          </div>
        </div>

        {/* Center */}
        <div className="flex gap-6 uppercase font-bold text-[#6B6B6B] text-xs">
          <span className="cursor-pointer hover:text-gray-700">Legal</span>
          <span className="cursor-pointer hover:text-gray-700">Privacy</span>
          <span className="cursor-pointer hover:text-gray-700">Contact</span>
        </div>

        {/* Right */}
        <div className="text-right uppercase text-[#B0B0B0] font-bold text-xs">
          <p>© 2026 Sevil Velsha</p>
          <p className="">London · New York · Global</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default AuthorityParadox;