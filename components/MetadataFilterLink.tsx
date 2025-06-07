"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type MetadataFilterLinkProps = {
  type: "tech" | "font" | "category";
  value: string;
  displayText?: string;
};

const MetadataFilterLink = ({
  type,
  value,
  displayText,
}: MetadataFilterLinkProps) => {
  const searchParams = useSearchParams();

  const href = `/?${new URLSearchParams({
    ...Object.fromEntries(searchParams.entries()),
    [type]: value,
  }).toString()}`;

  return (
    <Link
      href={href}
      className="font-normal text-gray-5 hover:text-gray-10 underline font-supply uppercase underline-offset-2 decoration-1 decoration-gray-5/40 hover:decoration-2 hover:decoration-blue-10 transition-all duration-300"
      aria-label={`Filter by ${value} ${type}`}
    >
      {displayText || value}
    </Link>
  );
};

export default MetadataFilterLink;
