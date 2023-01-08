export const agentsName = (data) => {
	const label = data.map((m) => m.label);

	return label;
};

export const agentsValue = (data) => {
	const value = data.map((m) => m.value);

	return value;
};
