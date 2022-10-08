<script lang="ts">
	import "uno.css";
	import "@unocss/reset/tailwind.css";
	import "../app.css";
	import Header from "$lib/Header.svelte";
</script>

<noscript>
	<div class="p-4 bg-accent text-tertiary">
		Please enable JavaScript for this site to work properly.
	</div>
</noscript>

<main>
	<Header />
	<slot />
</main>
