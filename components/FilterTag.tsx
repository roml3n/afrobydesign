import React from "react";

const FilterTag = ({ tag, count }: { tag: string; count: number }) => {
  return (
    <div className="inline-flex items-start justify-center gap-0.5 px-3 py-2 relative bg-white border border-gray-10/5 rounded-lg overflow-hidden">
      <div className="relative w-fit font-normal text-gray-5 text- text-center">
        {tag}
      </div>
      <div className="relative w-fit opacity-80 font-normal text-gray-5 text-sm text-center">
        {count}
      </div>
    </div>
  );
};

export default FilterTag;
