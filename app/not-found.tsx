import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[calc(100vh-100px)]  overflow-hidden">
      <div className="absolute top-10 left-10 text-[6rem] md:text-[8rem] lg:text-[12rem] font-supply font-medium uppercase text-blue-main z-0">
        /NOT
      </div>

      <div className="absolute bottom-10 right-10 text-[6rem] md:text-[8rem] lg:text-[12rem] font-supply font-medium uppercase text-blue-main z-0">
        FOUND
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 p-4">
        <p className="text-gray-5 font-normal text-base max-w-md">
          Looks like this page didn&apos;t make the cut.
          <br />
          It&apos;s either still in the drafts or it just never existed.
        </p>
        <Button
          href="/"
          label="GO BACK HOME"
          className="!bg-white !text-blue-main border border-blue-main hover:!bg-blue-main hover:!text-white"
        />
      </div>
    </div>
  );
}
