import React from "react";
import { FaSearch } from "react-icons/fa";


function SearchInput() {
  return (
    <form className="flex items-center gap-2" >
      <label className="input input-bordered flex items-center ">
        <input type="text" className="grow input-bordered " placeholder="Search..." />
        <kbd className="kbd kbd-sm">ctrl</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <button type="submit" class="btn btn-square rounded-xl text-white">
        <FaSearch className="h-5 w-5" />
      </button>
    </form>
  );
}

export default SearchInput;
