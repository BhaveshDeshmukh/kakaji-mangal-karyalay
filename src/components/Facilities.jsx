import { motion } from "framer-motion";

function Facilities() {
  const facilities = [
    {
      title: "800+ Guest Capacity",
      icon: "👥",
      description:
        "Spacious venue designed to comfortably accommodate large gatherings and grand celebrations.",
    },
    {
      title: "Large Parking Area",
      icon: "🚗",
      description:
        "Ample parking space available for guests, ensuring a convenient and hassle-free experience.",
    },
    {
      title: "AC Hall",
      icon: "❄️",
      description:
        "Fully air-conditioned hall providing comfort and elegance throughout every season.",
    },
    {
      title: "Decoration Services",
      icon: "🌸",
      description:
        "Beautiful and customizable decoration arrangements for weddings and special events.",
    },
    {
      title: "Catering Available",
      icon: "🍽️",
      description:
        "Delicious catering services with a variety of menu options to suit every celebration.",
    },
    {
      title: "Power Backup",
      icon: "⚡",
      description:
        "Reliable power backup system ensuring uninterrupted events and functions.",
    },
    {
      title: "Bridal Room",
      icon: "👰",
      description:
        "Private and comfortable bridal room with elegant interiors for special preparations.",
    },
  ];

  return (
    <section
      id="facilities"
      className="bg-[#FFF8EE] py-32 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#B8860B] mb-4">
            Venue Facilities
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-[#3B1F1F] mb-8">
            Everything You Need
          </h2>

          <p className="text-[#4A2C2A] text-lg max-w-3xl mx-auto">
            Premium facilities and professional arrangements
            designed to make every celebration unforgettable.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((facility, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-[35px] p-8 shadow-xl border border-[#E7D2A6] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
            >

              <div className="text-5xl mb-5">
                {facility.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#3B1F1F] mb-4">
                {facility.title}
              </h3>

              <p className="text-[#4A2C2A] leading-7">
                {facility.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;