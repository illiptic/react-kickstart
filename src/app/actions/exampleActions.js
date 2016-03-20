export function toggleDisplay() {
	console.log('toggle');
	return { type: 'TOGGLE_DISPLAY' };
}

export function addToList(text) {
	return { type: 'EX2_ADD', text };
}
