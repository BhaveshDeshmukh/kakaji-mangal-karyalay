import IntroScreen from "../components/IntroScreen";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

import { useState } from "react";

import { motion } from "framer-motion";

import Services from "../components/Services";

import Testimonials from "../components/Testimonials";

import Facilities from "../components/Facilities";

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="bg-[#F8F1E7] overflow-hidden">

      <IntroScreen />

      <div id="mainWebsite">

        <Navbar />

        <section
          id="home"
          className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
        >

          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F1E7] via-[#FFF8EE] to-[#F3E5D0]"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.18),transparent_70%)]"></div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 text-center max-w-6xl mx-auto"
          >

            <p className="text-[#B8860B] uppercase tracking-[10px] text-sm md:text-base mb-8">
              Weddings • Receptions • Celebrations
            </p>

            <div className="w-40 h-[2px] bg-[#D4A017] mx-auto mb-10"></div>

            <h1 className="text-6xl md:text-8xl font-bold text-[#3B1F1F] leading-tight mb-10">
              Celebrate Your
              <span className="block text-[#D4A017] mt-4">
                Special Moments
              </span>
            </h1>

            <p className="text-[#4A2C2A] text-xl md:text-2xl leading-10 max-w-4xl mx-auto mb-16">
              Experience unforgettable celebrations filled with elegance,
              timeless traditions, premium hospitality,
              and luxurious wedding arrangements crafted beautifully.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">

              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#D4A017] text-[#4A0D0D] px-12 py-5 rounded-full text-xl font-bold hover:scale-105 hover:bg-[#E6B325] transition duration-300 shadow-[0_0_40px_rgba(212,160,23,0.25)]"
              >
                Book Your Event
              </button>

              <a href="#services">

                <button className="border-2 border-[#D4A017] text-[#B8860B] px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#D4A017] hover:text-[#4A0D0D] transition duration-300">
                  Explore Services
                </button>

              </a>

            </div>

          </motion.div>

        </section>

        <section
          id="about"
          className="bg-[#F8F1E7] py-32 px-6 md:px-16"
        >

          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >

              <p className="uppercase tracking-[6px] text-[#B8860B] mb-4">
                About Kakaji
              </p>

              <h2 className="text-5xl md:text-7xl font-bold text-[#3B1F1F] leading-tight mb-10">
                Celebrating Traditions,
                Creating Memories
              </h2>

              <p className="text-[#4A2C2A] text-lg md:text-xl leading-10 max-w-4xl mx-auto">
                Kakaji Mangal Karyalay has become a trusted destination
                for weddings, receptions, engagements, birthdays,
                and unforgettable celebrations filled with elegance,
                warmth, and timeless traditions.
              </p>

            </motion.div>

            <div className="grid md:grid-cols-2 gap-20 items-center">

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >

                <div className="bg-gradient-to-br from-[#5A0E0E] to-[#2A0606] rounded-[40px] p-14 shadow-2xl">

                  <h3 className="text-5xl font-bold text-gold mb-8">
                    Premium Venue
                  </h3>

                  <p className="text-cream text-lg leading-10">
                    Designed beautifully for luxurious weddings,
                    receptions, engagements, birthdays,
                    and memorable celebrations with premium hospitality
                    and elegant arrangements.
                  </p>

                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >

                <div className="space-y-10">

                  <div>

                    <h3 className="text-4xl font-bold text-[#5A0E0E] mb-5">
                      Elegant Celebrations
                    </h3>

                    <p className="text-[#4A2C2A] text-lg leading-9">
                      Every celebration is crafted with premium décor,
                      warm hospitality, traditional elegance,
                      and unforgettable experiences.
                    </p>

                  </div>

                  <div>

                    <h3 className="text-4xl font-bold text-[#5A0E0E] mb-5">
                      Traditional & Modern Experience
                    </h3>

                    <p className="text-[#4A2C2A] text-lg leading-9">
                      Blending timeless traditions with luxurious modern
                      arrangements to create memorable wedding experiences.
                    </p>

                  </div>

                  <div>

                    <h3 className="text-4xl font-bold text-[#5A0E0E] mb-5">
                      Spacious Premium Arrangements
                    </h3>

                    <p className="text-[#4A2C2A] text-lg leading-9">
                      From floral decorations to grand dining setups,
                      every detail is designed to make your occasion
                      truly extraordinary.
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        <Services />

        <Facilities />

        <Testimonials />

        <Footer />

        <BookingModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

      </div>

    </div>
  );
}

export default Home;