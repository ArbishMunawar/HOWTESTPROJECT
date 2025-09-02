const CommentCard = ({ name, email, text, date, isReply }) => (
  <div className={`p-4  rounded mb-4 bg-[#F9F9F9] ${isReply ? "ml-8" : ""}`}>
    <div className="flex justify-between text-sm text-gray-500 mb-2">
      <span className="font-semibold text-gray-900">{name}</span>
      <span>{date}</span>
    </div>
    {email && <p className="text-sm text-gray-600 mb-1">{email}</p>}
    <p className="text-gray-800 text-sm">{text}</p>
  </div>
);

const CommentsSection = () => {
  return (
    <div className="mt-10">
      <h3 className="text-[20px] font-[600] text-[#231F20] mb-[40px]">All Comments & Replies</h3>

      <CommentCard
        name="Ralph Edwards"
        text="In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque..."
        date="Aug 18, 2021"
      />

      <CommentCard
        name="Ralph Edwards"
        email="ralph@whademail.com"
        text="In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque..."
        date="Aug 18, 2021"
      />

      <CommentCard
        name="John E. Konrad"
        text="Fringilla pharetra vel massa enim sollicitudin cras..."
        date="Aug 18, 2021"
      />

      <CommentCard
        name="Ralph Edwards"
        text="In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque..."
        date="Aug 19, 2021"
        isReply
      />

      <CommentCard
        name="John E. Konrad"
        text="Fringilla pharetra vel massa enim sollicitudin cras..."
        date="Aug 20, 2021"
      />
    </div>
  );
};

export default CommentsSection;
