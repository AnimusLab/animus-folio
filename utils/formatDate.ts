export function formatDate(value: string | Date) {
	return new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeZone: "UTC",
	}).format(typeof value === "string" ? new Date(value) : value);
}
