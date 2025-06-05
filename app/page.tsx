// import Image from "next/image";

import FilterBar from "@/components/FilterBar";
import Hero from "./Hero";
import SiteGrid from "@/components/SiteGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center mx-8">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />

        <FilterBar />

        <SiteGrid />
      </main>
    </div>
  );
}
