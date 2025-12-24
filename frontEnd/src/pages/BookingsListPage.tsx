import React, { useEffect, useState } from "react";

interface Booking {
  _id?: string;
  busNumber: string;
  numOfSeats: number;
  createdAt?: string;
  updatedAt?: string;
}

function BookingsListPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:3000/booking");
        if (!res.ok) throw new Error("Failed to fetch bookings");
        const data = await res.json();
        setBookings(data);
      } catch (e: any) {
        setError(e?.message || "Network error");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">All Bookings</h2>

      {loading && (
        <div className="text-sm text-gray-600">Loading bookings...</div>
      )}
      {error && (
        <div className="mb-4 p-3 rounded text-sm bg-red-100 text-red-700 border border-red-200">
          {error}
        </div>
      )}

      {!loading && bookings.length === 0 && (
        <div className="text-sm text-gray-600">No bookings found.</div>
      )}

      {!loading && bookings.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Bus Number
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Number of Seats
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Booked At
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, idx) => (
                <tr key={b._id || idx} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {b.busNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {b.numOfSeats}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                    {b.createdAt
                      ? new Date(b.createdAt).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        Total Bookings: <span className="font-semibold">{bookings.length}</span>
      </div>
    </div>
  );
}

export default BookingsListPage;
