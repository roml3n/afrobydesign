import React from "react";
import FilterTag from "./FilterTag";
import { getCategories } from "@/lib/sanity";

type CategoryType = {
  _id: string;
  name: string;
  count: number;
};

export default async function FilterBar() {
  const categories: CategoryType[] = await getCategories();

  return (
    <div
      className="relative w-full items-start justify-start flex flex-wrap gap-2"
      aria-label="Filter tags"
    >
      <FilterTag
        tag="All"
        count={categories.reduce(
          (acc: number, cat: CategoryType) => acc + cat.count,
          0
        )}
      />
      {categories.map((category: CategoryType) => (
        <FilterTag
          key={category._id}
          tag={category.name}
          count={category.count}
        />
      ))}
    </div>
  );
}
