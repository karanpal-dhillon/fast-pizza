import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm w-32 sm:w-64 focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-200 "
        placeholder="Order #"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
