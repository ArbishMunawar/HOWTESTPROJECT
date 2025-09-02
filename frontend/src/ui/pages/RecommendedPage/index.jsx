import React, { useContext, useState } from "react";
import Tabs from "../../components/Common/Tabs";
// import UseFetch from "../../../hooks/UseFetch";
// import { useSearchParams } from "react-router";
import RecommendedCard from "../../components/Cards/RecommendeCard";
import CourseBanner from "../../components/Common/CourseBanner";
import Sidebar from "../../sections/RecommendedSidebar/Sidebar";
import SubscribeSection from "../../sections/SubscribeSection";
import { AppContext } from "../../../context/AppContext";

const RecommendedPage = () => {
  // const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");

  // const { data, isLoading } = UseFetch(
  //    `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/article/`
  // );

    const {  articles, isLoading } = useContext(AppContext);
  const allTabs = [
    { label: "All Articles", value: "all" },
    { label: "Recommended", value: "recommended" },
    { label: "Most Read", value: "mostRead" },
  ];

  const filteredArticles =
    activeTab === "all" ? articles : articles.filter((item) => item.tag === activeTab);

  return (
    <>
      <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE]">
        <h2 className="flex justify-center items-center pt-[110px] py-[70px] lg:py-[64px] text-medium-large lg:text-normal font-[600]">
          Recommended
        </h2>
      </div>

      <div className="lg:max-w-[1200px] mx-auto">
        <Tabs
          tabs={allTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Recommended"
        />
        <div className=" lg:flex justify-between ">
          <div className=" ">
            {isLoading ? (
              <p>Loading...</p>
            ) : filteredArticles.length > 0 ? (
              <div className=" mt-6">
                {filteredArticles.slice(0, 2).map((item) => (
                  <RecommendedCard
                    id={item._id}
                    key={item._id}
                    image={item.image}
                    title={item.title}
                    summary={item.summary}
                    date={item.date}
                    views={item.views}
                    author={item.author}
                  />
                ))}
              </div>
            ) : (
              <p>No Articles Found</p>
            )}
            <div className="lg:pr-14">
              <CourseBanner
                title="Looking to Learn CSS, PMS English?"
                story=" If you want to learn English Essay and Precis for CSS, PMS, Judiciary,
                or One Paper Exams, join Sir Syed Kazim Ali, Pakistan’s top English
                teacher with the highest success rate of his students for years. Start
                your journey to success today!"
                buttondata="Explore Courses"
              />
            </div>
            {isLoading ? (
              <p>Loading...</p>
            ) : filteredArticles.length > 0 ? (
              <div className=" mt-[40px]">
                {filteredArticles.slice(2).map((item) => (
                  <RecommendedCard
                    id={item._id}
                    key={item._id}
                    image={item.image}
                    title={item.title}
                    summary={item.summary}
                    date={item.date}
                    views={item.views}
                    author={item.author}
                  />
                ))}
              </div>
            ) : (
              <p>No Articles Found</p>
            )}
          </div>
          <div className="hidden lg:block md:w-[23.33%]">
            <Sidebar />
          </div>
        </div>
        <SubscribeSection />
      </div>
    </>
  );
};

export default RecommendedPage;
