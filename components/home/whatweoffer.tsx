import React from "react";
import OfferCard from "../offerCard";

export default function WhatWeOffer() {
  // const z = DashboardCustomize;
  // console.log(typeof z);
  return (
    <>
      <div className=" self-center m-40">
        <h1 className="font-bold font-sans text-7xl text-center"> Why us?</h1>
        <div className=" mt-8 grid col-span-1  self-center m-48">
          <div className="flex flex-col gap-44 self-center ">
            <div className="flex gap-44 text-center">
              <OfferCard
                line1="24/7"
                line2="Support"
                // icon={DashboardCustomize}
              />
              <OfferCard line1="React component" line2="for Embedding " />
            </div>
            <div className="flex gap-44 text-center">
              <OfferCard line1="Custom LLM" />
              <OfferCard line1="Dedicated" line2="CI/CD Pipeline" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
