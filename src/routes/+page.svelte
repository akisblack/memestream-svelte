<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	onMount(() => {
		const interval = setInterval(async () => {
			const response = await fetch("https://memestream.odyssey346.dev/api/v1/posts").then((res) => res.json())
			data.posts = response
		}, 30000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col-reverse items-center gap-8">
	{#each data.posts as post}
		<div class="border-4 border-accent rounded-2 mx-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
			{#if post.filetype === "image"}
				<img
					src="https://memestream.odyssey346.dev/{post.location}"
					alt="Post (img or GIF)"
					loading="lazy"
					class="rounded-1 max-h-screen"
				/>
			{:else}
				<video
					controls
					alt="Post (video)"
					loading="lazy"
					class="rounded-1 max-h-screen"
				>
					<source
						src="https://memestream.odyssey346.dev/{post.location}"
						type="video/mp4"
					/>
					<track kind="captions" />
				</video>
			{/if}
		</div>
	{/each}
</div>
