import { useEffect, useState } from "react";
import { db } from "../firebase";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

function AdminPanel() {

  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {

    const querySnapshot = await getDocs(
      collection(db, "bookings")
    );

    const bookingData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setBookings(bookingData);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const removeBooking = async (id) => {

    await deleteDoc(doc(db, "bookings", id));

    fetchBookings();
  };

  return (
    <section className="min-h-screen bg-ivory py-32 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-redGold mb-4">
            Admin Dashboard
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-brown mb-8">
            Booking Management
          </h1>

          <p className="text-brown text-lg leading-9 max-w-3xl mx-auto">
            View all booking requests received from customers.
          </p>

        </div>

        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-14">

          <h2 className="text-3xl font-bold text-maroon mb-10">
            Customer Bookings
          </h2>

          {bookings.length === 0 ? (

            <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-3xl text-lg">
              No bookings found.
            </div>

          ) : (

            <div className="space-y-8">

              {bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="bg-cream border border-gold rounded-3xl p-8 shadow-lg"
                >

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <h3 className="font-bold text-maroon">
                        Customer Name
                      </h3>
                      <p>{booking.name}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-maroon">
                        Phone Number
                      </h3>
                      <p>{booking.phone}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-maroon">
                        Event Type
                      </h3>
                      <p>{booking.eventType}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-maroon">
                        Guest Count
                      </h3>
                      <p>{booking.guests}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-maroon">
                        Event Date
                      </h3>
                      <p>{booking.date}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-maroon">
                        Additional Details
                      </h3>
                      <p>{booking.details}</p>
                    </div>

                  </div>

                  <button
                    onClick={() =>
                      removeBooking(booking.id)
                    }
                    className="mt-8 bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition"
                  >
                    Delete Booking
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