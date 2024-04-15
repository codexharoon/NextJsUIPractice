"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/app/components/ui/hero-highlight";

import Link from "next/link";

const HeroSection = () => {
  return (
    <HeroHighlight>
      <div className="text-center p-4 py-10">
        <h1 className="mt-20 py-10 text-4xl md:text-7xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          CodexHaroon x AceternityUI
        </h1>
        <p className="mx-auto max-w-lg mt-4 text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          veritatis{" "}
          <Highlight>
            repudiandae blanditiis cum voluptas commodi cupiditate
          </Highlight>
          corrupti ut perspiciatis laborum nesciunt recusandae adipisci, earum
          tempore natus consequatur fuga. Voluptatum, dolores!
        </p>
        <Link href={"/"}>
          <button>Yo Button!</button>
        </Link>
      </div>
    </HeroHighlight>
  );
};

export default HeroSection;
