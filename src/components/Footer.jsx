import React from "react";

export default function Footer() {
  return (
    <footer className="mt-[10vw] bg-gray-800 text-center p-4 text-gray-400">
      © {new Date().getFullYear()} Ecovision Associates | All rights reserved.
    </footer>
  );
}
