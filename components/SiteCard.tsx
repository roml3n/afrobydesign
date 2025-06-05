import Image from "next/image";
import React from "react";

const SiteCard = ({
  thumbnail,
  title,
  description,
}: {
  thumbnail: string;
  title: string;
  description: string;
}) => {
  return (
    <main className="relative w-full rounded-2xl flex flex-col gap-2 p-2 hover:bg-gradient-to-b from-blue-0 to-blue-1/30">
      <div className="rounded-lg bg-white border border-gray-10/20 flex w-full aspect-[16/9]">
        <Image
          src={thumbnail}
          fill
          alt="site thumbnail"
          className="object-cover"
        />
      </div>

      <div className="w-full gap-1 flex">
        <div className="overflow-hidden w-full flex flex-col">
          <p className="w-full font-medium text-sm md:text-base truncate">
            {title}
          </p>
          <p className="w-full flex-wrap font-medium text-xs md:text-sm truncate">
            {description}
          </p>
        </div>
        <div className="h-full aspect-square bg-gray-5"></div>
      </div>
    </main>
  );
};

export default SiteCard;
