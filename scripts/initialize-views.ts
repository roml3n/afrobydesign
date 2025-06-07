import { writeClient } from "../lib/sanity";

async function initializeViews() {
  try {
    // Get all sites
    const sites = await writeClient.fetch('*[_type == "site"]');
    console.log(`Found ${sites.length} sites to update`);

    // Update each site to set views to 0 if not present
    for (const site of sites) {
      await writeClient.patch(site._id).setIfMissing({ views: 0 }).commit();
      console.log(`Updated site: ${site.title}`);
    }

    console.log("Successfully initialized views for all sites");
  } catch (error) {
    console.error("Error initializing views:", error);
  }
}

initializeViews();
