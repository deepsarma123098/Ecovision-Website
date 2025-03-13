import React from "react";

export default function Button({ children, variant, className, ...props }) {
  return (
    <button
      {...props}
      className={`p-2 rounded-md transition-all ${
        variant === "outline"
          ? "border border-white text-white hover:bg-white hover:text-black"
          : "bg-blue-500 text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}
