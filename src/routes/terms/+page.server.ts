import { redirect } from "@sveltejs/kit";

export function load() {
	throw redirect(307, "https://memestream.odyssey346.dev/terms");
}
