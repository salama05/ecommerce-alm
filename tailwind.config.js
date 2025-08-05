/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "color-primary1": "#363738",
      "color-primary2": "#3d3d3d",
      "color-text-1": "#FAFAFA",
      "color-text-2": "#7D8184",
      "color-second-1": "#FEFAF1",
      "color-second-2": "#F5F5F5",
      "color-button-1": "#00FF66",
      "color-button-2": "#DB4444",
      "color-button-hover": "#E07575",
      "color-button-hover2": "#A0BCE0",
      "color-star-yellow": "#FFAD33",
      "color-star-gray": "#bfbfbf",

      "color-primary1": "#363738",
      "color-primary1": "#363738",

      white: "#FFFFFF",
      black: "#000000",
      lines: "#3E3F4E",
      red: "#EA5555",
    },

    fontSize: {
      //   400
      "font-xs-400": ["10px", { fontWeight: "400" }],
      "font-sm-400": ["12px", { fontWeight: "400" }],
      "font-md-400": ["14px", { fontWeight: "400" }],
      "font-lg-400": ["16px", { fontWeight: "400" }],
      "font-xl-400": ["18px", { fontWeight: "400" }],
      "font-2xl-400": ["20px", { fontWeight: "400" }],
      "font-3xl-400": ["22px", { fontWeight: "400" }],
      "font-4xl-400": ["24px", { fontWeight: "400" }],
      "font-5xl-400": ["28px", { fontWeight: "400" }],
      "font-6xl-400": ["32px", { fontWeight: "400" }],

      // 500
      "font-xs-500": ["10px", { fontWeight: "500" }],
      "font-sm-500": ["12px", { fontWeight: "500" }],
      "font-md-500": ["14px", { fontWeight: "500" }],
      "font-lg-500": ["16px", { fontWeight: "500" }],
      "font-xl-500": ["18px", { fontWeight: "500" }],
      "font-2xl-500": ["20px", { fontWeight: "500" }],
      "font-3xl-500": ["22px", { fontWeight: "500" }],
      "font-4xl-500": ["24px", { fontWeight: "500" }],
      "font-5xl-500": ["28px", { fontWeight: "500" }],
      "font-6xl-500": ["32px", { fontWeight: "500" }],

      //   600
      "font-xs-600": ["10px", { fontWeight: "600" }],
      "font-sm-600": ["12px", { fontWeight: "600" }],
      "font-md-600": ["14px", { fontWeight: "600" }],
      "font-lg-600": ["16px", { fontWeight: "600" }],
      "font-xl-600": ["18px", { fontWeight: "600" }],
      "font-2xl-600": ["20px", { fontWeight: "600" }],
      "font-3xl-600": ["22px", { fontWeight: "600" }],
      "font-4xl-600": ["24px", { fontWeight: "600" }],
      "font-5xl-600": ["28px", { fontWeight: "600" }],
      "font-6xl-600": ["32px", { fontWeight: "600" }],

      // 700
      "font-4xl-700": ["24px", { fontWeight: "700" }],
    },
    screens: {
      "ov-1200": "1200px",
      "ov-1000": "1000px",
      "ov-800": "800px",
      "sm-430": { max: "430px" },

      "sm-640": { max: "640px" },

      "sm-800": { max: "799px" },
      "sm-1000": { max: "1000px" },

      "sm-1200": { max: "1200px" },
      "sm-1024": { max: "1024px" },
    },
  },
  plugins: [],
};
