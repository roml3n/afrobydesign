"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, FormEvent } from "react";

const Footer = () => {
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
    <main className="">
      <div className="flex flex-col items-center mx-auto w-[96%] max-w-[1600px]">
        <div className="w-full md:w-[50%] lg:w-[40%]">
          <Image
            src="/footer-image.png"
            alt=""
            width={2000}
            height={2000}
            className="img"
          />
        </div>

        <div className=" w-screen flex flex-col -mt-[1px] pt-[1px] bg-gradient-to-r from-transparent via-gray-5/30 to-transparent">
          <div className="bg-white flex flex-col w-screen items-center pt-6 md:pt-8 lg:pt-12 pb-6 gap-12 md:gap-20 lg:gap-28">
            <div className="bg-white gap-4 flex flex-col w-[96%] md:w-[60%] lg:w-[40%]">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-xl md:text-2xl text-center text-gray-10">
                  Subscribe to our newsletter
                </h3>
                <p className="font-normal text-base text-center text-gray-5">
                  New curations, news, freebies and offers, straight to your
                  inbox, weekly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {" "}
                <div className="relative w-full">
                  <div className="w-full self-stretch p-4 bg-gray-1 rounded-xl flex justify-start items-center gap-2">
                    <Image
                      src="/mail.svg"
                      width={24}
                      height={24}
                      alt="link icon"
                      className="opacity-40"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.url}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      required
                      className="w-full bg-transparent text-gray-5 text-base font-normal outline-none placeholder:text-gray-5"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-center bg-gray-10 text-gray-0 rounded-xl py-4 text-base md:text-base hover:bg-gray-9 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* signature */}
            <div className="flex gap-1 justify-center items-center">
              <div className="font-normal text-gray-5 text-sm md:text-base">
                Built with love by
              </div>

              <Link
                className="flex gap-0 group cursor-pointer items-center justify-center"
                href="https://x.com/roml3n"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <div className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-colors duration-300">
                  <Image
                    src="/twitter-circle.svg"
                    alt="twitter icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="font-normal text-gray-5 group-hover:text-gray-10 text-sm md:text-base transition-colors duration-300">
                  /roml3n
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
