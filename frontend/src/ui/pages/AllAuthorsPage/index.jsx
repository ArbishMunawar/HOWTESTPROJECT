import React, { useContext } from "react";
import UseFetch from "../../../hooks/UseFetch";
import { Link, useSearchParams } from "react-router";
import AuthorCard from "../../components/Cards/AuthorCard";
import { Search } from "lucide-react";
import { AppContext } from "../../../context/AppContext";
const AllAuthorsPage = () => {
  // const [searchParams] = useSearchParams();
  // const { data, isLoading } = UseFetch(
  //   `/authors?${searchParams.toString()}`
  // );
  const { authors, authorLoading } = useContext(AppContext);

  return (
    <>
      <div className="bg-gradient-to-r from-[#fef6f6] to-[#f0fdfd] p-5  py-[52px] lg:py-[68px] ">
         <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h3 className="text-center text-[32px] font-semibold">
            All Authors
          </h3>
          <p className="hidden md:block text-[18px] font-normal text-[#767070] text-center max-w-2xl ">
            Meet the expert authors behind HowTests' top books, creating
            high-quality study materials for competitive exam aspirants. Explore
            their work and boost your exam preparation with trusted resources!
          </p>

          <div className="relative flex w-[90%] md:w-[60%] lg:w-[40%] bg-white mt-6 rounded overflow-hidden border border-[#DCDBDB99]">
            <input
              type="text"
              placeholder="Type for Search..."
              className="flex-grow text-text-gray placeholder-[#C4C4C4] py-3 px-4 text-sm outline-none"
              
            />
            <button className="bg-azure-blue text-white px-4 flex items-center justify-center">
              <Search />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1200px] mx-auto py-[50px] lg:py-[80px] px-5 lg:px-0">
        {authorLoading ? (
          <p>Loading...</p>
        ) : authors && authors.length > 0 ? (
          <>
            <div className="md:hidden flex flex-col  gap-10  ">
              {authors.map((author) => (
                <div
                  key={author._id}
                  className="min-w-[100%] max-w-[100%] flex-shrink-0"
                >
                  <AuthorCard key={author._id} author={author.name}/>
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
              {authors.map((author) => (
                <AuthorCard key={author._id} author={author.name} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 py-10">No Authors Found</p>
        )}
      </div>
    </>
  );
};

export default AllAuthorsPage;
