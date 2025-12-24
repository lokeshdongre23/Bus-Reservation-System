import React, { useEffect, useState } from "react";

export interface Bus {
  _id?: string;
  busName: string;
  busNum: string;
  totalSeat: number;
  source: string;
  destination: string;
  fair: number;
}

interface SearchFormProps {
  onSelect?: (bus: Bus) => void;
}

function SearchForm({ onSelect }: SearchFormProps) {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [busNum, setBusNum] = useState("");
  const [buses, setBuses] = useState<Bus[]>([]);
  const [filtered, setFiltered] = useState<Bus[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBuses = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:3000/buses");
        // console.log("buses hit...");
        if (!res.ok) throw new Error("Failed to fetch buses");
        const data = await res.json();
        setBuses(data);
        setFiltered(data);
      } catch (e: any) {
        setError(e?.message || "Network error");
      } finally {
        setLoading(false);
      }
    };
    fetchBuses();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const s = source.trim().toLowerCase();
    const d = destination.trim().toLowerCase();
    const n = busNum.trim().toLowerCase();

    const results = buses.filter((b) => {
      const bySource = s ? b.source.toLowerCase().includes(s) : true;
      const byDest = d ? b.destination.toLowerCase().includes(d) : true;
      const byNum = n ? b.busNum.toLowerCase().includes(n) : true;
      return bySource && byDest && byNum;
    });
    setFiltered(results);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Search Buses</h2>

      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
      >
        <input
          className="px-3 py-2 border rounded focus:ring focus:border-blue-500"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          className="px-3 py-2 border rounded focus:ring focus:border-blue-500"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          className="px-3 py-2 border rounded focus:ring focus:border-blue-500"
          placeholder="Bus Number"
          value={busNum}
          onChange={(e) => setBusNum(e.target.value)}
        />
        <button
          type="submit"
          className="md:col-span-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Search
        </button>
      </form>

      {loading && <div className="text-sm text-gray-600">Loading...</div>}
      {error && (
        <div className="mb-3 p-2 rounded text-sm bg-red-100 text-red-700 border border-red-200">
          {error}
        </div>
      )}

      <ul className="divide-y">
        {filtered.map((b) => (
          <li
            key={b._id || b.busNum}
            className="py-3 flex items-center justify-between"
          >
            <div>
              <div className="font-medium text-gray-800">
                {b.busName} ({b.busNum})
              </div>
              <div className="text-sm text-gray-600">
                {b.source} → {b.destination} · Seats: {b.totalSeat} · Fare: $
                {b.fair}
              </div>
            </div>
            {onSelect && (
              <button
                className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                onClick={() => onSelect(b)}
              >
                Select
              </button>
            )}
          </li>
        ))}
        {!loading && filtered.length === 0 && (
          <li className="py-3 text-sm text-gray-600">No buses found.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchForm;
