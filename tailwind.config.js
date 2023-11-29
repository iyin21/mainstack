/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: {
                    100: "#131316",
                },
                white: {
                    100: "#ffffff",
                },
            },
            fontSize: {
                "3xl": ["36px", "48px"],
                "2xl": ["32px", "43px"],
                xl: ["28px", "40px"],
                "2lg": ["24px", "32px"],
                lg: ["20px", "140%"],
                "3md": ["18px", "24px"],
                "2md": ["16px", "24px"],
                md: ["14px", "16px"],
                sm: ["12px", "14px"],
                xs: ["8px", "10px"],
            },
        },
        fontFamily: {
                
          Degular: ["degular-variable", "sans-serif"],
      },
    },
    plugins: [],
}
