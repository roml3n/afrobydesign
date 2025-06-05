import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "prod",
  apiVersion: "2024-03-19",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Query to get all sites with debug logging
export async function getSites() {
  try {
    console.log("Attempting to fetch sites with config:", {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      apiVersion: client.config().apiVersion,
    });
    const sites = await client.fetch(`
      *[_type == "site"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        "thumbnail": thumbnail.asset->url,
        "fullScreenshot": fullScreenshot.asset->url,
        description,
        externalLink,
        publishedAt,
        fonts,
        techStack,
        "category": category->name
      }
    `);
    console.log("Sites fetched:", sites);
    return sites;
  } catch (error) {
    console.error("Error fetching sites:", error);
    throw error;
  }
}

// Query to get a single site by slug
export async function getSiteBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "site" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "fullScreenshot": fullScreenshot.asset->url,
      description,
      externalLink,
      publishedAt,
      fonts,
      techStack,
      "category": category->name
    }
  `,
    { slug }
  );
}

// Query to get all categories with count
export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] {
      _id,
      name,
      "count": count(*[_type == "site" && references(^._id)])
    }
  `);
}

// Query to get sites by category
export async function getSitesByCategory(category: string) {
  return client.fetch(
    `
    *[_type == "site" && category->name == $category] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "fullScreenshot": fullScreenshot.asset->url,
      description,
      externalLink,
      publishedAt,
      fonts,
      techStack,
      "category": category->name
    }
  `,
    { category }
  );
}

// Query to get sites by font
export async function getSitesByFont(font: string) {
  return client.fetch(
    `
    *[_type == "site" && $font in fonts] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "fullScreenshot": fullScreenshot.asset->url,
      description,
      externalLink,
      publishedAt,
      fonts,
      techStack,
      "category": category->name
    }
  `,
    { font }
  );
}

// Query to get sites by tech stack
export async function getSitesByTech(tech: string) {
  return client.fetch(
    `
    *[_type == "site" && $tech in techStack] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "fullScreenshot": fullScreenshot.asset->url,
      description,
      externalLink,
      publishedAt,
      fonts,
      techStack,
      "category": category->name
    }
  `,
    { tech }
  );
}

// Function to increment view count
export async function incrementViewCount(siteId: string) {
  return client.patch(siteId).inc({ views: 1 }).commit();
}
