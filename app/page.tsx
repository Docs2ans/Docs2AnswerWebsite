"use client";
import BookADemo from "@/components/bookADemo";
import Banner from "@/components/home/banner";
import WhatWeOffer from "@/components/home/whatweoffer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
  
      <main
        className="flex flex-col"
        style={{
          background:
            "url(https://assets-global.website-files.com/63ce8a45d805d5c08514e388/63dde8386bf1b16f7959f42f_hero%20Grains.svg)",
        }}
      >
        <Banner />
        {/* <BookADemo /> */}
        <WhatWeOffer />
      </main>
 
  );
}
