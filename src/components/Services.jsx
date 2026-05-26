import { motion } from "framer-motion";

import wedding from "../assets/wedding.jpg";
import reception from "../assets/reception.jpg";
import corporate from "../assets/corporate.jpg";
import birthday from "../assets/birthday.jpg";

function Services() {

  const services = [
    {
      title: "Weddings",
      image: wedding,
      desc: "Beautiful wedding celebrations filled with elegance, joy, and timeless traditions.",
    },

    {
      title: "Reception",
      image: reception,
      desc: "Celebrate unforgettable receptions with grand décor and warm hospitality.",
    },

    {
      title: "Corporate Events",
      image: corporate,
      desc: "Professional events and gatherings hosted with comfort and sophistication.",
    },

    {
      title: "Birthday Celebrations",
      image: birthday,
      desc: "Create joyful birthday memories with vibrant décor and festive arrangements.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-ivory py-32 px-6 md:px-16"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-redGold mb-4">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-brown mb-8 leading-tight">
            Celebrate Every Occasion Beautifully
          </h2>

          <p className="text-brown text-lg max-w-3xl mx-auto leading-9">
            From weddings to grand celebrations,
            every event is designed with elegance,
            tradition, and unforgettable experiences.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[40px] shadow-2xl cursor-pointer"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[550px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10 w-full">

                <div className="w-20 h-[3px] bg-gold mb-6"></div>

                <h3 className="text-4xl md:text-5xl font-bold text-cream mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-200 text-lg leading-8 max-w-lg">
                  {service.desc}
                </p>

                <button className="mt-8 border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-brown transition duration-300 font-semibold">
                  Explore More
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;