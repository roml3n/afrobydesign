"use client";

import React, { useEffect, useState } from "react";
import SiteCard from "./SiteCard";
import {
  getSites,
  getSitesByCategory,
  getSitesByFont,
  getSitesByTech,
  client,
} from "@/lib/sanity";
import { useSearchParams } from "next/navigation";

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

function SiteGridContent({ initialSites }: { initialSites: Site[] }) {
  const [sites, setSites] = useState<Site[]>(initialSites);
  const searchParamsObj = useSearchParams();
  const category = searchParamsObj.get("category");
  const font = searchParamsObj.get("font");
  const tech = searchParamsObj.get("tech");

  useEffect(() => {
    // Set up real-time listener
    const subscription = client
      .listen('*[_type == "site"]')
      .subscribe((update) => {
        console.log("Real-time update received:", update);
        // Refetch all sites when any change occurs
        const fetchUpdatedSites = async () => {
          try {
            let updatedSites: Site[] = [];
            if (category && category !== "All") {
              updatedSites = await getSitesByCategory(category);
            } else if (font && font !== "All") {
              updatedSites = await getSitesByFont(font);
            } else if (tech && tech !== "All") {
              updatedSites = await getSitesByTech(tech);
            } else {
              updatedSites = await getSites();
            }
            setSites(updatedSites);
          } catch (error) {
            console.error("Error fetching updated sites:", error);
          }
        };
        fetchUpdatedSites();
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [category, font, tech]);

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
}

export default function SiteGrid({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <React.Suspense fallback={<LoadingGrid />}>
      <SiteGridWrapper searchParams={searchParams} />
    </React.Suspense>
  );
}

async function SiteGridWrapper({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams.category as string;
  const font = searchParams.font as string;
  const tech = searchParams.tech as string;

  let initialSites: Site[] = [];
  try {
    if (category && category !== "All") {
      initialSites = await getSitesByCategory(category);
    } else if (font && font !== "All") {
      initialSites = await getSitesByFont(font);
    } else if (tech && tech !== "All") {
      initialSites = await getSitesByTech(tech);
    } else {
      initialSites = await getSites();
    }
  } catch (error) {
    console.error("Error fetching initial sites:", error);
  }

  return <SiteGridContent initialSites={initialSites} />;
}
