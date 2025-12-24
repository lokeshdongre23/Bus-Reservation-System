interface BusCardProps {
  busName: string;
  busNum: string;
  totalSeat: number;
  source: string;
  destination: string;
  fair: number;
}

function BusCard({
  busName,
  busNum,
  totalSeat,
  source,
  destination,
  fair,
}: BusCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold underline">{busName}</h2>

      <p className="text-sm text-gray-600">Bus No: {busNum}</p>

      <div className="mt-2 text-sm">
        <p>
          <strong>Total Seats:</strong> {totalSeat}
        </p>
        <p>
          <strong>Source:</strong> {source}
        </p>
        <p>
          <strong>Destination:</strong> {destination}
        </p>
        <p>
          <strong>Fair:</strong>${fair}
        </p>
      </div>

      <button
        onClick={() => {}}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Book Seat
      </button>
    </div>
  );
}

export default BusCard;
