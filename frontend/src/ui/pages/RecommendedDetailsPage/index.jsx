import React from "react";
import { useParams } from "react-router";
import UseFetch from "../../../hooks/UseFetch";
import Sidebar from "../../sections/RecommendedSidebar/Sidebar";
import Teracy from "../../../assets/images/Teracy.png";
import DateIcon from "../../../assets/icons/DateIcon";
import EyeIcon from "../../../assets/icons/EyeIcon";
import ShareIcon from "../../../assets/icons/ShareIcon";
import CopyIcon from "../../../assets/icons/CopyIcon";
import laptop from "../../../assets/images/laptop.png";
import bg1 from "../../../assets/images/bg1.png";
import bg2 from "../../../assets/images/bg2.png";
import S1 from "../../../assets/images/S1.png";
import S2 from "../../../assets/images/S2.png";
import Table from "../../components/Common/Table";
import TakeAway from "../../components/Common/TakeAway";
import SidebarOrientation from "../../components/Common/SidebarOrientation";

const RecommendedDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = UseFetch(`/articles/${id}`);

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!data) {
    return <p className="text-center py-10">No data found for this article.</p>;
  }

  return (
    <>
      <div className="md:flex lg:max-w-[1200px] mx-auto">
        <div className=" px-4 py-[70px] lg:max-w-[1200px] md:max-w-[70%]">
          <h1 className="text-[22px] font-[600] mb-4 lg:text-[40px] lg:font-[700]">
            {data.title}
          </h1>
          <div className="flex  ">
            {data.author?.image && (
              <img
                src={Teracy}
                alt={data.author.name}
                className=" mb-6 h-[60px] w-[60px]"
              />
            )}
            <div className="pl-4 md:w-[60%]">
              <div className="text-[#231F2 text-[14px] md:text-[16px] font-[500] ">
                <span>{data.author?.name || "Unknown Author"}</span>
              </div>
              <span className="text-text-normal-gray text-[12px] font-[400] ">
                {data.author?.bio || "No bio available"}
              </span>
              <div className="text-azure-blue text-[12px] font-[400]">
                <a href="">View Author</a>
              </div>
            </div>
          </div>

          <div className="mt-5 text-[#3874FF] text-[12px] md:text-[16px] font-[400] grid grid-cols-2 items-center grid-rows-2 md:grid md:grid-cols-3 md:pr-20">
            {data.tags?.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <div className="flex justify-between items-center border-y-1 border-dim-gray mt-5">
            <div className="flex items-center text-[14px] text-text-normal-gray  py-3">
              <div className="flex  border-r gap-2 pr-3">
                <DateIcon />
                <span>
                  {new Date(data.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex gap-2 items-center pl-2 pr-2">
                <EyeIcon />
                <span>{data.views}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="hidden md:block text-[#787878] text-[14px]">
                Share via
              </p>
              <ShareIcon />
              <CopyIcon />
            </div>
          </div>

          <div className="text-[15px] md:text-[18px] lg:text-[18px] font-[400] text-rasin-black">
            <p className="my-[40px]">{data.abstract}</p>

            <img src={laptop} alt="laptop image" className="rounded-[10px]" />

            <p className="my-[40px]">
              Theoretically, the "World Food System" and "The Economics of
              Agriculture" dimensions are integral in shaping food production,
              circulation, and utilization worldwide and impacting the living
              and non-living aspects. Agricultural economics, on the one hand,
              encompasses the study of resource allocation, efficiency, and
              decision-making processes within the agricultural sector. It is
              crucial in understanding food and agricultural products'
              production, distribution, and consumption. On the other hand, the
              world food system is a complex network that considers economic,
              social, and environmental factors influencing global food
              production, distribution, and consumption, influencing food
              availability, affordability, and sustainability globally. In sum,
              agricultural economics and the world food system are intricate
              fields that collectively ensure a stable and equitable food
              supply. <br /> <br /> Throughout history, the advancing economics
              of agriculture has significantly impacted the world food system,
              resulting in positive and negative outcomes. Among the positive
              impacts, technological advancements have been crucial in
              increasing agricultural productivity and efficiency.
              <span className="text-[#4F4F4F] font-[700]">
                {" "}
                For instance, the Green Revolution, characterized by innovations
                like Precision Agriculture, Vertical Farming, and mechanization,
                has almost tripled crop production with only a thirty per cent
                increase in cultivated land area.
              </span>{" "}
              Such improvements have enhanced food availability and contributed
              to meeting the demands of a growing world population. Hence,
              integrating advanced technologies has paved the way for efficient
              food production for the worldwide population. 
            </p>

            <h2 className="text-rasin-black text-[20px] font-[700] md:text-[24] mt-[40px] mb-[20px]">
              Sign Up To Read This Article And Everything Else
            </h2>
            <p>
              Theoretically, the "World Food System" and "The Economics of
              Agriculture" dimensions are integral in shaping food production,
              circulation, and utilization worldwide and impacting the living
              and non-living aspects. Agricultural economics, on the one hand,
              encompasses the study of resource allocation, efficiency, and
              decision-making processes within the agricultural sector. It is
              crucial in understanding food and agricultural products'
              production, distribution, and consumption. On the other hand, the
              world food system is a complex network that considers economic,
              social, and environmental factors influencing global food
              production, distribution, and consumption, influencing food
              availability, affordability, and sustainability globally. In sum,
              agricultural economics and the world food system are intricate
              fields that collectively ensure a stable and equitable food
              supply.
            </p>

            <h2 className="text-rasin-black text-[20px] font-[700] md:text-[24] mt-[40px] mb-[20px]">
              How can I manage refractory chronic migraine? 
            </h2>

            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>avoiding your triggers</li>
              <li>seeking out alternative therapies</li>
              <li>making certain lifestyle changes</li>
            </ul>

            <h2 className="text-rasin-black text-[20px] font-[700] md:text-[24] mt-[40px] mb-[20px]">
              How can I manage refractory chronic migraine? 
            </h2>
            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by:
            </p>

            <ol type="1" className="list-decimal list-inside space-y-2">
              <li>
                avoiding your triggers
                <ol
                  type="a"
                  className="list-[lower-alpha] list-inside ml-5 mt-1 space-y-1"
                >
                  <li>avoiding your triggers</li>
                  <li>avoiding your triggers</li>
                </ol>
              </li>
              <li>
                seeking out alternative therapies
                <ol
                  type="a"
                  className="list-[lower-alpha] list-inside ml-5 mt-1 space-y-1"
                >
                  <li>avoiding your triggers</li>
                  <li>avoiding your triggers</li>
                </ol>
              </li>
            </ol>

            <h2 className="text-rasin-black text-[20px] font-[700] md:text-[24] mt-[40px] mb-[20px]">
              When does chronic migraine become refractory?
            </h2>
            <p>
              Experts do not universally agree on the criteria for diagnosing
              refractory migraine. But doctors commonly use the International
              Classification of Headache Disorders, 3rd edition (ICHD-3) when
              trying to distinguish refractory migraine from other types of
              migraine. The ICHD-3 is a diagnostic manual for the treatment of
              migraine. According to the ICHD-3, it can even be difficult to
              distinguish chronic migraine from episodic migraine since
              continuous headaches aren’t easily distinguishable from one day to
              the next. In general, though, the ICHD-3 uses the term “chronic”
              when a person has 15 or more headache days per month, with 8 of
              them confirmed as migraine. Despite the differing criteria, a 2019
              review outlines several things doctors can look for when trying to
              diagnose refractory chronic migraine based on ICHD guidelines:
            </p>
            <ul className="list-disc list-inside mt-2 pl-3">
              <li>
                Preventive treatments have failed: Several preventive
                treatments aim to reduce your number of migraine episodes.
                There’s no consensus on how many of these treatments need to
                fail before a doctor diagnoses refractory migraine, but the
                range seems to be between two and five. In this case, “failure”
                can mean two things: The drug doesn’t reduce your migraine
                frequency or severity, or you can’t tolerate the drug because of
                side effects. .
              </li>
              <li>
                Alternative therapies have failed: If you’ve tried things like
                acupuncture or biofeedback to reduce your migraine and it hasn’t
                helped, this also informs your diagnosis
              </li>
              <li>
                Doctors have considered medication overuse headache (MOH): Some
                people with chronic migraine take pain relief medication almost
                daily to function. But this can cause withdrawal symptoms,
                including headache, when the medication wears off or they stop
                taking it. Some experts think doctors should treat MOH and rule
                it out as a source of migraine before diagnosing refractory
                migraine, while others disagree.
              </li>
            </ul>

            <h2 className="text-rasin-black text-[20px] font-[700] md:text-[24] mt-[40px] mb-[20px]">
              How can I manage refractory chronic migraine? 
            </h2>
            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>avoiding your triggers</li>
              <li>seeking out alternative therapies</li>
              <li>making certain lifestyle changes</li>
            </ul>

            <div className="aspect-video w-full my-[40px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/RiVPPfxJps0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by:
            </p>
            <ol className="list-decimal list-inside mt-2">
              <li>avoiding your triggers</li>
              <li>seeking out alternative therapies</li>
              <li>making certain lifestyle changes</li>
            </ol>

            <img src={bg1} alt="" className="my-[40px]" />
            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>avoiding your triggers</li>
              <li>seeking out alternative therapies</li>
              <li>making certain lifestyle changes</li>
            </ul>
            <img src={bg2} alt="" className="my-[40px]" />
            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by Preventive treatment aims to reduce the
              frequency, severity, and duration of migraine episodes before they
              start. Options include medications and procedures, as well as
              lifestyle changes and behavioral therapy.
            </p>

            <h3 className="text-[16px] font-[700] md:text-[18] text-center my-[40px] px-2 text-rasin-black md:px-12">
              "There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by Preventive treatment aims to reduce the
              frequency."
            </h3>
            <p>
              There’s no cure for migraine, including refractory chronic
              migraine. Management of the condition means trying to reduce your
              number of migraine days by Preventive treatment aims to reduce the
              frequency, severity, and duration of migraine episodes before they
              start. Options include medications and procedures, as well as
              lifestyle changes and behavioral therapy.
            </p>

            <Table />

            <TakeAway />
          </div>
        </div>

        <div className="hidden md:block pt-[70px]">
          <Sidebar />
          <img src={S1} alt="" className="my-6" />
          <img src={S1} alt="" className="my-6" />
          <img src={S2} alt="" className="my-6" />
          <img src={S2} alt="" className="my-6" />

          <SidebarOrientation />
          <SidebarOrientation />
        </div>
      </div>
    </>
  );
};

export default RecommendedDetailsPage;
