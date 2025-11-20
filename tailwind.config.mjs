/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Matches the fonts loaded in Layout.astro
				sans: ['Host Grotesk', 'sans-serif'],
				mono: ['Space Mono', 'monospace'],
			},
			colors: {
				// Custom monochrome palette from the design
				mono: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
					900: '#111827',
					950: '#030712',
				}
			},
			animation: {
				'blink': 'blink 1s step-end infinite',
				'glitch': 'glitch 2s steps(100) infinite',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
                // Basic glitch keyframes if needed for utility classes
                // Note: Complex glitch effects in this project are currently handled via global CSS in Layout.astro
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' }
                }
			}
		},
	},
	plugins: [],
}