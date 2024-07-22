/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // require("daisyui"),
    require("@headlessui/react"),
    require("@heroicons/react/20/solid"),
    require(`@heroicons/react/24/solid`),
  ],
};
