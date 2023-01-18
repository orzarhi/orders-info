export const customerName = (data) => {
	const name = data.map((n) => n.CDES);

	return name;
};

export const customerSum = (data) => {
	const sum = data.map((s) => s.QPRICE);

	return sum;
};
