import React from "react";
import UseFetch from "../../hooks/UseFetch";
import BookCard from "../components/Cards/BookCard";

const MostReadBooks = () => {
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/books`
  );

  const mostReadBooks = data?.filter((book) => book.tag === "Most Download");

  return (
    <div className=" px-4 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Most Read Books</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {mostReadBooks.slice(0, 5).map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default MostReadBooks;
