import React, { useRef, useState, useEffect, useContext } from "react";
// import UseFetch from "../../hooks/UseFetch";
// import { useSearchParams } from "react-router";
import Card from "../components/Cards/Card";
import TopSection from "../components/Common/TopSection";
import { Link } from "react-router";
import { AppContext } from "../../context/AppContext";

const RecommendedSection = () => {
  // const [searchParams] = useSearchParams();

//  const { data, isLoading } = UseFetch(
//   `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/article?${searchParams.toString()}`
// );

const {  articles, isLoading } = useContext(AppContext)
  // console.log(data,"data");
  
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 390;

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] py-[41px] md:py-[75px] lg:py-[75px]">
      <div className="lg:max-w-[1200px] mx-auto px-4">
        <Link to={`recommended`}>
          <TopSection title="Recommended" subtitle="View All" />
        </Link>
        {isLoading ? (
          <p>Loading...</p>
        ) : articles && articles.length > 0 ? (
          <>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:hidden text-rasin-black lg:text-[22px] lg:font-[500]"
            >
              {articles.slice(0, 4).map((item, idx) => (
                <div key={item._id} className="min-w-[90px] flex-shrink-0">
                  <Card image={item.image} id={item._id} title={item.title} />
                </div>
              ))}
            </div>
                                                                        
            <div className="flex justify-center gap-2 md:hidden">
              {articles.slice(0, 4).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-[12px] w-[12px] rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-azure-blue " : "bg-text-dark-gray"
                  }`}
                ></button>
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6  ">
              {articles.slice(0, 4).map((item) => (
                <Card key={item._id} image={item.image} id={item._id} title={item.title} />
              ))}
            </div>
          </>
        ) : (
          <p>No Articles Found</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedSection;
