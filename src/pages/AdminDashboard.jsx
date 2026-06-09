import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBookings = async () => {
    const snapshot = await getDocs(
      collection(db, "bookings")
    );

    const bookingList = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    bookingList.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setBookings(bookingList);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this booking?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "bookings", id));

    fetchBookings();
  };

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "/management";
  };

  const filteredBookings = bookings.filter((booking) =>
    (
      booking.name +
      booking.phone +
      booking.date +
      booking.eventType
    )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const weddingCount = bookings.filter(
    (b) => b.eventType === "Wedding"
  ).length;

  const receptionCount = bookings.filter(
    (b) => b.eventType === "Reception"
  ).length;

  const birthdayCount = bookings.filter(
    (b) => b.eventType === "Birthday"
  ).length;

  const corporateCount = bookings.filter(
    (b) => b.eventType === "Corporate Event"
  ).length;

  const haldiCount = bookings.filter(
    (b) => b.eventType === "Haldi"
  ).length;

  return (
    <div className="min-h-screen bg-[#111] text-white p-6 md:p-10">

      <h1 className="text-red-500 text-6xl">
  NEW DASHBOARD TEST
</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

        <h1 className="text-4xl md:text-5xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 px-5 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">

        <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-gray-700">
          <h2 className="text-3xl font-bold">
            {bookings.length}
          </h2>
          <p>Total</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-gray-700">
          <h2 className="text-3xl font-bold">
            {weddingCount}
          </h2>
          <p>Wedding</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-gray-700">
          <h2 className="text-3xl font-bold">
            {receptionCount}
          </h2>
          <p>Reception</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-gray-700">
          <h2 className="text-3xl font-bold">
            {birthdayCount}
          </h2>
          <p>Birthday</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-gray-700">
          <h2 className="text-3xl font-bold">
            {corporateCount}
          </h2>
          <p>Corporate</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-5 text-center border border-gray-700">
          <h2 className="text-3xl font-bold">
            {haldiCount}
          </h2>
          <p>Haldi</p>
        </div>

      </div>

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search by name, phone, date or event..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full p-4 rounded-lg bg-[#1a1a1a] border border-gray-700 outline-none"
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-700">

          <thead className="bg-[#222]">

            <tr>

              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Event</th>
              <th className="p-3 border">Guests</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredBookings.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center p-6"
                >
                  No bookings found
                </td>

              </tr>

            ) : (

              filteredBookings.map((booking) => (

                <tr key={booking.id}>

                  <td className="p-3 border">
                    {booking.name}
                  </td>

                  <td className="p-3 border">
                    {booking.phone}
                  </td>

                  <td className="p-3 border">
                    {booking.eventType}
                  </td>

                  <td className="p-3 border">
                    {booking.guests}
                  </td>

                  <td className="p-3 border">
                    {booking.date}
                  </td>

                  <td className="p-3 border">

                    <button
                      onClick={() =>
                        deleteBooking(booking.id)
                      }
                      className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;