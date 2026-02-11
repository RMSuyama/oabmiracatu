/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0F172A",
                primary: "#D61F26",
                gold: "#C5A059",
            },
        },
    },
    plugins: [],
}
