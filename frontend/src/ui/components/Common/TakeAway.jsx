import React from "react";
import bg3 from "../../../assets/images/bg3.jpg";
import Logo from "../../../assets/images/Logo.png";
import Button from "../Button/Button";
import History from "../Common/History";
import ReviewArticle from "./ReviewArticle";
import Commentform from "../Common/Commentform";
import CommentsSection from "../Common/CommentsSection";
import FromCategory from "../Common/FromCategory";
import { useParams } from "react-router";
import UseFetch from "../../../hooks/UseFetch";
const TakeAway = () => {
  const { id } = useParams();
  const { data } = UseFetch(`/authors/${id}`);
  return (
    <>
      <div className="text-[15px] md:text-[18px] lg:text-[18px] font-[400] text-[#4F4F4F]">
        <h2 className="text-[#231F20] text-[20px] font-[700] md:text-[24] mb-[20px]">
          TakeAway
        </h2>
        <p>
          There’s no cure for migraine, including refractory chronic migraine.
          Management of the condition means trying to reduce your number of
          migraine days by Preventive treatment aims to reduce the frequency,
          severity, and duration of migraine episodes before they start. Options
          include medications and procedures, as well as lifestyle changes and
          behavioral therapy.
        </p>

        <div className="bg-[#F9F9F9] rounded-[10px] my-[40px]">
          <div className=" p-5 md:flex  md:gap-10 ">
            <img
              src={bg3}
              alt=""
              className="rounded-[10px] md:mt-7 md:w-[40%] md:h-[70%] lg:w-[185px] lg:h-[185px]"
            />
            <div className="">
              <h2 className="text-[20px] font-[700] text-[#231F20] py-[40px]">
                Heading of the ad goes here
              </h2>
              <p>
                Lorem Ipsu`m is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <Button className="my-5">Explore the course</Button>
            </div>
          </div>
          <div className="bg-[#EBF3F9] rounded-b-[10px] p-5 flex justify-between">
            <img src={Logo} alt="" className="w-[25px] h-[25px] rounded" />
            <p className="text-[12px] md:text-[14px] font-[500] text-[#231F20]">
              Advertise with Us
            </p>
          </div>
        </div>

        <h2 className="text-[#231F20] text-[20px] font-[700] md:text-[24] my-3">
          How we have reviewed this article!
        </h2>
        <p>
          At HowTests, every submitted article undergoes a careful editorial
          review to ensure it aligns with our content standards, relevance, and
          quality guidelines. Our team evaluates the article for accuracy,
          originality, clarity, and usefulness to competitive exam aspirants. We
          strongly emphasise human-written, well-researched content, but we may
          accept AI-assisted submissions if they provide valuable, verifiable,
          and educational information.
          <br />
          <br />
          Moreover, articles are evaluated based on academic credibility, expert
          input, and alignment with exam trends. Only those that meet our
          educational quality benchmarks are published. This process reflects
          our commitment to delivering reliable, high-quality resources. Learn
          more in our Editorial and Publishing Policy.
        </p>

        <History
          author={data?.author?.name}
          date={data?.createdAt}
          qualifications={data?.author?.qualifications}
          degree={data?.author?.degree}
          position={data?.author?.position}
        />

        <ReviewArticle />

        <Commentform />
        <CommentsSection />
        <Commentform />
        <FromCategory />
      </div>
    </>
  );
};

export default TakeAway;
