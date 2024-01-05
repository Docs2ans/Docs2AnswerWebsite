"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Navbar({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className=" flex justify-between align-middle  top-0 min-h-16 shadow-lg">
        <a href="/" className=" self-center flex align-middle justify-center px-2">
          <img
            src="/logo.png"
            className="h-8 me-3"
            alt="Docs2Answer Logo"
            style={{ scale: "3" }}
          />
          <h1 className="font-extrabold text-center tracking-tight lg:text-5xl sm:text-4xl ">
            Docs2
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Answer
            </span>
          </h1>
        </a>
        <NavigationMenu>
          <NavigationMenuList className=" flex gap-x-2 justify-evenly  lg:text-3xl text-gray-400 font-normal tracking-normal sm:text-xl">
            <NavigationMenuItem className="align-middle">
              <NavigationMenuLink href="/docs">
                {" "}
                <h2 className="  hover:text-black">Docs</h2>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/demo">
                <h2 className=" hover:text-black ">Demo</h2>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <h2 className="  hover:text-black">Pricing</h2>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {children}
    </>
  );
}
