import React from "react";
import SiteCard from "./SiteCard";
import {
  getSites,
  getSitesByCategory,
  getSitesByFont,
  getSitesByTech,
} from "@/lib/sanity";
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
  fonts?: string[];
  techStack?: string[];
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

async function SiteGridContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  try {
    let sites: Site[] = [];
    const category = searchParams.category as string;
    const font = searchParams.font as string;
    const tech = searchParams.tech as string;

    if (category && category !== "All") {
      sites = await getSitesByCategory(category);
    } else if (font && font !== "All") {
      sites = await getSitesByFont(font);
    } else if (tech && tech !== "All") {
      sites = await getSitesByTech(tech);
    } else {
      sites = await getSites();
    }

    if (!sites || sites.length === 0) {
      return (
        <div className="w-full text-center py-12">
          <p className="text-gray-500">No sites found. Check back later!</p>
        </div>
      );
    }

    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {sites.map((site: Site) => (
          <SiteCard
            key={site._id}
            thumbnail={site.thumbnail}
            title={site.title}
            description={site.description}
            link={site.externalLink}
            slug={site.slug}
          />
        ))}
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

export default function SiteGrid({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={<LoadingGrid />}>
      <SiteGridContent searchParams={searchParams} />
    </Suspense>
  );
}
