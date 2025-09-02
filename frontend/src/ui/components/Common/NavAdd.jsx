import React from "react";
import { X } from "lucide-react";
import Button from "../Button/Button";

const NavAdd = () => {
  return (
    <div className="bg-[#FFF9A9] text-[12px] lg:text-[16px] font-[400]">
      <div className="relative pt-[12px] pb-[10px] lg:max-w-[1200px] mx-auto text-[#666666] flex justify-center items-center">
        <div className="flex items-center gap-[10px] lg:gap-[20px]">
          Want to read more stories?
          <Button className="px-[11px] py-[2.7px] text-[12px] lg:text-[16px] lg:rounded-[4px]">
            Read Now!
          </Button>
        </div>

        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8F8F8F]">
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default NavAdd;
