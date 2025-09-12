import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="flex items-center bg-white border-black rounded-lg shadow-sm overflow-hidden w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-3 py-2 text-sm border-none text-black focus:outline-none"
        placeholder="Search..."
      />
      <button className="px-3 py-4 bg-gray-200 hover:bg-gray-300 text-gray-700">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
