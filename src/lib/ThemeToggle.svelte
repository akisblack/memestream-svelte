<script lang="ts">
	import { afterUpdate } from "svelte";
	import DarkMode from "svelte-dark-mode";

	let theme: "dark" | "light";

	afterUpdate(() => {
		document.documentElement.className = theme;
	});

	let toggle = () => {
		theme = theme === "dark" ? "light" : "dark";
	};
</script>

<DarkMode bind:theme />

<button class="button flex items-center gap-1 justify-center" on:click={toggle}>
	<i
		class="i-ic:outline-{theme === 'dark'
			? 'light'
			: 'dark'}-mode h-6 w-6 px-[.8rem]"
	/>
	<span class="sm:hidden">toggle theme</span>
</button>
