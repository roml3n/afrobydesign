import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Create a write client with token
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "prod",
  apiVersion: "2024-03-19",
  useCdn: false, // Never use CDN for writes
  token: process.env.SANITY_API_TOKEN, // Token for write operations
  perspective: "published",
});

// Read-only client (existing one)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "prod",
  apiVersion: "2024-03-19",
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Query to get all sites with debug logging
export async function getSites() {
  try {
    console.log("Fetching sites from Sanity...");
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
        "category": category->name,
        views
      }
    `);
    console.log("Sites fetched:", sites?.length || 0, "sites");
    if (sites?.length > 0) {
      console.log(
        "Latest site:",
        sites[0].title,
        "published at",
        sites[0].publishedAt
      );
    }
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
      "category": category->name,
      views
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
      "category": category->name,
      views
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
      "category": category->name,
      views
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
      "category": category->name,
      views
    }
  `,
    { tech }
  );
}

// Function to increment view count
export async function incrementViewCount(siteId: string) {
  console.log("Incrementing views for site:", siteId);
  try {
    const result = await writeClient.patch(siteId).inc({ views: 1 }).commit();
    console.log("View increment result:", result);
    return result;
  } catch (error) {
    console.error("Error incrementing views:", error);
    throw error;
  }
}
