<script lang="ts">
	let posts: any = [];
	async function fetchPosts() {
		const url = `https://memestream.odyssey346.dev/api/v1/posts`;
		const response = await fetch(url);
		posts = await response.json();
		return posts;
	}
</script>

{#await fetchPosts()}
	<span>Loading posts...</span>
{:then posts}
	<div class="flex flex-col-reverse items-center max-w-fit gap-8">
		{#each posts as post}
			<div class="border-4 border-accent rounded-2 mx-4">
				{#if post.filetype === "image"}
					<img
						src="https://memestream.odyssey346.dev/{post.location}"
						alt="Post (img or GIF)"
						loading="lazy"
						class="rounded-1"
					/>
				{:else}
					<video
						controls
						alt="Post (video)"
						loading="lazy"
						class="rounded-1"
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
{:catch}
	<span>Failed to load posts.</span>
{/await}
