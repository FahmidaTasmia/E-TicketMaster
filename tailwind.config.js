/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.{html,js}'
    ],
    theme: {
      extend: {
        screens: {
          'phone': '640px',
          'tablet': '768px',
          'laptop': '1024px',
          'desktop': '1280px',
        },
      },
    },
    plugins: [],
  }
  