<script>
    import ThemeToggle from "$lib/ThemeToggle.svelte";

    const menus = [
		{ name: "home", url: "/" },
		{ name: "privacy", url: "/privacy" },
		{ name: "terms of service", url: "/terms" },
		{ name: "about", url: "/about" }
	];
</script>

<div class="flex flex-col justify-center items-center text-2xl mb-4 text-center">
    <h1 class="font-semibold">memestream</h1>
    <p>the never-ending stream of memes</p>
    <div class="flex flex-row gap-4 m-4">
        {#each menus as { url, name }}
            <a href={url} class="button">{name}</a>
        {/each}

        <ThemeToggle />
    </div>
</div>