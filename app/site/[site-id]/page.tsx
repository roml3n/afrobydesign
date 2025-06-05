import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className="flex items-start flex-col-reverse lg:flex-row gap-16 md:gap-12 lg:gap-6 mt-16 mx-auto w-[96%] max-w-[1600px]">
      <div className="relative w-full bg-white rounded-xl border border-solid border-gray-5/50">
        <Image
          src="/"
          width={36}
          height={360}
          alt="Screenshot of featured website"
        />
      </div>

      {/* Info  */}
      <div className="w-full lg:w-[50%] flex flex-col sm:flex-row lg:flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-2xl md:text-4xl text-gray-10">
              Name of Site
            </h3>
            <p className="font-normal text-base text-gray-5">
              Smol description of the site that&apos;s featured on this
              mf&apos;ing fkjslkjvbskf sbkldhjbknv ssldjkfhns vibsdflkjbdf app
            </p>
          </div>

          {/* Metadata  */}
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-col gap-4">
            <div className="flex flex-col gap-0">
              <div className="flex gap-1">
                <Image
                  src="/icons/added-on.svg"
                  width={16}
                  height={16}
                  alt="icon"
                />
                <p className="font-medium text-gray-5">Added 2 weeks ago</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/icons/viewed.svg"
                  width={16}
                  height={16}
                  alt="icon"
                />
                <p className="font-medium text-gray-5">Viewed 312 times</p>
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-col gap-0">
              <div className="flex gap-1">
                <Image
                  src="/icons/stack.svg"
                  width={16}
                  height={16}
                  alt="icon"
                />
                <p className="font-medium text-gray-5">Stack</p>
              </div>
              <div className="pl-[20px] flex flex-col gap-0">
                <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                  Next.js
                </p>
                <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                  GSAP
                </p>
                <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                  ShadcnUI
                </p>
              </div>
            </div>

            {/* Fonts */}
            <div className="flex flex-col gap-0">
              <div className="flex gap-1">
                <Image
                  src="/icons/font.svg"
                  width={16}
                  height={16}
                  alt="icon"
                />
                <p className="font-medium text-gray-5">Fonts</p>
              </div>
              <div className="pl-[20px] flex flex-col gap-0">
                <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                  PP Neue Montreal
                </p>
                <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                  PP Editorial
                </p>
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-0">
              <div className="flex gap-1">
                <Image
                  src="/icons/category.svg"
                  width={16}
                  height={16}
                  alt="icon"
                />
                <p className="font-medium text-gray-5">Category</p>
              </div>
              <div className="pl-[20px] flex flex-col gap-0">
                <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                  Portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          href="/"
          label="Visit Website"
          className="mt-8 py-4 h-fit sm:m-0 w-full sm:w-[40%] lg:w-full"
        />
      </div>
    </div>
  );
};

export default page;
