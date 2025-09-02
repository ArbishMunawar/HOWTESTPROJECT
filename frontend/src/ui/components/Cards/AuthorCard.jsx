import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import defaultAuthorImg from "../../../assets/images/userDeafult.png";


const backendUrl = import.meta.env.VITE_REACT_APP_API_URL; 

const AuthorCard = ({ author }) => {
  return (

    <Link to={`/author/${author._id}`}>
    <div className="w-full rounded-[10px] border border-light-gray text-center  ">
        <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] p-6 rounded-tr-[10px] rounded-tl-[10px]">
      <img
        src={author.image ? backendUrl + author.image : defaultAuthorImg}
        alt={author.name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-small-medium font-semibold text-rasin-black flex items-center justify-center gap-1">
        {author.name}
      </h3>
      <p className="text-gray-600 text-sm">{author.bio}</p>
      </div>

      <div className="flex justify-center gap-8 text-extra-small font-medium border-t border-t-dim-gray pt-4  ">
        <div>
          <p className="text-rasin-black font-bold text-small-medium">{author.articlesPublished}</p>
          <span className="text-text-gray text-md">Articles Published</span>
        </div>
        
        <div className="w-[1px] h-[48px] bg-[linear-gradient(to_bottom,_#FFFFFF,_#C4C4C4,_#FFFFFF)]" />

        <div>
          <p className="text-rasin-black font-bold text-small-medium">{author.totalReaders}</p>
          <span className="text-text-gray text-extra-small">Total Readers</span>
        </div>
      </div>
      <div className="flex justify-center ">
      <button className="mt-4  hover:underline font-normal text-small pb-4 flex items-center justify-center gap-3">
        Visit Author 
        <ArrowRight className="w-5 h-5" />
      </button>
      </div>
    </div>
    </Link>
  );
};

export default AuthorCard;
