import React from "react";
import Image from "next/image";

import stracture from "@/app/assets/img/stracture.png";
import team from "@/app/assets/img/team-composition-1.png";
const International = () => {
  return (
    <div className=" container-x max-w-300">
      <div>
        <h2 className="text-3xl font-semibold  pb-10 text-slate">
          Operational Structure of IJA
        </h2>
        <p className="text-sm text-slate">
          Board of Director is the highest body of the IJA comprises with
          President, Managing Director and other 3 Directors of different
          portfolio. Managing Director is solely responsible for ongoing
          operationalize businesses, Communication with clients, new business
          opportunities, and overall management of IJA. Other Directors are
          reportable to the managing director and their portfolio management.
          GO/NO GO decisions of the organization will be approved by the Board
          of Director members. All the members of the board will assess
          organizational decisions based on the portfolio analysis.
        </p>

        <div className="ml-16 py-10">
          <Image src={stracture} alt="Stracture" />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-16  mx-auto">
        <div>
          <h2 className="text-3xl font-semibold  pb-10 text-slate">
            Team composition
          </h2>
          <ul className="text-base text-slate font-normal space-y-2">
            <li>International Researcher: 06</li>
            <li>National Researcher: 05</li>
            <li>Physicians: 10 </li>
            <li>Social Scientists: 05</li>
            <li>Sector Specific Professionals: 07</li>
            <li>Research Associate: 03 Field</li>
            <li>researchers: 10</li>
          </ul>
        </div>
        <div>
          <Image src={team} alt="Team" />
        </div>
      </div>
    </div>
  );
};

export default International;
