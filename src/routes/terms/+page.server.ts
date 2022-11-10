import { redirect } from "@sveltejs/kit";

export function load() {
	throw redirect(307, "https://ms.odyssey346.dev/terms");
}
