import { motion } from "framer-motion";

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";

function GallerySection() {

  const images = [
    {
      image: gallery1,
      title: "Weddings",
      desc: "Traditional wedding mandaps and royal ceremonies.",
    },

    {
      image: gallery2,
      title: "Reception Stages",
      desc: "Elegant reception setups with premium décor.",
    },

    {
      image: gallery3,
      title: "Floral Decorations",
      desc: "Beautiful floral arrangements crafted for celebrations.",
    },

    {
      image: gallery4,
      title: "Dining Arrangements",
      desc: "Grand dining experiences with elegant hospitality.",
    },

    {
      image: gallery5,
      title: "Wedding Lighting",
      desc: "Cinematic lighting arrangements for magical celebrations.",
    },

    {
      image: gallery6,
      title: "Premium Decorations",
      desc: "Luxury event decoration setups for unforgettable moments.",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-cream to-ivory py-32 px-6 md:px-16"
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
            Event Showcase
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-brown mb-8">
            Beautiful Event Experiences
          </h2>

          <p className="text-brown text-lg leading-9 max-w-3xl mx-auto">
            Explore elegant wedding arrangements, floral decorations,
            reception stages, lighting setups, and beautifully organized celebrations.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">

          {images.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[35px] shadow-2xl cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8">

                <div className="w-20 h-[3px] bg-gold mb-5"></div>

                <h3 className="text-cream text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-lg leading-7">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default GallerySection;