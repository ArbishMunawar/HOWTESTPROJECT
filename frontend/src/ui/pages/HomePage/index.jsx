import React from "react";
import welcomeImg from "../../../assets/images/welcomeImg.png";
import MetricsSection from "../../sections/MetricsSection";
import RecommendedSection from "../../sections/RecommendedSection";
import BlogCategorySection from "../../sections/BlogCategorySection";
import McqBooksSection from "../../sections/McqBooksSection";
import CommunitySection from "../../sections/CommunitySection";
import MoreStoriesSection from "../../sections/MoreStoriesSection";
import OnlineMocksSection from "../../sections/OnlineMocksSection";
import AuthorsSection from "../../sections/AuthorsSection";
import AccordianSection from "../../sections/AccordianSection";
import SubscribeSection from "../../sections/SubscribeSection";

const HomePage = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center  px-4 lg:px-0 lg:py-12">
        <div className="md:w-2/3">
          <h2 className="text-[24px] lg:text-[42px] font-[600] text-[#231F20] leading-[2.5rem] lg:leading-[3rem] pb-4">
            Welcome to Howtest, Pakistan's Significant Competitive Forum
          </h2>
          <p className="text-small lg:text-[20px] text-[#4F4F4F] leading-relaxed">
            HowTests helps millions of students and aspirants prepare effectively for competitive exams with expertly written MCQs, articles, essays, blogs, research, practice tests, and study resources. Enhance your learning and achieve excellence with confidence!
          </p>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img
            src={welcomeImg}
            alt="Welcome to Howtest"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>

      <MetricsSection />
      <RecommendedSection />
      <BlogCategorySection />
      <McqBooksSection />
      <CommunitySection />
      <OnlineMocksSection/>
      <AuthorsSection />
      <MoreStoriesSection/>
      <AccordianSection/>
      <SubscribeSection />
    </>
  );
};

export default HomePage;

