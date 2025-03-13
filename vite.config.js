import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import svgToDataUri from "mini-svg-data-uri";
import plugin from "tailwindcss/plugin"; // Fix import
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";

// Function to add CSS variables for colors
const addVariablesForColors = plugin(({ addBase, theme }) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
});

// Function to create the grid and dot backgrounds
const customTailwindPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "bg-grid": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-width="0.5"><path d="M0 .5H32V32H.5Z"/></svg>`
        )}")`,
        backgroundSize: "32px 32px",
      }),
      "bg-grid-small": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="8" height="8" fill="none" stroke="${value}" stroke-width="0.5"><path d="M0 .5H8V8H.5Z"/></svg>`
        )}")`,
        backgroundSize: "8px 8px",
      }),
      "bg-dot": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.5"></circle></svg>`
        )}")`,
        backgroundSize: "16px 16px",
      }),
    },
    { values: flattenColorPalette(theme("colors")), type: "color" }
  );
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            ...colors,
          },
          fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
          },
        },
      },
      plugins: [addVariablesForColors, customTailwindPlugin],
    }),
  ],
});










// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite'
// // import autoprefixer from 'autoprefixer';


// export default defineConfig({
//   plugins: [tailwindcss()]
// })
  // css: {
  //   postcss: {
  //     plugins: [
  //       tailwindcss({
  //         content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  //         theme: {
  //           extend: {
  //             animation: {
  //               shimmer: 'shimmer 2s linear infinite',
  //             },
  //             keyframes: {
  //               shimmer: {
  //                 from: { backgroundPosition: '0 0' },
  //                 to: { backgroundPosition: '-200% 0' },
  //               },
  //             },
  //           },
  //         },
  //       }),
  //       autoprefixer(),
  //     ],
  //   },
  // },
// })