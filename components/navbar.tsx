"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

export default function Navbar({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className=" flex justify-between align-middle  pr-1 top-0 min-h-16 shadow-lg">
        <a href="/">
          <h1 className="scroll-m-20 text-4xl align-middle font-extrabold tracking-tight lg:text-5xl ">
            Docs2
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Answer
            </span>
          </h1>
        </a>
        <NavigationMenu>
          <NavigationMenuList className=" flex gap-x-2 justify-evenly ">
            <NavigationMenuItem className="align-middle">
              <NavigationMenuLink href="/docs">
                {" "}
                <h2 className="text-3xl text-gray-400 font-normal tracking-normal hover:text-black">
                  Docs
                </h2>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/demo">
                <h2 className="text-3xl  text-gray-400 font-normal tracking-normal hover:text-black ">
                  Demo
                </h2>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <h2 className="text-3xl text-gray-400 font-normal tracking-normal hover:text-black">
                Pricing
              </h2>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {children}
    </>
  );
}
