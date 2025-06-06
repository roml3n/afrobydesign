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
    <div className="relative w-full flex items-center justify-center">
  
      
      {/* Scrollable container */}
      <div
        className="flex h-fit flex-nowrap gap-2 w-full overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        aria-label="Category filters"
      >
        <div className="flex flex-nowrap gap-2 px-0">
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
      </div>
    </div>
  );
}