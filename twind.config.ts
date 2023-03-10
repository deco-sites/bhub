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
        primary: "#FF0E70",
        black: "#141414",
        white: "#f9f9f9",
        secondaryDark: "#CE0067",
        secondaryLight: "#ff3198",
        darkGrey: "#282828",
        smoke: "#ffffff1a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["serif"],
      },
      screens: {
        sm: "768px",
        md: "992px",
        lg: "1280px",
      },
      boxShadow: {
        "3xl": "0px 0px 30px 10px rgb(0 0 0 / 10%)",
        navbar: "0px 4px 4px rgba(0, 0, 0, 0.4)",
      },
    },
  },
};

export default options;
