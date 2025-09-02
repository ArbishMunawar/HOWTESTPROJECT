import { Link } from "react-router";
import UseFetch from "../../../hooks/UseFetch";

const ExploreCategories = () => {
  const { data: articles } = UseFetch(
    `/articles`
  );

  const Categories = [...new Set(articles?.map((item) => item.category))];
  return (
    <div className="bg-white  rounded-lg p-4 mb-6 ">
      <h3 className="font-[500] text-[16px] text-[#4F4F4F] mb-3">
        Explore Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {Categories.map((cat) => (
      <Link to={`/categories/${cat}`}>
          <span
            key={cat}
            className="bg-gray-100 text-[12px] px-3 py-1 rounded-full text-[#4F4F4F]"
          >
            {cat}
          </span>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
