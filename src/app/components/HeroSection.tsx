"use client";
import { Highlight } from "@/app/components/ui/hero-highlight";
import { Button } from "@/app/components/ui/moving-border";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-center p-4 py-10">
        <h1 className="mt-20 py-10 text-4xl md:text-7xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          CodexHaroon x AceternityUI
        </h1>
        <p className="mx-auto max-w-lg mt-4 mb-20 text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          veritatis{" "}
          <Highlight>
            repudiandae blanditiis cum voluptas commodi cupiditate
          </Highlight>
          corrupti ut perspiciatis laborum nesciunt recusandae adipisci, earum
          tempore natus consequatur fuga. Voluptatum, dolores!
        </p>
        <Link href={"/"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Yo Button!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
