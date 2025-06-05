import React from "react";
import SiteCard from "./SiteCard";
import { getSites } from "@/lib/sanity";
import { Suspense } from "react";

type Site = {
  _id: string;
  thumbnail: string;
  title: string;
  description: string;
  externalLink: string;
  slug: string;
  category: string;
  publishedAt: string;
  views: number;
};

function LoadingGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] bg-gray-100 animate-pulse rounded-lg"
        />
      ))}
    </div>
  );
}

async function SiteGridContent() {
  try {
    console.log("Fetching sites from Sanity...");
    const sites = await getSites();
    console.log("Sites fetched:", sites);

    if (!sites || sites.length === 0) {
      console.log("No sites found in the response");
      return (
        <div className="w-full text-center py-12">
          <p className="text-gray-500">No sites found. Check back later!</p>
        </div>
      );
    }

    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {sites.map((site: Site) => {
          console.log("Rendering site:", site);
          return (
            <SiteCard
              key={site._id}
              thumbnail={site.thumbnail}
              title={site.title}
              description={site.description}
              link={site.externalLink}
              slug={site.slug}
            />
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Error fetching sites:", error);
    return (
      <div className="w-full text-center py-12">
        <p className="text-red-500">
          Error loading sites. Please try again later.
        </p>
      </div>
    );
  }
}

export default function SiteGrid() {
  return (
    <Suspense fallback={<LoadingGrid />}>
      <SiteGridContent />
    </Suspense>
  );
}
