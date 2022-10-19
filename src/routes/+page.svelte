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

<div class="flex flex-col-reverse items-center max-w-fit gap-8">
	{#each data.posts as post}
		<div class="border-4 border-accent rounded-2 mx-4">
			{#if post.filetype === "image"}
				<img
					src="https://memestream.odyssey346.dev/{post.location}"
					alt="Post (img or GIF)"
					loading="lazy"
					class="rounded-1 w-74 sm:w-xl"
				/>
			{:else}
				<video
					controls
					alt="Post (video)"
					loading="lazy"
					class="rounded-1 w-74 sm:w-xl"
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
