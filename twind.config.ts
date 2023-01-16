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
      maxWidth: {
        "1/2": "50%",
      },
      screens: {
        tablet: "768px",
        desktop: "992px",
      },
      colors: {
        primary: "#3763ff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};

export default options;
