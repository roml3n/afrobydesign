"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, FormEvent } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${146330554}/${"7eacb88d-73e6-4c80-acd6-c23f98bc8657"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              {
                name: "email",
                value: formData.email,
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ email: "" }); // Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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

        <div className=" w-screen flex flex-col pt-[2px] bg-gradient-to-r from-transparent via-gray-5/30 to-transparent">
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
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent text-gray-5 text-base font-normal outline-none placeholder:text-gray-5 disabled:opacity-50"
                      aria-label="Email"
                    />
                  </div>
                  {submitStatus === "success" && (
                    <div className="w-full mt-2 p-2 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                      Thanks for subscribing!
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="w-full mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-center bg-gray-10 text-gray-0 rounded-xl py-4 text-base md:text-base hover:bg-gray-9 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
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
