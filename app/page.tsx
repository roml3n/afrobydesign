// import Image from "next/image";
import { Suspense } from "react";
import FilterBar from "@/components/FilterBar";
import Hero from "./Hero";
import SiteGrid from "@/components/SiteGrid";

// Mark the page as dynamic since it uses search params
export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: PageProps) {
  return (
    <div className="flex flex-col gap-8 items-center mx-auto w-[96%] max-w-[1600px]">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />

        <Suspense
          fallback={
            <div className="w-full h-12 animate-pulse bg-gray-100 rounded-lg" />
          }
        >
          <FilterBar />
        </Suspense>

        <SiteGrid searchParams={searchParams} />
      </main>
    </div>
  );
}
