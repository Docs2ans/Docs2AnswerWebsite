"use clients";
import React from "react";
import styles from "./offercard.module.css";

interface inputProps extends React.ComponentProps<any> {
  line1: string;
  line2?: string;
}

export default function OfferCard({ line1, line2 }: inputProps) {
  return (
    <div className="lg:min-w-[350px] lg:min-h-[400px] text-center rounded-xl justify-center align-middle  bg-whitePrimary shadow-boxShadow1 flex flex-col   ">
      {/* <AbcOutlined /> */}
      <div className={`flex flex-col min-h-44 min-w-36 text-center align-middle justify-center`}>
        {/* <Heading size="md" color="var(--purple-4)"> */}
        {/* {title} */}
        <h1 className="font-bold text-purple-700  text-center lg:text-4xl sm:text-3xl">
          {" "}
          {line1}
          <br />
          {line2}
        </h1>
        {/* </Heading> */}
        {/* <Text color="grey">{description}</Text> */}
      </div>
    </div>
  );
}
