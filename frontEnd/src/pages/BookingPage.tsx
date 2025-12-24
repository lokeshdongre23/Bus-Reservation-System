import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

interface BookingResult {
  message: string;
  busNumber: string;
  numOfSeats: number;
}

function BookingPage() {
  const { busNum } = useParams<{ busNum: string }>();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<BookingResult | null>(null);

  useEffect(() => {
    if (!busNum) {
      navigate("/search");
    }
  }, [busNum, navigate]);

  const handleBooked = (result: BookingResult) => {
    setBookingData(result);
    // Navigate to confirmation with state
    navigate("/confirmation", { state: result });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-4">
        <button
          onClick={() => navigate("/search")}
          className="text-blue-600 text-sm"
        >
          ← Back to Search
        </button>
      </div>
      <BookingForm busNumber={busNum} onBooked={handleBooked} />
    </div>
  );
}

export default BookingPage;
