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
  const totalSites = categories.reduce((acc, cat) => acc + cat.count, 0);

  return (
    <div className="flex flex-wrap gap-2 w-full" aria-label="Category filters">
      <FilterTag tag="All" count={totalSites} type="category" />
      {categories.map((category: CategoryType) => (
        <FilterTag
          key={category._id}
          tag={category.name}
          count={category.count}
          type="category"
        />
      ))}
    </div>
  );
}
