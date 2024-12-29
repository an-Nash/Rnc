// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         carousel: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//         floating: {
//           '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
//           '50%': { transform: 'translateY(-10px) scale(1.1)' },
//         }
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         floating: 'floating 20s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }


/** @type {import('tailwindcss').Config} */
import animatePlugin from 'tailwindcss-animate'; // Import the plugin

export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0) scale(1.1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floating: 'floating 20s ease-in-out infinite',
      },
    },
  },
  plugins: [animatePlugin], // Use the imported plugin
};