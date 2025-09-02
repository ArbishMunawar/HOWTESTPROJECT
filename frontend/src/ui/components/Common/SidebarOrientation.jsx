import React from "react";
import DOG from "../../../assets/images/DOG.jpg";
import Button from "../Button/Button";
const SidebarOrientation = () => {
  return (
    <div className="bg-[#F9F9F9] rounded-10px p-3 my-6">
      <img src={DOG} alt=""  className="h-[250px] w-[250px] object-cover rounded-[10px]"/>
      <h2 className="text-[#231F20] text-[20px] font-[600] my-5">
        A 3-Day Free Online Orientation Session for CSS & Aspirants (60){" "}
      </h2>
      <p className="text-[#231F20] text-[16px] font-[400] mb-5">A 3-Day Free Online Orientation Session for CSS and PMS Aspirants A 3-Day Free  (100 Characters)</p>
      <Button className="px-0 text-[16px] font-[400]">Explore the course</Button>
    </div>
  );
};

export default SidebarOrientation;
