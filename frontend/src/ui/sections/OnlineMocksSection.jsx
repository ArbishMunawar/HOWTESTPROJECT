import React, { useState } from "react";
import UseFetch from "../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import TopSection from "../components/Common/TopSection";
import BookCard from "../components/Cards/BookCard";

const OnlineMocksSection = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `/books?${searchParams.toString()}`
  );

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="lg:max-w-[1200px] mx-auto lg:my-[80px] my-6">
      <TopSection title="All Online Mocks" />

      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : data.length > 0 ? (
          <>
            <div className="md:hidden flex overflow-x-auto gap-4 px-4 scrollbar-hide scroll-smooth">
              {data.slice(0,5).map((item) => (
                <div
                  key={item.id}
                  className="min-w-[48%] max-w-[48%] flex-shrink-0"
                >
                  <BookCard
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-5 md:w-full lg:grid-cols-5 xl:grid-cols-5 gap-6 mt-6">
              {data.slice(0,5).map((item) => (
                <BookCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-text-gray py-10">No Books Found</p>
        )}
      </div>
    </div>
  );
};

export default OnlineMocksSection;
