/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: true,
    important: true,
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [
    ],
}