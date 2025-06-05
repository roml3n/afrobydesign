import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { getSiteBySlug } from "@/lib/sanity";
import { notFound } from "next/navigation";

type SiteDetailProps = {
  params: {
    "site-id": string;
  };
};

export default async function SiteDetail({ params }: SiteDetailProps) {
  const site = await getSiteBySlug(params["site-id"]);
  console.log("Site data:", site); // Debug log

  if (!site) {
    notFound();
  }

  // Format date
  const addedDate = new Date(site.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Debug log for views
  console.log("Views value:", site.views, "Type:", typeof site.views);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-start flex-col-reverse lg:flex-row gap-16 md:gap-12 lg:gap-6 mt-16 mx-auto w-[96%] max-w-[1600px]">
        <div className="relative w-full bg-white rounded-xl border border-solid border-gray-5/50">
          <Image
            src={site.fullScreenshot}
            width={1920}
            height={1080}
            alt={`Screenshot of ${site.title}`}
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Info  */}
        <div className="w-full lg:w-[50%] flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl md:text-4xl text-gray-10">
                {site.title}
              </h3>
              <p className="font-normal text-base text-gray-5">
                {site.description}
              </p>
            </div>

            {/* Metadata  */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-col gap-4">
              <div className="flex flex-col gap-0">
                <div className="flex gap-1">
                  <Image
                    src="/icons/added-on.svg"
                    width={16}
                    height={16}
                    alt="Added on"
                  />
                  <p className="font-medium text-gray-5">Added {addedDate}</p>
                </div>
                {/* Always show views, defaulting to 0 if undefined */}
                <div className="flex gap-1">
                  <Image
                    src="/icons/viewed.svg"
                    width={16}
                    height={16}
                    alt="Views"
                  />
                  <p className="font-medium text-gray-5">
                    Viewed {typeof site.views === "number" ? site.views : 0}{" "}
                    times
                  </p>
                </div>
              </div>

              {/* Stack */}
              {site.techStack && site.techStack.length > 0 && (
                <div className="flex flex-col gap-0">
                  <div className="flex gap-1">
                    <Image
                      src="/icons/stack.svg"
                      width={16}
                      height={16}
                      alt="Tech stack"
                    />
                    <p className="font-medium text-gray-5">Stack</p>
                  </div>
                  <div className="pl-[20px] flex flex-col gap-0">
                    {site.techStack.map((tech: string) => (
                      <p
                        key={tech}
                        className="font-normal text-gray-5 hover:text-gray-10 underline"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Fonts */}
              {site.fonts && site.fonts.length > 0 && (
                <div className="flex flex-col gap-0">
                  <div className="flex gap-1">
                    <Image
                      src="/icons/font.svg"
                      width={16}
                      height={16}
                      alt="Fonts"
                    />
                    <p className="font-medium text-gray-5">Fonts</p>
                  </div>
                  <div className="pl-[20px] flex flex-col gap-0">
                    {site.fonts.map((font: string) => (
                      <p
                        key={font}
                        className="font-normal text-gray-5 hover:text-gray-10 underline"
                      >
                        {font}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Category */}
              {site.category && (
                <div className="flex flex-col gap-0">
                  <div className="flex gap-1">
                    <Image
                      src="/icons/category.svg"
                      width={16}
                      height={16}
                      alt="Category"
                    />
                    <p className="font-medium text-gray-5">Category</p>
                  </div>
                  <div className="pl-[20px] flex flex-col gap-0">
                    <p className="font-normal text-gray-5 hover:text-gray-10 underline">
                      {site.category}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Button
            href={site.externalLink}
            label="Visit Website"
            className="mt-8 py-4 h-fit sm:m-0 w-full sm:w-[40%] lg:w-full"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
