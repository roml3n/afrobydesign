"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

type MetadataFilterLinkProps = {
  type: "tech" | "font" | "category"; // Corresponds to URL query param name
  value: string; // The actual value to filter by
  displayText?: string; // Optional text to display, defaults to value
};

const MetadataFilterLink = ({
  type,
  value,
  displayText,
}: MetadataFilterLinkProps) => {
  const pathname = usePathname(); // Should ideally be '/' for the gallery page
  const searchParams = useSearchParams();

  // Construct the new query string for filtering the main gallery page.
  // We'll navigate to the root path '/' and add the filter param.
  const href = `/?${new URLSearchParams({
    ...Object.fromEntries(searchParams.entries()), // Keep existing params if any
    [type]: value, // Add or update the filter type
  }).toString()}`;

  return (
    <Link
      href={href}
      className="font-normal text-gray-5 hover:text-gray-10 underline" // Apply existing styling
      aria-label={`Filter by ${value} ${type}`}
    >
      {displayText || value}
    </Link>
  );
};

export default MetadataFilterLink;
