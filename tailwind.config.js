/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bing': '#43B443',
     })
  }
  // ...
}
