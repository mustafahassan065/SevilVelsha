import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function HeroHeader() {
    const navigate = useNavigate();
  const handleApplyClick = () => {
     navigate("/apply");
  };
  
  return (
    <section className="bg-[#f8f7f4]">
      <div className="  md:p-[9%] p-[5%] flex items-center gap-10 lg:flex-row flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[70%] w-full"
        >
          <p className="uppercase font-bold text-xs tracking-widest text-[#C2B280] ">
            — Presence Defined.
          </p>

          <h1 className="text-2xl md:text-5xl lg:text-5xl  xl:text-6xl font-garamond font-medium text-black leading-tight">
            Speak with Authority.
            <br />
            <span className="text-[#5B7C99]">Be Taken Seriously.</span>
          </h1>

          <p className="mt-6 text-[#6B6B6B] max-w-xl xl:text-xl md:text-lg text-base font-light ">
            A live 6-week voice authority program for intelligent professionals
            who feel underestimated when they speak English.
          </p>

          <div className="mt-10 bg-white rounded-xl p-6 shadow-sm ">
            <p className="font-medium text-[#1A1A1B] font-garamond text-2xl">
              You are intelligent.
            </p>
            <p className="font-medium text-[#1A1A1B] font-garamond text-2xl">
              You are qualified.
            </p>

            <p className="mt-4  text-[#6B6B6B] font-light text-base">
              But when you speak:
            </p>

            <ul className="mt-4 space-y-2  text-[#1A1A1B] capitalize font-medium text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#5c7c99]">•</span>– people interrupt
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5c7c99]">•</span>– your ideas lose
                weight
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5c7c99]">•</span>– your authority
                doesn’t land
              </li>
            </ul>
          </div>

          <div className="mt-8 flex items-center md:gap-6 gap-2">
            <button onClick={handleApplyClick} className="md:px-6 px-2 md:text-base text-xs py-3 bg-[#5B7C99] text-white rounded-md flex items-center gap-2 hover:opacity-90 transition">
              Apply Now →
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="flex -space-x-2">
                <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                <span className="w-6 h-6 bg-gray-200 rounded-full"></span>
                <span className="w-6 h-6 bg-gray-100 rounded-full"></span>
              </span>
              Join 200+ executives
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end  lg:w-[30%] w-full"
           
        >
          <div className="w-[280px] sm:w-[340px] md:w-full lg:w-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/hero_header.jpg"
              alt="Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
