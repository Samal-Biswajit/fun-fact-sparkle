import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'fact-enter': 'fact-enter 0.8s ease-out',
			},
			keyframes: {
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3) rotate(-10deg)',
						opacity: '0',
					},
					'50%': {
						transform: 'scale(1.05) rotate(2deg)',
					},
					'70%': {
						transform: 'scale(0.9) rotate(-1deg)',
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1',
					},
				},
				'fact-enter': {
					'0%': {
						transform: 'translateY(30px) scale(0.9)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1',
					},
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
