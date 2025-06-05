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
        className={`text-center bg-gray-10 text-gray-0 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-sm md:text-base hover:bg-gray-9 transition-colors ${className}`}
        aria-label={label}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`text-center bg-gray-10 text-gray-0 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-4 text-sm md:text-base hover:bg-gray-9 transition-colors ${className}`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
