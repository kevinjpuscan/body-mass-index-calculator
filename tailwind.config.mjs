/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fm_blue: "#345FF6",
        fm_gunmetal: "#253347",
        fm_dark_electric_blue: "#5E6E85",
        fm_borders: "#D8E2E7",
        fm_gradient_from: "rgba(214, 252, 254, 0)",
        fm_gradient_to: "#D6E6FE",
      },
    },
  },
  plugins: [],
};
