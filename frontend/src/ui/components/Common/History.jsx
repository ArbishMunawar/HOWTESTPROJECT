import React, { useState } from "react";
import HistoryCheck from "../../../assets/icons/HistoryCheck";
import ArticleHistoryIcon from "../../../assets/icons/ArticleHistory";

const ArticleHistory = ({ author, date, qualifications, degree, position }) => (
  <div className="relative pl-6 my-[40px]">
    <div className="absolute left-3  h-[110px] top-17 border-l-[2px] border-[#4F4F4F66]"></div>

    <div className=" mb-6  flex absolute left-0">
      <HistoryCheck />
      <h4 className="font-semibold text-blue-600 ml-4 ">History</h4>
    </div>

    <div className="absolute left-2 mr-4 top-11 w-3 h-3 bg-gray-700 rounded-full"></div>
    <div className="relative top-10">
      <h4 className="font-bold text-[16px] my-5">{date}</h4>
      <p className="mt-1 text-gray-700 text-sm">
        <span className="font-medium">Written By</span>
        <br />
       {author} <br />
       {qualifications} in {degree}<br />
        Deputy Director NAB
      </p>
    </div>
  </div>
);

const UpdateHistory = () => (
  <div className="pl-6 text-sm text-gray-700">
    <p className="mb-3">
      {" "}
      <strong>10 May 2025</strong>: Article reviewed for accuracy.
    </p>
    <p className="mb-3">
      {" "}
      <strong>15 May 2025</strong>: Minor grammar fixes and SEO update.
    </p>
  </div>
);

const HistoryTabs = ({ author, date, qualifications, degree, position }) => {
  const [activeTab, setActiveTab] = useState("article");

  return (
    <div className="max-w-md my-[40px]">
      <div className="flex items-center gap-10  pb-2 mb-4">
        <button
          className={`flex items-center gap-2 pb-1 border-b-2 ${
            activeTab === "article"
              ? "text-black border-black font-semibold"
              : "text-gray-500 border-transparent"
          }`}
          onClick={() => setActiveTab("article")}
        >
          <ArticleHistoryIcon /> Article History
        </button>
        <button
          className={`flex items-center gap-2 pb-1 border-b-2 ${
            activeTab === "update"
              ? "text-black border-black font-semibold"
              : "text-gray-500 border-transparent"
          }`}
          onClick={() => setActiveTab("update")}
        >
          <ArticleHistoryIcon 
          />
             Update History
        </button>
      </div>

      <div>
        {activeTab === "article" ? <ArticleHistory 
          author={author}
           date={date}
            qualifications={qualifications}
            degree={degree}/> : <UpdateHistory />}
      </div>
    </div>
  );
};

export default HistoryTabs;
