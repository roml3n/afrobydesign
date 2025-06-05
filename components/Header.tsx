import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Afro by Design"
          width={100}
          height={100}
          className="w-10 h-10"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Link
          className="flex w-12 h-12 items-center justify-center gap-2.5 rounded-xl hover:bg-gray-1 transition-colors duration-300"
          href="https://x.com/afrobydesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="relative w-5 h-5"
            alt="Twitter"
            src="/twitter.svg"
            width={20}
            height={20}
          />
        </Link>
        <Link
          className="flex w-12 h-12 items-center justify-center gap-2.5 rounded-xl hover:bg-gray-1 transition-colors duration-300"
          href="https://github.com/afrobydesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="relative w-6 h-6"
            alt="Github"
            src="/github.svg"
            width={24}
            height={24}
          />
        </Link>
        <Button label="Submit" href="/submit" />
      </div>
    </header>
  );
};

export default Header;
