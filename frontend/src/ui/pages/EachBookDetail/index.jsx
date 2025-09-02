import React from "react";
import { useParams } from "react-router";
import UseFetch from "../../../hooks/UseFetch";
import DateIcon from "../../../assets/icons/DateIcon";
import EyeIcon from "../../../assets/icons/EyeIcon";
import ShareIcon from "../../../assets/icons/ShareIcon";
import ShareIconBorder from "../../../assets/icons/ShareIconBorder";
import Teracy from "../../../assets/images/Teracy.png";
import Button from "../../components/Button/Button";
import History from "../../components/Common/History";
import ReviewArticle from "../../components/Common/ReviewArticle";
import SubscribeSection from "../../sections/SubscribeSection";
import MostReadBooks from "../../sections/MostReadBooks";

const EachBookDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = UseFetch(
    `/books/${id}`
  );
  
  return (
    <>
      <div className="lg:max-w-[1200px] mx-auto mt-10">
        <div className="md:flex md:items-start gap-6">
          <div className="flex justify-center p-2 ">
            <img
              src={data.image}
              alt={data.title}
              className="w-[310px] h-auto max-h-[510px] object-contain"
            />
          </div>

          <div className="p-5 md:w-[70%]">
            <h1 className="text-[22px] font-[600] mb-4 lg:text-[40px] text-[#333333] lg:font-[600]">
              {data.title}
            </h1>

            <div className="flex">
              {data.image && (
                <img
                  src={Teracy}
                  alt={data.title}
                  className="mb-6 h-[60px] w-[60px]"
                />
              )}
              <div className="pl-4 md:w-[60%]">
                <div className="text-[#231F20] text-[14px] md:text-[16px] font-[500]">
                  <span>{data.author}</span>
                </div>
                <span className="text-[#787878] text-[12px] font-[400]">
                  {data.bio}
                </span>
                <div className="text-[#3874FF] text-[12px] font-[400]">
                  <a href="">View Author</a>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-y border-[#E5E7EB] mt-5">
              <div className="flex items-center text-[14px] text-[#787878] py-3 flex-wrap gap-x-4 gap-y-2">
                <div className="hidden md:flex items-center gap-2 border-r pr-3">
                  <DateIcon />
                  <span>{data.date}</span>
                </div>

                <div className="hidden md:flex items-center gap-2 border-r pr-3 pl-2">
                  <EyeIcon />
                  <span>{data.views}</span>
                </div>

                <div className="flex items-center gap-2 border-r pr-3">
                  <ShareIconBorder />
                  <span>{data.shared}</span>
                </div>

                <div className="flex items-center gap-2 pl-2">
                  <span>{data.downloaded}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <p className="hidden md:block text-[#787878] text-[14px]">
                  Share via
                </p>
                <ShareIcon />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[#7A7A7A] text-[16px] md:text-[18px] font-[400]">
                The Central Superior Services (CSS) exam in Pakistan is a highly
                competitive exam that requires meticulous preparation,
                especially for the MCQ-Based Preliminary Test (MPT), the first
                step of the CSS selection process. Therefore, success in the MPT
                is crucial, as it determines a candidate’s eligibility for the
                written exam. And a valuable resource to aid in this preparation
                is the{" "}
                <span className=" text-[#3874FF]">
                  "CSS Screening MCQs Book"
                </span>{" "}
                offered by HowTests.{" "}
                <span className="font-semibold">Overview of the Book:</span> The
                "CSS Screening MCQs Book" is a comprehensive compilation of
                multiple-choice questions (MCQs) tailored for aspirants aiming
                to excel in the CSS MPT exam. Notably, since 2022, over 100 MCQs
                from this collection have appeared in the actual CSS Screening
                Test, underscoring its relevance and effectiveness.
              </p>
              <Button className="my-5 text-[16px] font-[400]">Download</Button>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:max-w-[1200px] mx-auto px-4 mt-10">
            <div className="border-y border-y-[#E5E7EB]">
              <div className=" text-[#7A7A7A] text-[15px] my-10">
                <h2 className="font-[600] text-[#231F20] text-[20px] lg:text-[22px] mb-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[15px]">
                  <li>
                    <strong className="text-[16px] text-[#7A7A7A]">
                      Extensive Question Bank:
                    </strong>{" "}
                    The book encompasses a wide array of MCQs covering essential
                    subjects such as English, General Knowledge, Pakistan
                    Affairs, and Islamic Studies.
                  </li>
                  <li>
                    <strong className="text-[16px] text-[#7A7A7A]">
                      Expert Compilation:
                    </strong>{" "}
                    The questions have been meticulously compiled, created,
                    edited, and reviewed by experienced teachers, professionals,
                    and officers.
                  </li>
                  <li>
                    <strong className="text-[16px] text-[#7A7A7A]">
                      Flexible Formats:
                    </strong>{" "}
                    Available in:
                    <ul className="list-decimal list-inside ml-5 mt-1">
                      <li>
                        Without Answers: Ideal for self-assessment and practice.
                      </li>
                      <li>
                        With Answers: Facilitates immediate feedback and
                        learning.
                      </li>
                      <li>
                        With Explanations: In-depth understanding of concepts
                        and reasoning.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-[16px] text-[#7A7A7A]">
                      Free Download:
                    </strong>{" "}
                    The book is available for free download.
                  </li>
                </ul>
              </div>

              <div className=" mt-8">
                <h2 className=" font-[600] text-[#231F20] text-[20px] mb-4 lg:text-[22px]">
                  Why Choose This Book?
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-700">
                  <li>No Need to Pay, No Need to Buy</li>
                  <li>100% Online, 100% Free</li>
                  <li>Save Time, Money, & Energy</li>
                  <li>Free Access Anywhere, Anytime</li>
                  <li>5000+ MCQs with Answers</li>
                  <li>According to the Latest Exams’ Trends</li>
                  <li>Covering All Important Topics</li>
                  <li>Carrying All Repeated MCQs</li>
                  <li>Having All Past Papers’ Questions</li>
                </ul>
              </div>

              <div className=" my-8 ">
                <h2 className=" font-[600] text-[#231F20] text-[20px] mb-4 lg:text-[22px]">
                  Subjects Covering
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-700">
                  <li>Pakistan Affairs</li>
                  <li>Current Affairs</li>
                  <li>General Science & Ability</li>
                  <li>Etc.</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-[600] text-[#231F20] text-[20px] mb-4 lg:text-[22px]">
                How we have reviewed this book!
              </h3>
              <p className="text-[15px]  text-[#7A7A7A] leading-relaxed">
                At HowTests, we are dedicated to providing competitive exam
                aspirants with accurate, useful, beneficial, and well-researched
                content. Our MCQs books and mocks are carefully written,
                compiled, and reviewed to ensure aspirants receive reliable
                study materials for their exam preparation. Our team of experts
                continuously monitors, reviews, and updates MCQs to maintain
                precision and accuracy. We regularly revise our resources
                whenever new information emerges or if errors are reported,
                ensuring that aspirants have access to the most authentic and
                up-to-date study materials. This book results from a
                collaboration between top CSS mentors and subject specialists.
                This team of highly experienced professionals has carefully
                ensured that this book contains authentic, well-structured, and
                high-quality questions that closely align with the commission’s
                testing standards.
              </p>
            </div>
          </div>
          <div className="my-9">
            <History    author={data?.name}
          date="13 July 2025"
          qualifications={data.credentials?.Qualifications}
          degree={data.credentials?.Degree} />
            <ReviewArticle />
          </div>
          <MostReadBooks />
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};

export default EachBookDetail;
