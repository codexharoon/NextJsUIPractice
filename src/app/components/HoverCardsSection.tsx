"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    slug: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    slug: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    slug: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    slug: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    slug: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    slug: "https://microsoft.com",
  },
];

const HoverCardsSEction = () => {
  return (
    <div className="bg-slate-900 py-20 px-10">
      <h2 className="font-bold text-lg text-center text-green-700 uppercase">
        Hover Card Section
      </h2>
      <h3 className="text-center font-bold text-4xl text-white capitalize mt-10">
        Learn with the best
      </h3>

      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect
          items={projects.map((item) => ({
            title: item.title,
            description: item.description,
            link: "#",
          }))}
        />
      </div>

      <div className="flex justify-center mt-20">
        <button className="rounded-full px-4 py-5 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
          <span className="text-sm">View All Lessons </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default HoverCardsSEction;
