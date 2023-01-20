import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  plugins: {
    "scroll-smoth": { "scroll-behavior": "smooth" },
    "scroll-snap-x": { "scroll-snap-type": "x mandatory" },
    "snap-center": { "scroll-snap-align": "center" },
    "aspect-16/10": { "aspect-ratio": "16 / 10" },
  },
  theme: {
    extend: {
      colors: {
        primary: "#3763ff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["serif"],
      },
      screens: {
        sm: "768px",
        md: "992px",
        lg: "1200px",
      },
      boxShadow: {
        "3xl": "0px 0px 30px 10px rgb(0 0 0 / 10%)",
      },
    },
  },
};

export default options;
