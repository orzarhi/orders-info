export const filterByName = (data, setData, value) => {
	setData(
		data?.filter((d) => d.CDES.toLowerCase().includes(value?.toLowerCase()))
	);
};

export const filterByStatus = (data, setData, object) => {
	const value = object?.label;
	setData(data?.filter((d) => d.ORDSTATUSDES === value));
};

export const createNewObjectStatus = (data) => {
	const orderStatus = data.map((d) => ({
		label: d.ORDSTATUSDES,
		value: d.ORDSTATUSDES,
	}));

	return orderStatus;
};

export const deletingDuplicates = (data) => {
	const uniqueName = data
		.map((e) => e.label)
		.map((e, i, final) => final.indexOf(e) === i && i)
		.filter((e) => data[e])
		.map((e) => data[e]);

	const resultStatus = uniqueName.filter((u) => u.label !== null);

	return resultStatus;
};
