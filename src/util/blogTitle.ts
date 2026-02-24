export function titleToSlug(title: string): string {
	return title
		.toLowerCase()
		.replaceAll(/[^a-zA-Z0-9 -]/g, "")
		.replaceAll(" ", "-");
}
