import React from "react";
import FilterTag from "./FilterTag";

type FilterTagType = {
  tag: string;
  count: number;
};

// Sample data - replace this with your actual data source
const filterTags: FilterTagType[] = [
  { tag: "All", count: 120 },
  { tag: "Design", count: 45 },
  { tag: "Development", count: 35 },
  { tag: "Marketing", count: 40 },
];

export default function FilterBar() {
  return (
    <div
      className="relative w-full bg-white items-start justify-start flex flex-wrap gap-2"
      aria-label="Filter tags"
    >
      {filterTags.map((filterTag) => (
        <FilterTag
          key={filterTag.tag}
          tag={filterTag.tag}
          count={filterTag.count}
        />
      ))}
    </div>
  );
}
