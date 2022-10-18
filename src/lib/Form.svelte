<script lang="ts">
	let success: boolean = false;
	let errored: boolean = false;
	let noFileSelected: boolean = false;
	let fileTooBig: boolean = false;

	function submitForm() {
		const formData = new FormData();

		let input = document.getElementById("input") as HTMLInputElement;

		if (!input.validity.valid) {
			noFileSelected = true;

			return;
		}

		noFileSelected = false;

		fileTooBig = false;

		let file = input.files![0];

		if (file.size > 10000000) {
			fileTooBig = true;

			return;
		}

		formData.append("file", file);

		fetch("https://memestream.odyssey346.dev/api/v1/upload", {
			method: "POST",
			body: formData
		})
			.then((data) => {
				if (data.status === 200) {
					success = true;
				}
			})
			.catch((err) => {
				console.log(err);
				errored = true;
			});
	}
</script>

<div class="flex flex-basis-a justify-center form">
	<div
		class="flex flex-col gap-4 p-4 mb-8 mx-4 rounded text-center bg-secondary"
	>
		<div class="flex flex-col gap-4 sm:flex-row justify-center">
			<input
				id="input"
				type="file"
				accept=".jpg, .jpeg, .png, .gif, .mp4"
				name="file"
				class="button text-center cursor-pointer"
				required
			/>
			<button class="button" on:click={submitForm}>submit</button>
		</div>

		{#if success}
			<span class="text-green">successfully uploaded</span>
		{/if}

		{#if errored}
			<span class="text-red">failed to upload</span>
		{/if}

		{#if noFileSelected}
			<span class="text-red">no file selected, please select a file</span>
		{/if}

		{#if fileTooBig}
			<span class="text-red"
				>file is larger than 10mb, please select a smaller one</span
			>
		{/if}
	</div>
</div>

<style>
	::file-selector-button {
		display: none;
	}
</style>

<noscript>
	<style>
		.form {
			display: none;
		}
	</style>
</noscript>