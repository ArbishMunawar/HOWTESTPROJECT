import React from "react";
import Button from "../components/Button/Button";

const MetricsSection = ({ className = "" }) => {
  return (
    <>
      <div className={`lg:max-w-[1200px] mx-auto  ${className}`}>
        <div className="p-5 px-9 bg-white shadow-xl rounded-xl w-[89%] mx-auto my-[60px] lg:my-[80px] border border-dim-gray lg:grid lg:grid-cols-4 gap-6">
          <div className=" border-b border-text-dark-gray py-4 lg:border-b-0 lg:border-r ">
            <h2 className="font-[600] text-[15px] text-[#231F20]">Author</h2>

            <input
              type="text"
              placeholder="Type Author Name"
              className="font-[400] text-extra-small text-text-dark-gray  md:text-[16px] border-0 outline-0"
            />
          </div>
          <div className=" border-b border-text-dark-gray py-4 lg:border-b-0 lg:border-r">
            <h2 className="font-[600] text-small text-rasin-black">Title</h2>

            <input
              type="text"
              placeholder="Type the title"
              className="font-[400] text-small text-text-dark-gray  md:text-[16px] border-0 outline-0"
            />
          </div>

          <div className="  py-4 ">
            <h2 className="font-[600] text-small text-rasin-black">Keyword</h2>

            <input
              type="text"
              placeholder="Type Keyword"
              className="font-[400] text-small text-text-dark-gray  md:text-small border-0 outline-0"
            />
          </div>
          <Button className="w-full md:my-4">Search</Button>
        </div>

        {/* <div className="w-[89%] mx-auto flex flex-col  md:grid md:grid-cols-2 :grid-cols-2">
          <div className="flex justify-around items-center border-b   border-gray-400 pb-6 md:pb-0 md:border-b-0 md:border-r">
            <div className="border-r  border-gray-400 pr-7">
              <h2 className="font-bold text-4xl text-center">
                35<sup>+</sup>
              </h2 >
              <h2 className="text-gray-600  text-lg">Total Authors</h2>
            </div>
            <div>
              <h2 className="font-bold text-4xl text-center">
                500<sup>+</sup>
              </h2>
              <h2 className="text-gray-600 text-lg">Total Books</h2>
            </div>
          </div>


         <div className="flex justify-around items-center pt-6 md:pt-0">
            <div className="border-r border-gray-400 pr-6">
              <h2 className="font-bold text-4xl text-center">
                15k<sup>+</sup>
              </h2>
              <h2 className="text-gray-600 text-lg">Monthly Reader</h2>
            </div>

            <div>
              <h2 className="font-bold text-4xl text-center">
                23k<sup>+</sup>
              </h2>
              <h2 className="text-gray-600 text-lg">All Time Reader</h2>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MetricsSection;
