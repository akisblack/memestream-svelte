<script lang="ts">
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";
	import Header from "$lib/Header.svelte";
</script>

<noscript>
	<div style="padding: 1rem; background-color: var(--accent); color: var(--tertiary);">
		Please enable JavaScript for this site to work properly.
	</div>
</noscript>

<main>
	<Header />
	<slot />
</main>
