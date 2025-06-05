// import Image from "next/image";

import FilterBar from "@/components/FilterBar";
import Hero from "./Hero";
import SiteGrid from "@/components/SiteGrid";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: PageProps) {
  return (
    <div className="flex flex-col gap-8 items-center mx-auto w-[96%] max-w-[1600px]">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />

        <FilterBar />

        <SiteGrid searchParams={searchParams} />
      </main>
    </div>
  );
}
