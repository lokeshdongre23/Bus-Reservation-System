import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confirmation from "../components/Confirmation";

interface BookingResult {
  message: string;
  busNumber: string;
  numOfSeats: number;
}

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state as BookingResult | null;

  React.useEffect(() => {
    if (!bookingData) {
      navigate("/search");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Confirmation
        title="Booking Confirmed!"
        message={bookingData.message}
        details={{
          busNumber: bookingData.busNumber,
          numOfSeats: bookingData.numOfSeats,
        }}
        onClose={() => navigate("/")}
      />
    </div>
  );
}

export default ConfirmationPage;
