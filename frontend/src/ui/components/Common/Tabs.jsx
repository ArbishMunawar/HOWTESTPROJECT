import React, { useState } from "react";
import RMenuIcon from "../../../assets/icons/RMenuIcon";
import SortIcon from "../../../assets/icons/SortIcon";

const Tabs = ({ tabs,activeTab, setActiveTab,className="",title="" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className={`lg:border-b lg:border-gray-200 border-0 lg:py-[20px] bg-white  lg:max-w-[65%] mx-5 lg:mx-0 mt-20 mb-10  ${className}`}>
      <div className="hidden md:hidden lg:flex md:justify-between gap-6 lg:max-w-[1200px] mx-auto px-4 lg:px-0">
        <div className="md:flex md:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={` transition-all duration-200 border-b-2 ${
                activeTab === tab.value
                  ? "border-rasin-black text-rasin-black font-semibold"
                  : "border-transparent text-text-gray hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="md:flex md:items-center border border-gray-400 rounded">
          <SortIcon />
          <select className="ml-auto  px-2 py-1 rounded text-sm">
            <option></option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-5 px-4 py-4 shadow-lg absolute top-24 right-0 left-0 bg-[#FCFCFC] z-20 ">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-sm flex items-center gap-1"
        >
          <RMenuIcon />
        </button>
        <h3 className="font-semibold text-base">{title}</h3>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden my-[55px]  space-y-2 absolute top-25 bg-[#FCFCFC] right-0 left-0 z-15">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={`block w-full text-left py-2 rounded px-3 text-sm ${
                activeTab === tab.value
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
