import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TopSection = ({
  className = "",
  title = "Recommended",
  subtitle = "View All",
}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 px-5 lg:px-0 ">
        <h1 className={`text-medium lg:text-normal font-[600]  ${className}`}>
          {title}
        </h1>
        <div className="flex items-center gap-4 cursor-pointer">
          <p className="text-extra-small lg:text-small-medium text-azure-blue">{subtitle}</p>
          <button className="h-[20px] w-[21px] border border-azure-blue flex items-center justify-center  rounded-full">
            <ArrowRight className=" text-azure-blue " />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopSection;
