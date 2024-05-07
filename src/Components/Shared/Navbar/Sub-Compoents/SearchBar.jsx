import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

export default function SearchBar() {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Search by Product"
          className="px-4 py-3 rounded-lg w-full"
        />
        <span className="-ml-10">
          <SearchIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>
    </div>
  );
}
