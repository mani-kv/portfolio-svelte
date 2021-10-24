const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.md"),
	() => import("../../../src/routes/projects/__layout.svelte"),
	() => import("../../../src/routes/projects/index.md"),
	() => import("../../../src/routes/projects/project1.md")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.md
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects/index.md
	[/^\/projects\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/projects/project1.md
	[/^\/projects\/project1\/?$/, [c[0], c[3], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];