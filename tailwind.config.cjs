const { fontFamily } = require('tailwindcss/defaultTheme')
const config = require('./tailwind.theme.config.cjs')
const themeConfig = process.env.THEME_KEY && config[process.env.THEME_KEY] ? config[process.env.THEME_KEY] : config.default
const { colors } = themeConfig
module.exports = {
    darkMode: 'class',
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,ts,svelte,mdx}'
    ],
    safelist: ['dark'],
    theme: {
		fontFamily: {
			sans: ['Inter', ...fontFamily.sans],
			mono: ['Fira Code', ...fontFamily.mono],
            serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
		},
		extend: {
            colors: {
                theme: {
                    ...colors
                },
                background: '#0a0a0a',
                surface: '#1a1a1a',
                border: '#2a2a2a',
            },
            typography: (theme) => ({
                dark: {
                    css: {
                        color: '#e5e5e5',
                        a: {
                            color: '#4ade80',
                            '&:hover': { color: '#22c55e' },
                        },
                        blockquote: {
                            color: '#4ade80',
                            borderColor: '#2a2a2a'
                        },
                        h1: { color: '#ffffff' },
                        h2: { color: '#ffffff' },
                        h3: { color: '#ffffff' },
                        h4: { color: '#ffffff' },
                        strong: { color: '#e5e5e5' },
                    },
                },
                DEFAULT: {
                    css: {
                        color: '#e5e5e5',
                        a: {
                            color: '#4ade80',
                            '&:hover': { color: '#22c55e' },
                        },
                        blockquote: {
                            color: '#4ade80',
                            borderColor: '#2a2a2a',
                        },
                        h1: { color: '#ffffff' },
                        h2: { color: '#ffffff' },
                        h3: { color: '#ffffff' },
                        h4: { color: '#ffffff' },
                        strong: { color: '#e5e5e5' },
                        code: { color: '#4ade80' },
                    }
                },
            }),
		},
	},
    variants: {
        extend: { typography: ["dark"] }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
