import {
	defineConfig,
	transformerVariantGroup,
	transformerDirectives,
	presetWind,
	presetIcons
} from "unocss";

import { extractorSvelte } from "unocss";

export default defineConfig({
	extractors: [extractorSvelte],

	presets: [
		presetWind({
			dark: "class"
		}),
		presetIcons()
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],

	safelist: ["i-ic:outline-dark-mode", "i-ic:outline-light-mode", "hidden"],

	theme: {
		fontFamily: {
			primary: ["Outfit"]
		},
		margin: {
			"0-auto": "0 auto"
		},
		colors: {
			primary: "var(--primary)",
			secondary: "var(--secondary)",
			tertiary: "var(--tertiary)",
			grey: "var(--grey)",
			accent: "var(--accent)",
			transparent: "transparent",
			current: "currentColor"
		}
	},

	safelist: ["i-ic:outline-dark-mode", "i-ic:outline-light-mode"]
});
