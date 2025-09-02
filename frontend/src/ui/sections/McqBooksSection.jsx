// import React, { useContext, useState } from "react";
// // import UseFetch from "../../hooks/UseFetch";
// // import { useSearchParams } from "react-router";
// import TopSection from "../components/Common/TopSection";
// import BookCard from "../components/Cards/BookCard";
// import { Link } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";
// const McqBooksSection = () => {
//   // const [searchParams] = useSearchParams();
//   // const { books, isLoading } = UseFetch(
//   //   `/books?${searchParams.toString()}`
//   // );

//   // const [activeIndex, setActiveIndex] = useState(0);
//   const { books, booksLoading } = useContext(AppContext);

//   return (
//     <div className="lg:max-w-[1200px] mx-auto my-[80px]">
//       <Link to={`books`}>
//         <TopSection title="All MCQs Books" />
//       </Link>
//       <div>
//         {booksLoading ? (
//           <p>Loading...</p>
//         ) : books.length > 0 ? (
//           <>
//             <div className="md:hidden flex overflow-x-auto gap-4 px-4 scrollbar-hide scroll-smooth">
//               {books.slice(0, 5).map((item) => (
//                 <div
//                   key={item._id}
//                   className="min-w-[48%] max-w-[48%] flex-shrink-0"
//                 >
//                   <BookCard
//                     image={item.image}
//                     title={item.title}
//                     // subtitle={item.subtitle}
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="hidden md:grid grid-cols-5 md:w-full lg:grid-cols-5 xl:grid-cols-5 gap-6 mt-6">
//               {/* {books.slice(0, 5).map((item ) => (
//                 <BookCard
//                   key={item._id}
//                   image={item.image}
//                   title={item.title}
//                   // subtitle={item.subtitle}
//                 />
//               ))} */}
//               {books.slice(0, 5).map(item => console.log(item))
// }
//             </div>
//           </>
//         ) : (
//           <p className="text-center text-gray-500 py-10">No Books Found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default McqBooksSection;






import React, { useContext } from "react";
import TopSection from "../components/Common/TopSection";
import BookCard from "../components/Cards/BookCard";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const McqBooksSection = () => {
  const { books, booksLoading } = useContext(AppContext);

  console.log("Books in component:", books); 

  return (
    <div className="lg:max-w-[1200px] mx-auto my-[80px]">
      <Link to={`books`}>
        <TopSection title="All MCQs Books" />
      </Link>

      {booksLoading ? (
        <p className="text-center py-10">Loading...</p>
      ) : books.length > 0 ? (
        <>
          {/* Mobile / small screens */}
          <div className="md:hidden flex overflow-x-auto gap-4 px-4 scrollbar-hide scroll-smooth">
            {books.slice(0, 5).map((item) => (
              <div
                key={item._id}
                className="min-w-[48%] max-w-[48%] flex-shrink-0"
              >
                <BookCard
                  image={item.image}
                  title={item.title}
                  author={item.author?.name}
                />
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-5 md:w-full lg:grid-cols-5 xl:grid-cols-5 gap-6 mt-6">
            {books.slice(0, 5).map((item) => (
              <BookCard
                key={item._id}
                image={item.image}
                title={item.title}
                author={item.author?.name}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 py-10">No Books Found</p>
      )}
    </div>
  );
};

export default McqBooksSection;
