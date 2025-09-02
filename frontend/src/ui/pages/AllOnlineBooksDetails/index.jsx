import React, { useState } from "react";
import UseFetch from "../../../hooks/UseFetch";
import Tabs from "../../components/Common/Tabs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BookCard from "../../components/Cards/BookCard";
import MetricsSection from "../../sections/MetricsSection";
import SubscribeSection from "../../sections/SubscribeSection";

const AllOnlineBooksDetails = () => {
  const { category } = useParams();

  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/books`
  );

  const booksTabs = [
    { label: "All Articles", value: "all" },
    { label: "Recommended", value: "Recommended" },
    { label: "Most Download", value: "Most Download" },
  ];

  const normalizedCategory = category?.toLowerCase();

  const filteredBooks =
    activeTab === "all"
      ? data?.filter((item) =>
          normalizedCategory === "all"
            ? true
            : item.category?.toLowerCase() === normalizedCategory
        )
      : data?.filter(
          (item) =>
            item.tag === activeTab &&
            (normalizedCategory === "all"
              ? true
              : item.category?.toLowerCase() === normalizedCategory)
        );

  return (
    <>
      <div className="relative">
        <div className="bg-gradient-to-r from-[#fef6f6] to-[#f0fdfd] pb-54 pt-30 px-4 md:pb-28 md:p-30 ">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            <h3 className="text-center text-rasin-black text-[24px] font-semibold capitalize">
              {normalizedCategory}
            </h3>
            <p className="hidden lg:block text-[18px] font-normal text-[#767070] text-center  max-w-2xl mt-2">
              Meet the expert authors behind HowTests' top books, creating
              high-quality study materials for competitive exam aspirants.
              Explore their work and boost your exam preparation with
              trusted resources!
            </p>
            <MetricsSection className="absolute w-full top-40 md:top-30 lg:top-50" />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 md: mt-60 lg:mt-20">
        <Tabs
          title="All books"
          tabs={booksTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="md:max-w-full lg:max-w-[100%]"
        />

        {isLoading ? (
          <p className="text-center py-10">Loading...</p>
        ) : filteredBooks && filteredBooks.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
              {filteredBooks.map((item) => (
                <Link to={`/book/${item.id}`}>
                  <BookCard
                   id={item.id}
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 py-10">No Books Found</p>
        )}
      </div>
        <SubscribeSection />
    </>
  );
};

export default AllOnlineBooksDetails;
