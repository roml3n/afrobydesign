"use client";
import Image from "next/image";
import React, { useState, FormEvent } from "react";

const SubmitModal = () => {
  const [formData, setFormData] = useState({
    email: "",
    url: "",
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
        `https://api.hsforms.com/submissions/v3/integration/submit/${146330554}/${"07982f50-e87b-4ee8-898d-99d9aba71297"}`,
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
              {
                name: "url",
                value: formData.url,
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        email: "",
        url: "",
      });
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
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto rounded-[24px] w-full md:w-[80%] self-center flex flex-col gap-6 items-center p-5 md:p-6 bg-gradient-to-b from-blue-5 to-white border border-black/20"
    >
      <div className="relative w-16 md:w-24 aspect-square">
        <Image
          src="/logo-sticker.svg"
          fill
          alt="Afro by Design logo"
          // className="w-24 h-24"
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

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="w-full p-2 bg-green-100 border border-green-400 text-green-700 rounded-[4px] text-center">
          Thanks for your submission! We&apos;ll review it shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="w-full p-2 bg-red-100 border border-red-400 text-red-700 rounded-[4px] text-center">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="w-full flex flex-col gap-4">
        <div className="relative w-full">
          <div className="w-full self-stretch p-4 rounded-[4px] bg-gray-1 border border-black/5 flex justify-start items-center gap-2">
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
              disabled={isSubmitting}
              className="w-full bg-transparent rounded-[4px] text-gray-5 text-base font-supply uppercase font-medium outline-none placeholder:text-gray-5/40 disabled:opacity-50"
              aria-label="Email address"
            />
          </div>
        </div>

        <div className="relative w-full">
          <div className="w-full self-stretch p-4 rounded-[4px] bg-gray-1 border border-black/5 flex justify-start items-center gap-2">
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
              disabled={isSubmitting}
              className="w-full bg-transparent rounded-[4px] text-gray-5 text-base font-supply uppercase font-medium outline-none placeholder:text-gray-5/40 disabled:opacity-50"
              aria-label="Website URL"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-center font-supply uppercase font-medium bg-blue-main hover:bg-blue-hover transition-colors duration-300 text-white rounded-[4px] px-3 md:px-6 py-3 md:py-4 text-sm md:text-base  disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Submit form"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default SubmitModal;
