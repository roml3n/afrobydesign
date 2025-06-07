import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ label, href, onClick, className = "" }: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`font-supply font-medium uppercase text-center bg-blue-main hover:bg-blue-hover text-gray-0 rounded-[4px] px-3 md:px-6 py-2 md:py-4 text-sm md:text-base transition-colors duration-300 ${className}`}
        aria-label={label}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`font-supply font-medium uppercase text-center bg-blue-main hover:bg-blue-hover text-gray-0 rounded-[4px] px-3 md:px-6 py-2 md:py-4 text-sm md:text-base transition-colors duration-300 ${className}`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
