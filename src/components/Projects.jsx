import Image from "next/image";
import React from "react";
import international from "@/app/assets/img/inter.jpg";
import management from "@/app/assets/img/management.jpg";
import leader from "@/app/assets/img/Leader.jpg";
import key from "@/app/assets/img/key.jpg";
import target from "@/app/assets/img/target.jpg";

const Projects = () => {
  return (
    <div className="container-x py-20 max-w-290">
      <div>
        <h2 className="lg:text-[32px] text-[27px]  font-semibold text-black text-center">
          International Orientation
        </h2>
        <div className="grid sm:grid-cols-2 gap-8 sm:mt-8 mt-6">
          <div>
            <Image src={international} className="" alt="International" />
          </div>
          <div>
            <p className="text-[16px] leading-6 font-normal ">
              The Company offers its products and services to organizations in
              the public and private sectors, in 30 countries worldwide.
            </p>
            <p className="text-base font-normal leading-6  mt-4">
              These include government institutions, multinational corporations
              and large companies, research and academic institutions.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-20 sm:mt-10 mt-8">
        <h2 className="lg:text-[32px] text-[27px] font-semibold text-black text-center ">
          Expert Management Team and Highly Specialized Researchers
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <div>
            <p className="text-base leading-6 font-normal text-justify ">
              The Company offers its products and services to organizations in
              the public and private sectors, in 15 countries worldwide. These
              include government institutions, multinational corporations and
              large companies, research and academic institutions. International
              journal Alliance (IJA) has been founded and is currently run by an
              expert management team with vast international experience and deep
              technological knowledge. Personnel education profile: The
              organization has expanded by recruiting and retaining highly
              educated and specialized researchers that are building a unique
              experience through the implementation of research based advanced
              projects at an international level.
            </p>
          </div>
          <div>
            <Image src={management} className="" alt="Management" />
          </div>
        </div>
      </div>
      <div className="sm:mt-8 mt-6">
        <h2 className="lg:text-[32px] text-[27px] font-semibold text-black text-center">
          Industry Leader to the Research and development Sector in Bangladesh
        </h2>
        <div className="grid sm:grid-cols-2 gap-14 sm:mt-8 mt-6">
          <div>
            <p className="text-base leading-6 ">
              International journal Alliance (IJA) is a leading organization in
              the provision of integrated research services to the various
              sector in Bangladesh, both at national and international level.
              The organization offers a wide range of advanced product
              development and research services allowing the implementation of
              Business concepts and strategies
            </p>
          </div>
          <div>
            <Image src={leader} alt="Leader" className="" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-[32px] text-[27px] font-semibold text-center mt-10 ">
          Leading Product Portfolio
        </h2>
        <p className="text-base mt-5 text-justify leading-6">
          International journal Alliance (IJA) develops friendly research
          platforms and integrated solutions for its customers with a favorable
          cost/quality ratio. The expertise developed is based on the latest,
          state-of-the-art technologies. The Company has built up a particularly
          strong reputation amongst its client base for quality and innovation.
          This is the result of innovative and user-friendly products such as
          the standard collaboration research and publication tool as well as
          other collaboration platforms within the Bangladesh. The company also
          designed and delivered a new generation of research and publication
          platforms, including study and training.
        </p>
        <h2 className="lg:text-[32px] text-[27px] font-semibold text-center mt-10 ">
          Cost Effective Platforms
        </h2>
        <p className="text-base mt-5 text-justify leading-6">
          The relatively low cost structure and the availability of high level
          personnel in the primary corporate and employment locations, allows
          the delivery of competitively priced products, with the retention of
          healthy profit margins for the Company.
        </p>
        <h2 className="lg:text-[32px] text-[27px] font-semibold text-center mt-10 ">
          Strong and Diverse Client Base
        </h2>
        <p className="text-base mt-5 text-justify leading-6">
          International journal Alliance (IJA) has established a high quality
          clientele of over 25 major customers, whose research activity schedule
          focuses on state of the art technologies. Bangladesh and international
          institutions and organizations, constitute one of the best research
          field, in which the Company has built an exceptional track record.
          International journal Alliance (IJA) progressively positions itself to
          the whole research sector market in Bangladesh. In this field, the
          first clients are Medical Institutions and doctors, as well as
          education professional.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="lg:text-[32px] text-[27px] text-center font-semibold">
          A key strength
        </h2>
        <div className="grid lg:grid-cols-[60%_35%] md:grid-cols-2 gap-[5%] mb-8">
          <div className="space-y-3">
            <p className="text-base text-justify">
              International journal Alliance (IJA), in addition to being a
              research and publication partner and Service Provider, has
              established its own Research and Development Department.
            </p>
            <p className="text-base text-justify">
              The Research Department operates in accordance to advanced and
              professional methodologies and standards (data analysis, writing,
              reviewing, publication, etc).
            </p>
            <p className="text-base text-justify">
              Furthermore, International journal Alliance (IJA) Quality and
              Assurance Department monitors and controls the Company’s expansion
              in order to ensure that business development is in fact with the
              corporate goals.
            </p>
            <p className="text-base text-justify">
              The Department is setting up top quality dedicated project teams,
              which are capable of producing intelligent and sophisticated
              solutions working seamlessly with the various subcontractors.
            </p>
            <p className="text-base text-justify">
              The efficiency of the delivery process is further enhanced by the
              re-usability of information, codes and applications of previous
              products.
            </p>
            <p className="text-base text-justify">
              The numerous high quality projects have enabled the creation of a
              unique code, data and solutions library.
            </p>
          </div>
          <div>
            <Image src={key} alt="Key" />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h2 className="text-[32px] text-center font-semibold mb-10">
          Strategy
        </h2>
        <div className="grid sm:grid-cols-[37%_60%] gap-[3%] ">
          <div>
            <Image src={target} alt="target" />
          </div>
          <div>
            <p className="text-base text-justify">
              International journal Alliance (IJA) core strategic objective is
              to further entrench its position as a leading provider of
              state-of-the-art, high added value research and publication
              solutions to local organizations, companies, education
              professional, and international organizations.
            </p>
            <p className="text-base text-justify mt-14">
              It also envisions becoming a leader in the provision of
              publication solutions to the public sector in Bangladesh. In order
              to achieve this objective, International journal Alliance (IJA)
              has chosen to offer key products such as easy publication
              solutions, as an open research, but also to increase its
              penetration though strategic agreements with major international
              researchers and publishers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
