import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        posts: fetch("https://memestream.odyssey346.dev/api/v1/posts").then((res) => res.json())
    }
}