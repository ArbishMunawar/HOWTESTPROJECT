import React from 'react'
import UseFetch from "../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordianSection = () => {
    const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `/accordian?${searchParams.toString()}`
  );
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl lg:max-w-[1200px] mx-auto my-[80px] px-4 lg:px-0">
      <h2 className="text-medium lg:text-[32px] font-[600] mb-[40px]">FAQs</h2>
      <div className="space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className=" rounded-[10px] border border-dim-gray bg-[#F9F9F9]">
            <button
              onClick={() => toggleIndex(idx)}
              className="flex gap-5 md:gap-10  text-left items-center w-full px-[23px] py-[20px] lg:py-[30px] font-medium text-text-gray"
            >
              <div className='text-azure-blue bg-blue-100 rounded p-1'>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}</div>
              <span className='font-[600] lg:text-small'>{item.question}</span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 text-text-gray text-extra-small lg:text-small pl-[4rem] md:pl-[5.5rem]">
                {item.answer}
              </div>
            )} 
          </div>
        ))}
      </div>
    </div>
  );
};
  

export default AccordianSection