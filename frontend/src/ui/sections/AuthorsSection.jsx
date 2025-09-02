import React, { useContext, useEffect, useState } from "react";
// import UseFetch from "../../hooks/UseFetch";
import { Link, useSearchParams } from "react-router";
import AuthorCard from "../components/Cards/AuthorCard";
import TopSection from "../components/Common/TopSection";
import { AppContext } from "../../context/AppContext";

const AuthorsSection = () => {
  // const [searchParams] = useSearchParams();
  // const { data, isLoading } = UseFetch(
  //   `/authors?${searchParams.toString()}`
  // );

    const { authors, authorLoading } = useContext(AppContext);

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(1); 

  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth >= 768) {
        setGroupSize(3); 
      } else {
        setGroupSize(1);
      }
    };

    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  const groupedData = [];
  for (let i = 0; i < authors?.length; i += groupSize) {
    groupedData.push(authors.slice(i, i + groupSize));
  }

  console.log("AUTHORS in component:", authors); 
  return (
    <div className="lg:max-w-[1200px] mx-auto lg:mb-[80px] my-8">
      <Link to={`authors`}>
        <TopSection title="All Authors" />
      </Link>

      {authorLoading ? (
        <p>Loading...</p>
      ) : authors && authors.length > 0 ? (
        <>
          <div className="relative w-full overflow-hidden my-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentGroupIndex * 100}%)` }}
            >
              {groupedData.map((group, i) => (
                <div key={i} className="w-full shrink-0 flex gap-6 px-5 md:px-0">
                  {group.map((item) => (
                    <div
                      key={item._id}
                      className="w-full "
                      style={{ flex: groupSize === 3 ? "1" : "none" }}
                    >
                      <AuthorCard author={item} />
                    </div>
                  ))}
                </div>
              ))}

                  {groupedData.slice(0,3).map((group, i) => (
                <div key={i} className="w-full shrink-0 flex gap-6 px-5 md:px-0 md:hidden">
                  {group.map((item) => (
                    <div
                      key={item._id}
                      className="w-full "
                      style={{ flex: groupSize === 3 ? "1" : "none" }}
                    >
                      <AuthorCard author={item} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-[30px] gap-2">
              {groupedData.slice(0,3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentGroupIndex(idx)}
                  className={`h-[16px] w-[16px] rounded-full transition-all duration-300 border border-text-dark-gray ${
                    currentGroupIndex === idx
                      ? "bg-azure-blue"
                      : "bg-ice-blue"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 py-10">No Authors Found</p>
      )}
    </div>
  );
};

export default AuthorsSection;
