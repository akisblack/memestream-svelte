<script>
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Form from "$lib/Form.svelte";

	const menus = [
		{ name: "home", url: "/" },
		{ name: "privacy", url: "/privacy" },
		{ name: "terms of service", url: "/terms" },
		{ name: "about", url: "/about" },
		{
			name: "source code",
			url: "https://github.com/akisblack/memestream-svelte"
		}
	];

	import { page } from "$app/stores";

	$: currentPage = $page.url.pathname;
</script>

<div
	class="flex flex-col justify-center items-center text-2xl mb-4 text-center"
>
	<h1 class="font-semibold">memestream</h1>
	<p>the never-ending stream of memes</p>
	<details class="mt-4" open>
		<summary
			class="list-none cursor-pointer text-violet-600 dark:text-violet"
			>show/hide navigation</summary
		>
		<div class="grid grid-cols-2 gap-4 m-4 sm:(flex flex-row)">
			{#each menus as { url, name }}
				<a href={url} class="button">{name}</a>
			{/each}

			<ThemeToggle />
		</div>

		{#if currentPage === "/"}
            <Form />
        {/if}
	</details>
</div>

{#if currentPage != "/"}
	<style>
		summary {
			display: none;
		}
	</style>
{/if}
