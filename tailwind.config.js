/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#B626E8',
                black: '#0C1231',
                green: {
                    DEFAULT: '#46AD07',
                    100: '#F6FCF3',
                },
                orange: {
                    DEFAULT: '#F5691C',
                    100: '#FEF7F3',
                },
            },
            fontSize: {
                '6xl': '64px',
                '5xl': '48px',
                '4xl': '40px',
                '3xl': '32px',
                '2xl': '24px',
                'xl': '20px',
                'base': '18px',
            },
        },
    },
    plugins: [],
};
