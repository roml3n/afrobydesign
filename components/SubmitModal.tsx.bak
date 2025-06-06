"use client";
import Image from "next/image";
import React, { useState, FormEvent } from "react";

const SubmitModal = () => {
  const [formData, setFormData] = useState({
    email: "",
    url: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement your form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto rounded-[36px] w-[96%] md:w-[480px] self-center flex flex-col gap-6 items-center p-5 md:p-8 bg-gradient-to-b from-blue-0 to-white border border-black/10"
    >
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
          Send us a site/app you like and we&apos;ll do the rest
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="relative w-full">
          <div className="w-full self-stretch p-4 bg-gray-1 rounded-xl flex justify-start items-center gap-2">
            <Image
              src="/mail.svg"
              width={24}
              height={24}
              alt="email icon"
              className="opacity-40"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
              className="w-full bg-transparent text-gray-5 text-base font-normal outline-none placeholder:text-gray-5"
              aria-label="Email address"
            />
          </div>
        </div>

        <div className="relative w-full">
          <div className="w-full self-stretch p-4 bg-gray-1 rounded-xl flex justify-start items-center gap-2">
            <Image
              src="/link.svg"
              width={24}
              height={24}
              alt="link icon"
              className="opacity-40"
            />
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              placeholder="Site URL"
              required
              className="w-full bg-transparent text-gray-5 text-base font-normal outline-none placeholder:text-gray-5"
              aria-label="Website URL"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-center bg-gray-10 text-gray-0 rounded-xl px-3 md:px-6 py-4 md:py-6 text-base md:text-base hover:bg-gray-9 transition-colors"
          aria-label="Submit form"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SubmitModal;
