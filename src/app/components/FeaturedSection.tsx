"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import data from "../../../data.json";
import Link from "next/link";

interface featuredDataType {
  id: number;
  name: string;
  age: number;
  instrument: string;
  description: string;
  lesson: string;
  level: string;
}

const FeaturedSection = () => {
  const featuredData = data.filter((item: featuredDataType) => item.age > 35);
  return (
    <div className="bg-slate-900 min-h-screen py-20 px-10">
      <h2 className="font-bold text-lg text-center text-green-700 uppercase">
        Featured Section
      </h2>
      <h3 className="text-center font-bold text-4xl text-white capitalize mt-10">
        Learn with the best
      </h3>

      <div className="flex flex-wrap gap-10 mt-10 items-center justify-center md:justify-start">
        {featuredData.map((item: featuredDataType) => (
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 w-[400px]">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.lesson}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Learn More </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                →
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <Link
          href={"/lessons"}
          className="rounded-full px-4 py-5 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800"
        >
          <span className="text-sm">View All Lessons </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
