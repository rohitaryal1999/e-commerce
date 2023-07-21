const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "h-1/2	h-1/3 h-2/3	h-1/4	h-2/4	h-3/4	h-1/5	h-2/5	h-3/5	h-4/5	h-1/6	h-2/6	h-3/6	h-4/6 h-5/6 w-1/2	w-1/3 w-2/3	w-1/4	w-2/4	w-3/4	w-1/5	w-2/5	w-3/5	w-4/5	w-1/6	w-2/6	w-3/6	w-4/6 w-5/6",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "video-section": "url('/wave_background.png')",
      },
      borderRadius: {
        radius20: "20px",
      },
      screens: {
        m: { max: "640px" },
      },
      gridTemplateColumns: {
        2: "repeat(2, minmax(0, 180px))",
      },
      height: {
        lg: "624px",
      },
      maxHeight: {
        lg: "624px",
      },
      colors: {
        // ...colors,
        "custom-gray": "#B2B2B2",
        "custom-brown": "#F6FAFD",
        "light-blue": "#DBEAFE",
      },
    },
    fontFamily: {
      sans: ["DM Sans"],
      serif: ["DM Sans"],
      mono: ["DM Sans"],
    },
    fontSize: {
      h1: ["2.5rem", "3rem"],
      h2: ["2rem", "2.375rem"],
      h3: ["1.5rem", "1.75rem"],
      h4: ["1.25rem", "1.5rem"],
      h5: ["1rem", "1.25rem"],
      h6: ["0.875rem", "1rem"],

      d1: ["5rem", "6.25rem"],
      d2: ["4.5rem", "5.75rem"],
      d3: ["4rem", "4.5rem"],
      d4: ["3.5rem", "4rem"],
      d5: ["3rem", "3.5rem"],
      d6: ["2.5rem", "3rem"],
      d7: ["2rem", "2.5rem"],
      d8: ["1.5rem", "2rem"],
      d9: ["1.25rem", "1.5rem"],
      d10: ["0.875rem", "1.125rem"],

      sub: ["0.875rem", "1.375rem"],
      subMicro: ["0.625rem", "0.875rem"],

      p20: ["1.25rem", "1.5rem"],
      p18: ["1.125rem", "1.55rem"],
      p16: ["1rem", "1.375rem"],
      p14: ["0.875rem", "1.25rem"],
      p12: ["0.75rem", "1.125rem"],
      p10: ["0.625rem", "0.625rem"],

      buttonLarge: ["0.875rem", "0.875rem"],
      buttonBase: ["0.75rem", "0.75rem"],
      buttonSmall: ["0.675rem", "0.675rem"],
    },
    colors: {
      ...colors,
      primary: "#2C3741",
      secondary: "#7A8B94",
      muted: "#BAC3C8",
      white: "#FFFFFF",
      blue: "#357AD8",
      brown: "#F6FAFD",
      black: "#404040",

      surface: {
        divider: "#E9EEF2",
        background: "#EDF2F7",
        secondary: "#F7FAFC",
        overlay: "#00000099",
        dark: "#17171B",
      },

      accent: {
        blue: "#2E7AD8",
        green: "#08BD80",
        orange: "#FFAD3B",
        red: "#FF0000",
        gray: "#91A1AE",
        pink: "#DE4B9B",
        indigo: "#4A35C3",
      },

      progress: {
        blue: "#7895FF",
      },

      gray: {
        50: "#FAFAFA",
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        500: "#A0AEC0",
        600: "#718096",
        700: "#4A5568",
        800: "#2D3748",
        900: "#1A202C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
