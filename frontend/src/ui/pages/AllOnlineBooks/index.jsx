import React ,{useState} from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom"; 
import Blog1 from "../../../assets/images/Blog1.png";
import { useSearch } from "../../../hooks/searchContet";
import Blog2 from "../../../assets/images/Blog2.png";
import Blog3 from "../../../assets/images/Blog3.png";
import { useNavigate } from "react-router-dom";
import Blog4 from "../../../assets/images/Blog4.png";
import SubscribeSection from "../../sections/SubscribeSection";

const AllOnlineBooks = () => {
  const categories = [
    { img: Blog1, label: "All Books" },
    { img: Blog2, label: "FPSC Books" },
    { img: Blog3, label: "PPSC Books" },
    { img: Blog4, label: "PMA Books" },
    { img: Blog1, label: "Featured" },
    { img: Blog3, label: "Microsoft Cares About Your Privacy" },
  ];
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
   const { input, setInput, setSearchQuery } = useSearch();
    const navigate = useNavigate();
  
    const handleSearch = () => {
      setSearchQuery(input);
      setInput("");
      setMobileSearchOpen(false);
      navigate("/search");
    };

  return (
    <>
      <div className="bg-gradient-to-r from-[#fef6f6] to-[#f0fdfd] py-[66px] px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h3 className="text-center text-[32px] font-semibold">
            Online Books
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
                 onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="bg-azure-blue text-white px-4 flex items-center justify-center">
              <Search />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 my-[80px]">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, index) => {
            const routeCategory = cat.label.replace(" Books", "").toLowerCase(); 

            return (
              <Link to={`/booksdetail/${routeCategory}`} key={index}>
                <div className="flex flex-col items-center md:items-start cursor-pointer">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full rounded-md"
                  />
                  <p className="mt-3 font-medium text-center md:text-left">
                    {cat.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
        <SubscribeSection />
    </>
  );
};

export default AllOnlineBooks;
