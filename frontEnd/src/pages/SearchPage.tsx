import React from "react";
import { useNavigate } from "react-router-dom";
import SearchForm, { Bus } from "../components/SearchForm";

function SearchPage() {
  const navigate = useNavigate();

  const handleSelect = (bus: Bus) => {
    navigate(`/booking/${bus.busNum}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <SearchForm onSelect={handleSelect} />
    </div>
  );
}

export default SearchPage;
