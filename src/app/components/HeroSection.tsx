"use client";
import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";
import { Button } from "@/app/components/ui/moving-border";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      <HeroHighlight>
        <div className="text-center p-4 py-10">
          <h1 className="mt-20 py-10 text-4xl md:text-7xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
            CodexHaroon x AceternityUI
          </h1>
          <p className="mx-auto max-w-lg mt-4 mb-4 text-base sm:text-lg">
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
      </HeroHighlight>
    </div>
  );
};

export default HeroSection;
