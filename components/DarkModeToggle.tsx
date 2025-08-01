import React, { useEffect, useState } from "react";

const icons = {
  system: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14H12.5H12V15H4V14H3.50001H2.00001V12.5V4.90001L2.00001 4.85217C1.99996 4.47359 1.99992 4.10491 2.02543 3.79267C2.05345 3.44978 2.11955 3.04518 2.32699 2.63804C2.61461 2.07356 3.07356 1.61461 3.63804 1.32699C4.04518 1.11955 4.44978 1.05345 4.79267 1.02543C5.10491 0.99992 5.47359 0.999964 5.85217 1.00001L5.90001 1.00001H10.1L10.1479 1.00001C10.5264 0.999964 10.8951 0.99992 11.2074 1.02543C11.5502 1.05345 11.9548 1.11955 12.362 1.32699C12.9265 1.61461 13.3854 2.07356 13.673 2.63804C13.8805 3.04518 13.9466 3.44978 13.9746 3.79267C14.0001 4.1049 14.0001 4.47359 14 4.85216V4.85217V4.85218L14 4.90001V12.5V14ZM3.6635 3.31903C3.50001 3.63989 3.50001 4.05993 3.50001 4.90001V11V12.5H5.00001H11H12.5V11V4.90001C12.5 4.05993 12.5 3.63989 12.3365 3.31903C12.1927 3.03678 11.9632 2.80731 11.681 2.6635C11.3601 2.50001 10.9401 2.50001 10.1 2.50001H5.90001C5.05993 2.50001 4.63989 2.50001 4.31903 2.6635C4.03678 2.80731 3.80731 3.03678 3.6635 3.31903ZM5.00001 5.60001C5.00001 5.03996 5.00001 4.75993 5.10901 4.54602C5.20488 4.35786 5.35786 4.20488 5.54602 4.10901C5.75993 4.00001 6.03996 4.00001 6.60001 4.00001H9.40001C9.96007 4.00001 10.2401 4.00001 10.454 4.10901C10.6422 4.20488 10.7951 4.35786 10.891 4.54602C11 4.75993 11 5.03996 11 5.60001V8.00001H5.00001V5.60001ZM8.00001 10.25C8.00001 9.8358 8.3358 9.50001 8.75001 9.50001H10.25C10.6642 9.50001 11 9.8358 11 10.25C11 10.6642 10.6642 11 10.25 11H8.75001C8.3358 11 8.00001 10.6642 8.00001 10.25Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  dark: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V2.25C8.75 2.66421 8.41421 3 8 3C7.58579 3 7.25 2.66421 7.25 2.25V2C7.25 1.58579 7.58579 1.25 8 1.25ZM11.4195 8.75C11.4722 8.50838 11.5 8.25744 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 8.25744 4.52779 8.50838 4.58054 8.75H11.4195ZM13.75 8.75H14C14.4142 8.75 14.75 8.41421 14.75 8C14.75 7.58579 14.4142 7.25 14 7.25H13.75C13.3358 7.25 13 7.58579 13 8C13 8.41421 13.3358 8.75 13.75 8.75ZM2 8.75C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H2.25C2.66421 7.25 3 7.58579 3 8C3 8.41421 2.66421 8.75 2.25 8.75H2ZM11.5355 3.40381C11.2426 3.6967 11.2426 4.17157 11.5355 4.46447C11.8284 4.75736 12.3033 4.75736 12.5962 4.46447L12.773 4.28769C13.0659 3.9948 13.0659 3.51992 12.773 3.22703C12.4801 2.93414 12.0052 2.93414 11.7123 3.22703L11.5355 3.40381ZM3.40381 4.46447C3.6967 4.75736 4.17157 4.75736 4.46447 4.46447C4.75736 4.17157 4.75736 3.6967 4.46447 3.40381L4.28769 3.22703C3.9948 2.93414 3.51992 2.93414 3.22703 3.22703C2.93414 3.51992 2.93414 3.9948 3.22703 4.28769L3.40381 4.46447ZM1.25 11.25C1.25 10.8358 1.58579 10.5 2 10.5H14C14.4142 10.5 14.75 10.8358 14.75 11.25C14.75 11.6642 14.4142 12 14 12H2C1.58579 12 1.25 11.6642 1.25 11.25ZM4.75 13.5C4.33579 13.5 4 13.8358 4 14.25C4 14.6642 4.33579 15 4.75 15H11.25C11.6642 15 12 14.6642 12 14.25C12 13.8358 11.6642 13.5 11.25 13.5H4.75Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  light: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9441 8.75C12.9809 8.50535 13 8.25491 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 8.25491 3.01907 8.50535 3.05588 8.75H1.5428C1.51453 8.50392 1.5 8.25366 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 8.25366 14.4855 8.50392 14.4572 8.75H12.9441ZM1.25 11.25C1.25 10.8358 1.58579 10.5 2 10.5H14C14.4142 10.5 14.75 10.8358 14.75 11.25C14.75 11.6642 14.4142 12 14 12H2C1.58579 12 1.25 11.6642 1.25 11.25ZM4.75 13.5C4.33579 13.5 4 13.8358 4 14.25C4 14.6642 4.33579 15 4.75 15H11.25C11.6642 15 12 14.6642 12 14.25C12 13.8358 11.6642 13.5 11.25 13.5H4.75Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
};

type Theme = "system" | "dark" | "light";

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") return "system";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = getSystemTheme();
      if (systemTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to system theme changes
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      document.documentElement.classList.toggle("dark", mq.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  return (
    <div className="flex gap-1 bg-gray-0 border border-gray-5/40 rounded-md p-1">
      {(["system", "dark", "light"] as Theme[]).map((t) => (
        <button
          key={t}
          aria-label={`Switch to ${t} mode`}
          className={`w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-main ${theme === t ? "bg-gray-1 border border-gray-5/60 shadow-sm" : ""}`}
          onClick={() => setTheme(t)}
        >
          <span
            className={`text-gray-5 ${theme === t ? "text-gray-10" : "opacity-60"}`}
          >
            {icons[t]}
          </span>
        </button>
      ))}
    </div>
  );
}
