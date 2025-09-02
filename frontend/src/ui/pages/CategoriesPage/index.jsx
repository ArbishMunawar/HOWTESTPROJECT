import React, { useState } from "react";
import Tabs from "../../components/Common/Tabs";
import UseFetch from "../../../hooks/UseFetch";
import { createRoutesFromChildren, useSearchParams } from "react-router";
import RecommendedCard from "../../components/Cards/RecommendeCard";
import CourseBanner from "../../components/Common/CourseBanner";
import Sidebar  from "../../sections/RecommendedSidebar/Sidebar";
import SubscribeSection from '../../sections/SubscribeSection'
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";


const CategoriesPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
const { category } = useParams(); 
  const { data, isLoading } = UseFetch(
    `/articles`
  );
const allTabs= [
    { label: "All Articles", value: "all" },
    { label: "Recommended", value: "recommended" },
    { label: "Most Read", value: "mostRead" },
  ];
  const filteredArticles =data.filter(
    (item)=>item.category ===category &&
 (activeTab === "all" || item.tag === activeTab))
  return (
    <>
      <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE]">
        <h2 className="flex justify-center items-center pt-[110px] py-[69px] lg:py-[62px]  text-medium-large lg:text-normal font-[600]">
          {category ? ` ${category}` : "Recommended"}
        </h2>
      
      </div>

      <div className="lg:max-w-[1200px] mx-auto">
        <Tabs tabs={allTabs} activeTab={activeTab} setActiveTab={setActiveTab} title="Recommended"/>
        <div className=" md:flex ">
          <div className="">
            {isLoading ? (
              <p>Loading...</p>
            ) : filteredArticles.length > 0 ? (
              <div className=" mt-6">
                {filteredArticles.slice(0, 2).map((item) => (
                  <RecommendedCard
                    id={item.id}
                    key={item.id}
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

           
        <div className="lg:max-w-[1200px] mx-auto py-[50px] mr-[30px]">
          <CourseBanner
            className="py-[40px]  bg-gradient-to-r from-[#f7fffe] to-[#FBEEEE]"
            title="Want to Get Heard Like This Author?"
            story="Share your knowledge with millions of competitive exam aspirants worldwide. Publish your stories, articles, guidelines, etc. on HowTests and make a lasting impact on students' success."
            buttondata="Read More"
            />
           
        </div>

            {isLoading ? (
              <p>Loading...</p> 
            ) : filteredArticles.length > 0 ? (
              <div className=" mt-[40px]">
                {filteredArticles.slice(2).map((item) => (
                  <RecommendedCard
                   id={item.id}
                    key={item.id}
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
          <div className="hidden lg:block md:w-[30%]">
           <Sidebar/>
          </div>

        </div>
          <SubscribeSection/>
      </div>
    </>
  );
};

export default CategoriesPage;
