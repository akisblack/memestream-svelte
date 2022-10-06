<div class="flex flex-basis-a justify-center">
    <form action="https://memestream.odyssey346.dev/api/v1/upload" method="POST" enctype="multipart/form-data" class="flex gap-4 p-4 mb-8 rounded bg-secondary">
        <input type="file" accept=".jpg, .jpeg, .png, .gif, .mp4" name="file" class="button text-center cursor-pointer" required>
        <button class="button">Submit</button>
    </form>
</div>

<style>
    ::file-selector-button {
        display: none;
    }
</style>