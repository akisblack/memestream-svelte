import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        posts: fetch("https://ms.odyssey346.dev/api/v1/posts").then((res) => res.json())
    }
}