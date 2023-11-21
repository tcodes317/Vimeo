import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      xs: "150px",
      xxs: "300px",
      sm: "468px",
      mdd: "500px",
      md: "768px",
      lgg: "900px",
      lg: "976px",
      xl: "1024px",
      xll: "1200px",
      xxl: "1440px"
    },
    extend: {
      Default: colors.neutral[100],
      Default_i: colors.neutral[200],
      Default_ii: colors.neutral[300],
      Default_iii: colors.neutral[400],
    },
  },
  plugins: [],
}