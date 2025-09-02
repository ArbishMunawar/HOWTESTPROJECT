import React, { useState,useEffect } from "react";
import Logo from "../../../assets/images/Logo.png";
import MenuIcon from "../../../assets/icons/MenuIcon";
import CrossIcon from "../../../assets/icons/CrossIcon";
import LeftArrowIcon from "../../../assets/icons/LeftArrow";
import { ChevronRight, Search } from "lucide-react";
import WriteForUsButton from "../Button/WriteForUsButton";
import NavSearch from "../../components/Common/NavSearch";
import { useSearch } from "../../../hooks/searchContet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import NavAdd from "../../components/Common/NavAdd";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("main");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { input, setInput, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(input);
    setInput("");
    setMobileSearchOpen(false);
    navigate("/search");
  };

  const subMenus = {
    Blog: [
      { label: "Blogs", path: "/categories/Blogs" },
      { label: "CSS Essays", path: "/categories/CSS Essays" },
      { label: "PMS Essays", path: "/categories/PMS Essays" },
      { label: "Civil Judge Essays", path: "/categories/Civil Judge Essays" },
      { label: "CSS Solved Papers", path: "/categories/CSS Solved Papers" },
      {
        label: "PMS Ministerial Essays",
        path: "/categories/PMS Ministerial Essays",
      },
    ],
    Books: [
      { label: "All Books", path: "/booksdetail/all" },
      { label: "FPSC Books", path: "/booksdetail/fpsc" },
      { label: "PPSC Books", path: "/booksdetail/ppsc" },
      { label: "PMA Books", path: "/booksdetail/pma" },
      { label: "Current Affairs", path: "/booksdetail/Current Affairs" },
    ],
    Mock: [
      { label: "All Mocks", path: "/booksdetail/all" },
      { label: "FPSC Mocks", path: "/booksdetail/fpsc" },
      { label: "PPSC Mocks", path: "/booksdetail/ppsc" },
    ],
    Other: [
      { label: "Online Mocks", path: "/online-mocks" },
      { label: "Recommended Articles", path: "/recommended" },
      { label: "Current Affairs", path: "/booksdetail/Current Affairs" },
      { label: "Write For Us", path: "" },
      { label: "Privacy Policy", path: "" },
      { label: "FAQs", path: "" },
      { label: "Courses", path: "/categories/Courses" },
    ],
  };


  

  return (
    <nav className="bg-white shadow-3xl w-full relative z-50 ">
      <div className="lg:max-w-[1200px] mx-auto ">
        <div className="lg:hidden flex justify-between items-center px-6 lg:max-w-[1200px] mx-auto">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[50px] h-[50px] cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
              <Search />
            </button>
            <button
              onClick={() => {
                setMobileOpen(true);
                setActiveSubMenu("main");
              }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="md:hidden px-4 py-2 bg-white shadow">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded px-4 py-2 text-sm"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
        )}

        {mobileOpen && (
          <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <img src={Logo} alt="Logo" className="w-10" />
              <button onClick={() => setMobileOpen(false)}>
                <CrossIcon />
              </button>
            </div>

            {activeSubMenu === "main" && (
              <ul className="space-y-4 text-xl">
                <li className="font-bold">Explore</li>
                <li
                  onClick={() => setActiveSubMenu("Blog")}
                  className={`cursor-pointer flex items-center justify-between ${
                    activeSubMenu === "Blog" ? "text-[#3874FF] font-[600]" : ""
                  }`}
                >
                  Blog Categories <ChevronRight className="w-5 h-5 " />
                </li>
                <li
                  onClick={() => setActiveSubMenu("Books")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Online Books <ChevronRight className="w-5 h-5 " />
                </li>
                <li
                  onClick={() => setActiveSubMenu("Mock")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Mock Tests <ChevronRight className="w-5 h-5 " />
                </li>
                <li
                  onClick={() => setActiveSubMenu("Other")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Other Pages <ChevronRight className="w-5 h-5 " />
                </li>
              </ul>
            )}

            {activeSubMenu !== "main" && (
              <>
                <div className="flex items-center gap-4 mt-2 mb-4">
                  <button onClick={() => setActiveSubMenu("main")}>
                    <LeftArrowIcon />
                  </button>
                  <h2 className="text-xl font-semibold capitalize">
                    {activeSubMenu}
                  </h2>
                </div>
                <ul className="space-y-5 text-gray-700 text-lg">
                  {subMenus[activeSubMenu]?.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-10 text-center text-sm text-gray-500">
              <p className="mb-2">Connect With Us</p>
              <div className="flex justify-center gap-4 text-xl">
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter" />
                <i className="fab fa-instagram" />
              </div>
              <p className="mt-4 text-xs">© 2024 All rights reserved</p>
            </div>
          </div>
        )}

        <div className="hidden lg:flex items-center justify-between z-10">
          <div className="flex items-center gap-6">
            <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />
            <div
              className="relative group"
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
                if (isDropdownOpen) {
                  setActiveMenu(null);
                }
              }}
            >
              <button className="flex items-center font-semibold text-sm text-text-gray">
                Explore
                <ChevronRight
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className=" fixed left-0 top-5 mt-9 bg-white shadow-md rounded w-screen z-50">
                  <h2 className="lg:max-w-[1200px] mx-auto pt-[40px] text-small-medium font-[600]">
                    Explore
                  </h2>
                  <div className="flex gap-[30px] py-[30px] lg:max-w-[1200px] mx-auto">
                    <ul className="space-y-4 text-[16px] text-rasin-black  border-r border-border-gray pr-6">
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Blog");
                        }}
                        className="cursor-pointer flex items-center pr-[149px] hover:text-blue-600"
                      >
                        Blog Categories
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Books");
                        }}
                        className="cursor-pointer flex items-center justify-between hover:text-blue-600"
                      >
                        Online Books
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Mock");
                        }}
                        className="cursor-pointer flex items-center justify-between hover:text-blue-600"
                      >
                        Mock Tests
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Other");
                        }}
                        className="cursor-pointer flex items-center justify-between "
                      >
                        Other Pages
                      </li>
                    </ul>

                    <div className="text-sm text-gray-600">
                      {activeMenu && (
                        <ul className="space-y-3">
                          {subMenus[activeMenu]?.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={item.path}
                                className="hover:text-blue-600"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* <div className="flex gap-10 max-w-md  w-full"> */}
          <div className="flex gap-6 items-center">
            <NavSearch />
            <WriteForUsButton>Write For Us</WriteForUsButton>
            {/* {user ? (
              <>
                <Link to="/dashboard">
                  <button className="text-blue-500 cursor-pointer">
                    Dashboard
                  </button>
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-blue-500 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="text-blue-500 cursor-pointer">LogIn</button>
              </Link>
            )} */}

            {/* </div> */}

            <Link to="/login">
                <button className="text-blue-500 cursor-pointer">LogIn</button>
              </Link>
          </div>
        </div>
      </div>
      <NavAdd />
    </nav>
  );
};

export default Navbar;
