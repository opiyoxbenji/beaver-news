/** @type {import('tailwindcss').Config} */
export default {
	// Define the content paths for PurgeCSS to analyze
	content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
	// Theme customization
	theme: {
		extend: {
			 // Extend the default font family with Rubik and fallback to sans-serif
			fontFamily: {
				primary: ['Rubik', 'sans-serif'],
			},
		},
	},
	// Plugins array, currently empty
	plugins: [],
};
