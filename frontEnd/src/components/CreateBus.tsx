import React, { useState } from "react";

interface BusFormData {
  busName: string;
  busNum: string;
  totalSeat: number;
  source: string;
  destination: string;
  fair: number;
}

function CreateBus() {
  const [formData, setFormData] = useState<BusFormData>({
    busName: "",
    busNum: "",
    totalSeat: 0,
    source: "",
    destination: "",
    fair: 0,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "totalSeat" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/buses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(formData);

      if (response.ok) {
        setMessage("Bus created.");
        setFormData({
          busName: "",
          busNum: "",
          totalSeat: 0,
          source: "",
          destination: "",
          fair: 0,
        });
      } else {
        setMessage("Failed to create bus.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Create New Bus
      </h2>

      {message && (
        <div className="mb-4 p-2 rounded text-sm bg-gray-100 text-gray-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label
            htmlFor="busNum"
            className="block text-sm font-medium text-gray-700"
          >
            Bus Number *
          </label>
          <input
            type="text"
            id="busNum"
            name="busNum"
            value={formData.busNum}
            onChange={handleChange}
            required
            placeholder="e.g., BUS-001"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="busName"
            className="block text-sm font-medium text-gray-700"
          >
            Bus Name *
          </label>
          <input
            type="text"
            id="busName"
            name="busName"
            value={formData.busName}
            onChange={handleChange}
            required
            placeholder="e.g., Express Traveler"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="totalSeat"
            className="block text-sm font-medium text-gray-700"
          >
            Total Seats *
          </label>
          <input
            type="number"
            id="totalSeat"
            name="totalSeat"
            value={formData.totalSeat || ""}
            onChange={handleChange}
            required
            min={1}
            placeholder="e.g., 40"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-700"
          >
            Source *
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            required
            placeholder="e.g., New York"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700"
          >
            Destination *
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            placeholder="e.g., Boston"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="fair"
            className="block text-sm font-medium text-gray-700"
          >
            Fair *
          </label>
          <input
            type="number"
            id="fair"
            name="fair"
            value={formData.fair}
            onChange={handleChange}
            required
            placeholder="e.g., $250"
            className="w-full px-3 py-2 border rounded focus:ring focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:bg-gray-400"
        >
          {loading ? "Creating..." : "Create Bus"}
        </button>
      </form>
    </div>
  );
}

export default CreateBus;
