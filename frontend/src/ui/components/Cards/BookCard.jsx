import React from 'react';
import {Link} from 'react-router-dom'
const BookCard = ({id, image, title, author }) => {
  return (
    //  <Link to={`/book/${id}`}>
    <div className="bg-white rounded-lg overflow-hidden   flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-[70%] object-cover" 
        
      />
      <div className="py-4 md:px-3 flex-grow">
        <h3 className="text-small-medium font-bold text-left text-rasin-black line-clamp-2">
          {title}
        </h3>
        <p className="text-extra-small text-text-gray mt-1 line-clamp-2">
          {author}
        </p>
      </div>
    </div>
    // </Link>
  );
};

export default BookCard;
