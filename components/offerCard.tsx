"use clients";
import React from "react";
import styles from "./offercard.module.css";

interface inputProps extends React.ComponentProps<any> {
  line1: string;
  line2?: string;
}

export default function OfferCard({ line1, line2 }: inputProps) {
  return (
    <div className=" min-w-[350px] min-h-[400px] rounded-xl justify-center align-middle  bg-whitePrimary shadow-boxShadow1 flex flex-col   ">
      {/* <AbcOutlined /> */}
      <div className={styles.contentDiv}>
        {/* <Heading size="md" color="var(--purple-4)"> */}
        {/* {title} */}
        <h1 className="font-bold text-purple-700  text-4xl">
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
