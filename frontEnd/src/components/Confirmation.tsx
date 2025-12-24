import React from "react";

interface ConfirmationProps {
  title?: string;
  message: string;
  details?: { busNumber: string; numOfSeats: number };
  onClose?: () => void;
}

function Confirmation({
  title = "Confirmation",
  message,
  details,
  onClose,
}: ConfirmationProps) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="mb-3 p-3 rounded bg-green-100 text-green-800 border border-green-200">
        {message}
      </div>
      {details && (
        <div className="text-sm text-gray-700 mb-4">
          <div>
            Bus Number: <span className="font-medium">{details.busNumber}</span>
          </div>
          <div>
            Seats: <span className="font-medium">{details.numOfSeats}</span>
          </div>
        </div>
      )}
      {onClose && (
        <button
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      )}
    </div>
  );
}

export default Confirmation;
