"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type FilterTagProps = {
  tag: string;
  count: number;
  type?: "category" | "font" | "tech";
};

const FilterTag = ({ tag, count, type = "category" }: FilterTagProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get(type);
  const isActive = currentFilter === tag || (!currentFilter && tag === "All");

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "All") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    return params.toString();
  };

  return (
    <Link
      href={`${pathname}?${createQueryString(type, tag)}`}
      className={`min-w-fit flex items-start justify-center gap-x-1 px-3 py-2 relative rounded-[4px] overflow-hidden transition-all duration-300 ${
        isActive
          ? "bg-blue-main text-white border border-blue-10/20"
          : "bg-white border border-gray-10/5 hover:bg-gray-1"
      }`}
      aria-label={`Filter by ${tag}`}
      aria-pressed={isActive}
    >
      <p
        className={`font-normal font-supply uppercase text-center ${isActive ? "text-white" : "text-gray-5"}`}
      >
        {tag}
      </p>
      <p
        className={`opacity-60 font-supply uppercase font-normal text-sm text-center ${isActive ? "text-white" : "text-gray-5"}`}
      >
        {count}
      </p>
    </Link>
  );
};

export default FilterTag;
