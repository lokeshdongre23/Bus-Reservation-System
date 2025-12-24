import React, { useState } from "react";

interface BookingFormProps {
  busNumber?: string;
  onBooked?: (result: {
    message: string;
    busNumber: string;
    numOfSeats: number;
  }) => void;
}

function BookingForm({ busNumber = "", onBooked }: BookingFormProps) {
  const [busNum, setBusNum] = useState(busNumber);
  const [numOfSeats, setNumOfSeats] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ busNumber: busNum, numOfSeats }),
      });
      const data = await res.json();

      if (res.ok) {
        const msg = data?.message || "Booking successful";
        setMessage(msg);
        onBooked?.({ message: msg, busNumber: busNum, numOfSeats });
        setNumOfSeats(1);
      } else {
        setMessage(data?.message || "Booking failed");
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Book Seats</h2>

      {message && (
        <div className="mb-4 p-2 rounded text-sm bg-gray-100 text-gray-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="busNumber"
          >
            Bus Number *
          </label>
          <input
            id="busNumber"
            type="text"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
            value={busNum}
            onChange={(e) => setBusNum(e.target.value)}
            required
            placeholder="e.g., BUS-001"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="numOfSeats"
          >
            Number of Seats *
          </label>
          <input
            id="numOfSeats"
            type="number"
            min={1}
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
            value={numOfSeats}
            onChange={(e) => setNumOfSeats(Number(e.target.value))}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
