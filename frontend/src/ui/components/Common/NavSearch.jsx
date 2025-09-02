import React from "react";
import { useSearch } from "../../../hooks/searchContet";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavSearch = ({ className }) => {
  const navigate = useNavigate();
  const { input, setInput, setSearchQuery } = useSearch();
  const handleSearch = () => {
    setSearchQuery(input);
    navigate("/search");
    setInput("");
  };
  return (
    <div className={`relative flex justify-between ${className}`}>
      <input
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        type="text"
        placeholder="What you are looking for"
        className=" border border-[#DCDBDB99] rounded pl-[11px] pt-[6px] pb-[7px] h-[34px] w-[349px] pr-[7rem] text-sm font-ligt"
      />
      <div className="bg-blue-600 ">
        <button
          onClick={handleSearch}
          className="absolute right-0 rounded-tr h-[34px] w-[42px] rounded-br top-1/2 transform -translate-y-1/2 text-white bg-blue-600 flex items-center justify-center "
        >
          <Search />
        </button>
      </div>
    </div>
  );
};

export default NavSearch;
