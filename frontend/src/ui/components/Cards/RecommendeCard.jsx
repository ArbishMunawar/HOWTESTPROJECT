import React from "react";
import DateIcon from "../../../assets/icons/DateIcon";
import EyeIcon from "../../../assets/icons/EyeIcon";
import AuthorIcon from "../../../assets/icons/AuthorIcon";
import { Link } from "react-router";
const RecommendedCard = ({
  id,
  bio,
  title,
  summary,
  date,
  views,
  author,
  image,
  category,
}) => {
  return (
    <Link to={`/articles/${id}`}>
      <div className="  md:w-full flex my-[30px] gap-x-4 lg:gap-x-9 lg:my-11 px-5 lg:px-0">
        <div className="lg:h-full lg:w-[280px] w-[102px] md:[105px] ">
          <img
            src={image}
            alt={title}
            className="w-[100%] rounded-lg mb-4 "
          ></img>
        </div>
        <div className=" w-[70%] lg:w-[60%] md:w-[90%]">
          <div>
            <h2 className=" text-[16px] lg:text-[22px] font-[500] text-text-gray lg:text-wrap hover:text-azure-blue cursor-pointer ellipse">
              {title}
            </h2>

            <p className="hidden md:block text-text-gray text-sm  ">
              {summary}
            </p>
          </div>

          <div className="flex items-center  text-[12px]  text-text-gray  pt-3">
            <div className="flex  border-r border-text-dark-gray  gap-2 pr-2">
              <DateIcon />
              <span>{date}</span>
            </div>

            <div className="flex gap-2 items-center pl-2 pr-2">
              <EyeIcon />
              <span>{views}</span>
            </div>

            <div className="hidden md:block md:flex md:items-center gap-2 border-l border-text-dark-gray pl-3 items-center ">
              <AuthorIcon />
              <span>{author?.name}</span>
            </div>

            {/* <span className=" hidden md:block font-medium text-gray-700">{author}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedCard;
