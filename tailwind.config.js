const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                ...colors,
                background: "#1A1C22",
                accent: "#BC0E19",
                txt: "#FEF4F4",
                txtDark: "#ccc",
            },
        },
    },
    plugins: [],
}
