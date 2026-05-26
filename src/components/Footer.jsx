import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

function Footer() {

  return (

    <footer
      id="footer"
      className="bg-gradient-to-br from-[#4A0D0D] via-[#5A0E0E] to-[#2A0606] text-cream py-28 px-6 md:px-16"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-gold mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Plan Your
            <span className="block text-gold mt-4">
              Dream Celebration
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-10">
            Connect with Kakaji Mangal Karyalay for weddings,
            receptions, engagements, birthdays,
            and unforgettable celebrations crafted beautifully.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white/5 border border-gold/10 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl hover:-translate-y-2 transition duration-500">

            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8">

              <FaPhoneAlt className="text-gold text-3xl" />

            </div>

            <h3 className="text-3xl font-bold mb-6">
              Call Us
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              Speak directly with our management team
              for bookings and celebration planning.
            </p>

            <a
              href="tel:+919307929029"
              className="inline-block bg-gold text-[#4A0D0D] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
            >
              Call Now
            </a>

          </div>

          <div className="bg-white/5 border border-gold/10 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl hover:-translate-y-2 transition duration-500">

            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8">

              <FaWhatsapp className="text-gold text-4xl" />

            </div>

            <h3 className="text-3xl font-bold mb-6">
              WhatsApp
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              Chat instantly with us regarding venue availability,
              event planning, and premium arrangements.
            </p>

            <a
              href="https://wa.me/919307929029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-[#4A0D0D] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
            >
              Chat on WhatsApp
            </a>

          </div>

          <div className="bg-white/5 border border-gold/10 backdrop-blur-xl rounded-[35px] p-10 shadow-2xl hover:-translate-y-2 transition duration-500">

            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8">

              <FaMapMarkerAlt className="text-gold text-4xl" />

            </div>

            <h3 className="text-3xl font-bold mb-6">
              Visit Venue
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              Visit Kakaji Mangal Karyalay and experience
              our luxurious venue,
              elegant arrangements,
              and premium celebration atmosphere.
            </p>

            <a
              href="https://www.google.com/maps/place/Kakaji+Mangal+Karyalay/@21.2765762,74.7417904,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdf2566f332091b:0x653d6311d211a1ea!8m2!3d21.2765762!4d74.7443653!16s%2Fg%2F11h18lxkgp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-[#4A0D0D] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
            >
              Open Maps
            </a>

          </div>

        </div>

        <div className="mt-24 border-t border-gold/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h3 className="text-3xl font-bold text-gold mb-3">
              Kakaji Mangal Karyalay
            </h3>

            <p className="text-gray-400 text-lg">
              Luxury Weddings • Celebrations • Traditions
            </p>

          </div>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-[#4A0D0D] transition duration-300"
            >

              <FaInstagram className="text-2xl" />

            </a>

            <a
              href="https://wa.me/919307929029"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-[#4A0D0D] transition duration-300"
            >

              <FaWhatsapp className="text-2xl" />

            </a>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;