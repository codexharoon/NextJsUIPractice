import React from "react";
import { Meteors } from "@/app/components/ui/meteors";

function page() {
  return (
    <div className="">
      <div className=" w-full relative h-screen">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <div className="max-w-4xl flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl md:text-6xl font-bold mt-36">
              Contact Us
            </h1>
            <p className="text-sm text-center mt-5 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aliquam eos dolor unde! Libero ipsam ipsa numquam laboriosam
              laborum iure
            </p>

            <form
              action=""
              className="flex flex-col gap-6 max-w-3xl w-full px-8 py-4 mt-5"
            >
              <input
                className="p-4 rounded-lg text-white bg-black placeholder:text-sm placeholder:text-gray-500"
                type="email"
                placeholder="Your Email Address"
              />
              <textarea
                className="p-4 rounded-lg text-white bg-black placeholder:text-sm placeholder:text-gray-500"
                name=""
                id=""
                rows={7}
                placeholder="Your Message..."
              ></textarea>
              <button className="bg-teal-500 text-white p-4 w-[200px] rounded-lg">
                send message
              </button>
            </form>
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default page;

{
  /* <div className="mt-32">
      <h1 className="text-center text-5xl font-bold">Contact Us</h1>
      <p className="text-sm text-center mt-5 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam
        eos dolor unde! Libero ipsam ipsa numquam laboriosam laborum iure
      </p>
      <Meteors number={20} />
</div> */
}
