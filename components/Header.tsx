"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useModal } from "@/context/ModalContext";
import SubmitModal from "./SubmitModal";
import Modal from "./Modal";

const Header = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`flex sticky top-0 z-50 justify-center items-center py-2 w-screen  transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-5/20 bg-gray-0/80 backdrop-blur-[14px]"
            : ""
        }`}
      >
        <div className="flex mx-auto w-[96%] max-w-[1600px] justify-between items-center">
          <Link href="/">
            <Image
              src="/abd-wordmark.svg"
              alt="Afro by Design"
              width={100}
              height={100}
              className="w-36 "
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              className="flex w-12 h-12 items-center justify-center gap-2.5 rounded-xl hover:bg-gray-10/10 transition-colors duration-300"
              href="https://x.com/afrobydesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="relative w-5 h-5"
                alt="Twitter"
                src="/Twitter.svg"
                width={20}
                height={20}
              />
            </Link>
            <Link
              className="flex w-12 h-12 items-center justify-center gap-2.5 rounded-xl hover:bg-gray-10/10 transition-colors duration-300"
              href="https://github.com/roml3n/afrobydesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="relative w-6 h-6"
                alt="Github"
                src="/Github.svg"
                width={24}
                height={24}
              />
            </Link>
            <Button label="Submit" onClick={openModal} />
          </div>
        </div>
      </header>
      <Modal>
        <SubmitModal />
      </Modal>
    </>
  );
};

export default Header;
