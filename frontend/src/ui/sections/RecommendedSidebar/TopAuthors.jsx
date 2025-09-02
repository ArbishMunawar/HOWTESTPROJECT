import AuthorS from '../../../assets/images/AuthorS.png'
import { ArrowLeft, ArrowRight } from "lucide-react";
const TopAuthors = () => (
  <div className="bg-white rounded-lg p-4 mb-6 ">
    <div className="flex justify-between items-center mb-3">
      <h3 className=" text-[18px] font-[600]">Top Authors</h3>
      <div className="flex gap-2 items-center text-[14px]">
      <p className=" text-[#3874FF] ">View All</p>
        <button className="h-[1rem] w-[1rem] border border-[#3874FF] flex items-center justify-center bg-[#F5F5F5] rounded-full">
            <ArrowRight className=" text-[#3874FF] " />
          </button>

      </div>
    </div>
    {[AuthorS, AuthorS, AuthorS].map((_, i) => (
      <div key={i} className="flex items-center mb-4">
        <img
          src={AuthorS}
          alt="Author"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div>
          <p className="font-medium text-sm text-gray-900">Sayed Kazim Ali</p>
         <div className="flex gap-2 items-center text-[14px]">
      <p className=" text-[#3874FF] text-[12px] ">View Author</p>
        <button className="h-[0.8rem] w-[0.9rem]  border-[#3874FF] flex items-center justify-center rounded-full">
            <ArrowRight className=" text-[#3874FF] " />
          </button>

      </div>
        </div>
      </div>
    ))}
  </div>
);

export default TopAuthors