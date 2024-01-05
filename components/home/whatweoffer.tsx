import React from "react";
import OfferCard from "../offerCard";

export default function WhatWeOffer() {
  // const z = DashboardCustomize;
  // console.log(typeof z);
  return (
    <>
      <div className=" self-center sm:m-28 ">
        <h1 className="font-bold font-sans text-4xl lg:text-7xl  text-center">
          {" "}
          Why us?
        </h1>
        <br />
        <div className="flex flex-col lg:gap-16 sm:gap-28 self-center ">
          <div className="lg:flex  lg:gap-40 sm:gap-32 text-center">
            <OfferCard
              line1="RAG"
              line2="Powered model"
              // icon={DashboardCustomize}
            />
            <br></br>
            <OfferCard line1="React component" line2="for Embedding " />
          </div>
          <br></br>
          <div className="lg:flex  lg:gap-40 sm:gap-32 text-center">
            <OfferCard line1="PDF & MarkDown" line2="support" />
            <br></br>
            <OfferCard line1="Dedicated" line2="CI/CD Pipeline" />
          </div>
        </div>
      </div>
    </>
  );
}
