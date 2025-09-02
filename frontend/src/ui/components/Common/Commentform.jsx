import React from "react";
import Captcha from '../../../assets/images/captcha.png';
import Button from "../Button/Button";
const Commentform = () => {
  return (
    <div className="border border-[#D4D7E5] rounded-[9px] p-6 my-[40px] bg-white ">
      <h2 className="text-[20px] font-[600] text-[#231F20] mb-4">Comments</h2>
      <form className="space-y-4">
        <div className="  gap-4">
          <div className="">
            <label className="text-sm font-medium">Name </label>
            <input type="text" className="w-full mt-1 border border-[#E3E6ED] rounded p-2" placeholder="Write your name here" />
          </div>
          <div className="md:grid md:grid-cols-2 gap-5">
          <div className="mt-3">
            <label className="text-sm font-medium mt-3">Contact Number *</label>
            <input type="text" className="w-full mt-1 border border-[#E3E6ED] rounded p-2" placeholder="+92-302-000-5842" />
          </div>
          <div className="mt-3">
            <label className="text-sm font-medium ">Email *</label>
            <input type="email" className="w-full mt-1 border border-[#E3E6ED] rounded p-2" placeholder="Write your email here" />
            <div className="mt-1 text-sm text-gray-500">
              <input type="checkbox" className="mr-1" />
              Show it in my comment
            </div>
          </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="text-sm font-medium">Comments</label>
          <textarea className="w-full mt-1 border border-[#E3E6ED] rounded p-2" rows="4" placeholder="Write your Comments here"></textarea>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <input type="checkbox" />
          <label>Save my details in this browser for the next time I comment.</label>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <input type="checkbox" />
          <label>
            By commenting, you agree to Howtests <a href="#" className="text-[#3874FF]">Terms of Use</a> and acknowledge our <a href="#" className="text-[#3874FF]">Privacy Policy</a>.
          </label>
        </div>

        <div className="mt-4">
         
          <img src={Captcha} alt="" />
        </div>

        <div className="flex gap-3 mt-4">
          <button type="reset" className=" px-4 text-[#3874FF] bg-[#3874FF1A] py-2 rounded hover:bg-gray-50">Reset</button>
          <Button>Post Comment</Button>
        </div>
      </form>
    </div>
  );
};

export default Commentform