import { motion } from "framer-motion";

import hero from "../assets/kakaji.jpg";

function IntroScreen() {

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <img
        src={hero}
        alt="Kakaji Mangal Karyalay"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#5A0E0E]/30 to-black/80"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.15),transparent_70%)]"></div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-24 px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >

          <div className="w-40 h-[2px] bg-gold mx-auto mb-8"></div>

          <h1 className="text-5xl md:text-8xl font-bold text-cream mb-6 drop-shadow-2xl">
            काकाजी मंगल कार्यालय
          </h1>

          <p className="text-gold uppercase tracking-[8px] text-sm md:text-base mb-14">
            Weddings • Celebrations • Traditions
          </p>

        </motion.div>

        <motion.a
          href="#mainWebsite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col items-center cursor-pointer"
        >

          <p className="text-cream tracking-[6px] text-sm mb-4 animate-pulse">
            SCROLL TO ENTER
          </p>

          <div className="w-[2px] h-20 bg-gold animate-bounce"></div>

        </motion.a>

      </div>

    </section>
  );
}

export default IntroScreen;