import React from 'react';
import UseFetch from "../../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import RecommendedCard from "../../components/Cards/RecommendeCard";

const FromCategory = () => {
  const [searchParams] = useSearchParams();

  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/articles`
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.length > 0 ? (
        
        <div className="mt-6 bg-[#F9F9F9] p-5">
          <h2 className='lg:text-medium font-[600] text-small-medium text-rasin-black'>From This Category</h2>
          {data.slice(0,2).map((item) => (
            <RecommendedCard
              key={item.id}
              id={item.id}
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


       {isLoading ? (
        <p>Loading...</p>
      ) : data && data.length > 0 ? (
        <div className="mt-6 bg-[#F9F9F9] p-5">
           <h2 className='lg:text-medium font-[600] text-small-medium text-rasin-black'>Latest Articles</h2>
          {data.slice(0,2).map((item) => (
            <RecommendedCard
              key={item.id}
              id={item.id}
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
    </>
  );
};

export default FromCategory;
