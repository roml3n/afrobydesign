import Image from "next/image";
import React from "react";
import Button from "./Button";

const SubmitModal = () => {
  return (
    <div className="relative rounded-[36px] w-full md:w-[40%] self-center flex flex-col gap-6 items-center p-8 bg-gradient-to-b from-blue-0 to-white">
      <div className="relative w-24 h-24 bg-gray-0 rounded-3xl overflow-hidden border border-solid border-gray-0">
        <Image
          src="/logo-submit.svg"
          width={36}
          height={36}
          alt="Afro by Design logo"
          className="w-24 h-24 top-0 left-0"
        />
      </div>

      <div className="self-stretch inline-flex flex-col justify-start items-center gap-1">
        <h3 className="text-center text-gray-10 text-2xl font-medium">
          Submit website or app
        </h3>
        <p className="text-center text-gray-5 text-base font-normal">
          Send us a site/app you like and we’ll do the rest
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="w-full self-stretch p-4 bg-gray-1 rounded-xl flex justify-start items-center gap-2">
          <Image src="/mail.svg" width={24} height={24} alt="email icon" className="opacity-40"/>
          <p className="text-gray-5 text-base font-normal">
            Your email address
          </p>
        </div>
        <div className="w-full self-stretch p-4 bg-gray-1 rounded-xl flex justify-start items-center gap-2">
          <Image src="/link.svg" width={24} height={24} alt="email icon" className="opacity-40"/>
          <p className="text-gray-5 text-base font-normal">
            Site URL
          </p>
        </div>
        <Button href="/" label="Submit" className="w-full text-center"/>
      </div>
    </div>
  );
};

export default SubmitModal;
