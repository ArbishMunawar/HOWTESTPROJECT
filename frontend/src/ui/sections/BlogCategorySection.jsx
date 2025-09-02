import React from "react";
import Blog1 from '../../assets/images/Blog1.png';
import Blog2 from '../../assets/images/Blog2.png';
import Blog3 from '../../assets/images/Blog3.png';
import Blog4 from '../../assets/images/Blog4.png';

const BlogCategorySection = () => {
  const categories = [
    { img: Blog1, label: "CSS" },
    { img: Blog2, label: "PMS" },
    { img: Blog3, label: "Current Affairs" },
    { img: Blog4, label: "Featured" },
  ];

  return (
    <div className="lg:max-w-[1200px] mx-auto mb-20 px-4  my-16">
      <h2 className="text-[#231F20]  text-[22px] md:text-[25px] font-[600]  lg:text-[32px] lg:font-[600] my-6">Blog Categories</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-4 md:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[160px] flex-shrink-0 md:min-w-0 md:w-full"
          >
            <img src={cat.img} alt={cat.label} className="w-full rounded-md" />
            <p className="text-left mt-2 font-medium">{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategorySection;
