import Image from "next/image";
import Link from "next/link";
import React from "react";

type SiteCardProps = {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  slug: string;
};

const SiteCard = ({
  thumbnail,
  title,
  description,
  link,
  slug,
}: SiteCardProps) => {
  return (
    <main className="group relative w-full rounded-2xl flex flex-col gap-2 p-2 hover:bg-gradient-to-b from-blue-0 to-blue-1/30 transition-all duration-300">
      <Link href={`/site/${slug}`} className="w-full">
        <div className="relative rounded-lg bg-white border border-gray-10/20 flex w-full aspect-[16/9] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 overflow-hidden">
          <Image
            src={thumbnail}
            fill
            alt={`${title} thumbnail`}
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="w-full gap-1 flex items-center">
        <div className="overflow-hidden w-full flex flex-col">
          <div className="flex items-center gap-2">
            <p className="w-full font-medium text-sm md:text-base truncate">
              {title}
            </p>
          </div>
          <p className="w-full flex-wrap font-normal text-xs md:text-sm truncate text-gray-600">
            {description}
          </p>
        </div>
        <Link
          className="h-8 flex items-center justify-center rounded-full aspect-square bg-gray-1 hover:bg-gray-5/20 cursor-pointer transition-all duration-300"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title} website`}
        >
          <Image
            src="/arrow-top-right.svg"
            alt="Visit website"
            height={20}
            width={20}
            className="opacity-50"
          />
        </Link>
      </div>
    </main>
  );
};

export default SiteCard;
