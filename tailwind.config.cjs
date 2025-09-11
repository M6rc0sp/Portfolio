/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a'
                },
                accent: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12'
                }
            },
            spacing: {
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
            },
            gap: {
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
            }
        },
    },
    plugins: [
        // Estilos base globais centralizados no Tailwind
        plugin(function ({ addBase, theme }) {
            addBase({
                'html, body': {
                    color: '#ffffff',
                },
                // Links globais sem sublinhado e com cor do tema
                'a, a:hover, a:focus, a:active, a:visited': {
                    textDecoration: 'none',
                },
                'a': {
                    color: theme('colors.accent.400'),
                    transition: 'color .15s ease, opacity .15s ease, transform .15s ease',
                },
                'a:hover': {
                    color: theme('colors.accent.500'),
                },
                // Não forçar cor em ícones: preserva cores de brand
                'svg, .icon, .icon-sm, .icon-md, .icon-lg, .icon-xl': {
                    color: 'currentColor',
                },
            });
        }),
    ],
}
