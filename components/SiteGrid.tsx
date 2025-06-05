import React from "react";
import SiteCard from "./SiteCard";

type SiteCardType = {
  id: string; // Added for unique key
  thumbnail: string;
  title: string;
  description: string;
};

// Sample data - replace this with your actual data source
const sites: SiteCardType[] = [
  {
    id: "1",
    thumbnail: "/sample-thumbnail-1.jpg",
    title: "Modern African Design",
    description: "A showcase of contemporary designs from African creators ",
  },
  {
    id: "2",
    thumbnail: "/sample-thumbnail-2.jpg",
    title: "Digital Art Gallery",
    description: "Exploring digital art from African creators",
  },
  {
    id: "3",
    thumbnail: "/sample-thumbnail-3.jpg",
    title: "UI/UX Patterns",
    description: "African-inspired user interface patterns",
  },
  {
    id: "4",
    thumbnail: "/sample-thumbnail-4.jpg",
    title: "Typography Collection",
    description: "Curated collection of African typography",
  },
];

const SiteGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {sites.map((site) => (
        <SiteCard
          key={site.id}
          thumbnail={site.thumbnail}
          title={site.title}
          description={site.description}
        />
      ))}
    </div>
  );
};

export default SiteGrid;
