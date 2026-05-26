import { motion } from "framer-motion";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState, useEffect } from "react";
import { format } from "date-fns";

function BookingModal({ isOpen, setIsOpen }) {

  const [date, setDate] = useState(new Date());

  const [bookedDates, setBookedDates] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding",
    guests: "",
    details: "",
  });

  useEffect(() => {

    const storedDates =
      JSON.parse(localStorage.getItem("bookedDates")) || [];

    setBookedDates(storedDates);

  }, []);

  const formattedDate = format(date, "yyyy-MM-dd");

  const isBooked = bookedDates.includes(formattedDate);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (isBooked) return;

    const updatedDates = [...bookedDates, formattedDate];

    setBookedDates(updatedDates);

    localStorage.setItem(
      "bookedDates",
      JSON.stringify(updatedDates)
    );

    const message = `
Hello Kakaji Mangal Karyalay,

I would like to book an event.

Name: ${formData.name}

Phone: ${formData.phone}

Event Type: ${formData.eventType}

Guest Count: ${formData.guests}

Selected Date: ${formattedDate}

Additional Details:
${formData.details}
`;

    const whatsappURL =
      "https://wa.me/919307929029?text="
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    alert("Booking inquiry sent successfully!");

    setIsOpen(false);

  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-cream w-full max-w-4xl rounded-[40px] p-10 md:p-14 relative shadow-2xl overflow-y-auto max-h-[95vh]"
      >

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-8 text-3xl text-maroon font-bold"
        >
          ×
        </button>

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-redGold mb-4">
            Book Your Event
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">
            Plan Your Celebration
          </h2>

          <p className="text-brown text-lg leading-8">
            Fill in your details and check your preferred
            event date availability instantly.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8"
        >

          <div>

            <label className="block text-brown font-semibold mb-3">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-maroon bg-white"
            />

          </div>

          <div>

            <label className="block text-brown font-semibold mb-3">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-maroon bg-white"
            />

          </div>

          <div>

            <label className="block text-brown font-semibold mb-3">
              Event Type
            </label>

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-maroon bg-white"
            >

              <option>Wedding</option>
              <option>Reception</option>
              <option>Birthday</option>
              <option>Corporate Event</option>

            </select>

          </div>

          <div>

            <label className="block text-brown font-semibold mb-3">
              Guest Count
            </label>

            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Number of guests"
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-maroon bg-white"
            />

          </div>

          <div className="md:col-span-2">

            <label className="block text-brown font-semibold mb-5">
              Select Event Date
            </label>

            <div className="bg-white p-6 rounded-3xl border border-gray-300">

              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={({ date }) => {

                  const formatted =
                    format(date, "yyyy-MM-dd");

                  if (bookedDates.includes(formatted)) {
                    return "booked-date";
                  }

                }}
              />

            </div>

            <div className="mt-6">

              {isBooked ? (

                <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl">

                  ❌ This date is already reserved. Please select another available date.

                </div>

              ) : (

                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-2xl">

                  ✅ Congratulations! Your selected date is available for booking.

                </div>

              )}

            </div>

          </div>

          <div className="md:col-span-2">

            <label className="block text-brown font-semibold mb-3">
              Additional Details
            </label>

            <textarea
              rows="5"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your event..."
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 outline-none focus:border-maroon bg-white resize-none"
            ></textarea>

          </div>

          <div className="md:col-span-2 text-center mt-4">

            <button
              type="submit"
              disabled={isBooked}
              className={`px-12 py-5 rounded-full text-lg font-semibold transition duration-300 shadow-xl
              ${
                isBooked
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-maroon text-cream hover:bg-[#5A1111]"
              }`}
            >
              {isBooked
                ? "Date Unavailable"
                : "Submit Booking Request"}
            </button>

          </div>

        </form>

      </motion.div>

    </div>
  );
}

export default BookingModal;
