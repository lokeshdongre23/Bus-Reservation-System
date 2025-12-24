import { Routes, Route, Link } from "react-router-dom";
import BusList from "./components/BusList";
import CreateBus from "./components/CreateBus";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import BookingsListPage from "./pages/BookingsListPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white p-4 shadow">
        <div className="max-w-5xl mx-auto flex gap-4">
          <Link to="/" className="font-semibold hover:underline">
            Home
          </Link>
          <Link to="/search" className="font-semibold hover:underline">
            Search Buses
          </Link>
          <Link to="/create" className="font-semibold hover:underline">
            Create Bus
          </Link>
          <Link to="/bookings" className="font-semibold hover:underline">
            View Bookings
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBus />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/booking/:busNum" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/bookings" element={<BookingsListPage />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bus Booking System
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Select an option to get started
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          to="/search"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Search & Book
        </Link>
        <Link
          to="/create"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded"
        >
          Create Bus
        </Link>
      </div>
    </div>
  );
}

export default App;
