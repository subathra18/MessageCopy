import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className=" flex justify-center align-center pt-10 gap-2">
      <label className="input border-slate-100 shadow-sm flex justify-center items-center gap-2 h-16 w-1/2 rounded-lg">
        <CiSearch></CiSearch>
        <input
          type="text"
          className="grow placeholder:tracking-widest placeholder:text-xl"
          placeholder="Find your message"
        />
      </label>
    </div>
  );
};

export default Search;
