/** @type {import('@sveltejs/kit').Config} */

import { mdsvex } from "mdsvex";
import { join } from "path";

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.resolve('portfolio-svelte', '../')

const projectPath = join(__dirname, "./src/routes/projects/_layout.svelte");

const config = {
	extensions: ['.svelte','.md'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: mdsvex({
		layout: {
			project: projectPath
		},
		extension: ".md",
		smartypants: {
			quotes: true,
			ellipses: true,
			dashes: 'oldschool'
		}
	})
};

export default config;
