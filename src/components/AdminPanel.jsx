import { useEffect, useState } from "react";

function AdminPanel() {

  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {

    const storedDates =
      JSON.parse(localStorage.getItem("bookedDates")) || [];

    setBookedDates(storedDates);

  }, []);

  const removeDate = (dateToRemove) => {

    const updatedDates = bookedDates.filter(
      (date) => date !== dateToRemove
    );

    setBookedDates(updatedDates);

    localStorage.setItem(
      "bookedDates",
      JSON.stringify(updatedDates)
    );

  };

  const clearAllBookings = () => {

    localStorage.removeItem("bookedDates");

    setBookedDates([]);

  };

  return (
    <section className="min-h-screen bg-ivory py-32 px-6 md:px-16">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-redGold mb-4">
            Admin Dashboard
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-brown mb-8">
            Booking Management
          </h1>

          <p className="text-brown text-lg leading-9 max-w-3xl mx-auto">
            Manage reserved dates, remove unavailable bookings,
            and monitor venue reservations professionally.
          </p>

        </div>

        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-14">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

            <h2 className="text-3xl font-bold text-maroon">
              Reserved Dates
            </h2>

            <button
              onClick={clearAllBookings}
              className="bg-red-700 text-white px-8 py-4 rounded-full hover:bg-red-800 transition duration-300 font-semibold shadow-lg"
            >
              Clear All Bookings
            </button>

          </div>

          {bookedDates.length === 0 ? (

            <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-3xl text-lg">

              ✅ No booked dates currently available.

            </div>

          ) : (

            <div className="space-y-6">

              {bookedDates.map((date, index) => (

                <div
                  key={index}
                  className="bg-cream border border-gold rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg"
                >

                  <div>

                    <h3 className="text-2xl font-bold text-maroon mb-2">
                      Reserved Date
                    </h3>

                    <p className="text-brown text-lg">
                      {date}
                    </p>

                  </div>

                  <button
                    onClick={() => removeDate(date)}
                    className="bg-maroon text-cream px-8 py-3 rounded-full hover:bg-[#5A1111] transition duration-300 font-semibold"
                  >
                    Remove Booking
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default AdminPanel;