import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteCard = ({
  thumbnail,
  title,
  description,
  link,
}: {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <main className="group relative w-full rounded-2xl flex flex-col gap-2 p-2 hover:bg-gradient-to-b from-blue-0 to-blue-1/30">
      <div className="rounded-lg bg-white border border-gray-10/20 flex w-full aspect-[16/9] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
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
        <Link
          className="h-full rounded-full aspect-square bg-gray-1 hover:bg-gray-5 cursor-pointer"
          href={link}
          target="_blank"
          rel="noopenner noreferrer"
        />
      </div>
    </main>
  );
};

export default SiteCard;
