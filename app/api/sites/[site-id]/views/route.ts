import { NextResponse } from "next/server";
import { incrementViewCount, getSiteBySlug } from "@/lib/sanity";

export async function POST(
  request: Request,
  { params }: { params: { "site-id": string } }
) {
  try {
    console.log("View increment request for site:", params["site-id"]);

    // Get the site ID from the database using the slug
    const site = await getSiteBySlug(params["site-id"]);
    console.log("Found site:", site?._id);

    if (!site) {
      console.log("Site not found");
      return NextResponse.json({ error: "Site not found" }, { status: 404 });
    }

    // Increment the view count
    const result = await incrementViewCount(site._id);
    console.log("View increment successful:", result);

    return NextResponse.json({ success: true, views: result.views });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json(
      { error: "Failed to increment view count", details: error },
      { status: 500 }
    );
  }
}
