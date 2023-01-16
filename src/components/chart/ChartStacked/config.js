export const ordersDataName = (orders) => {
	const name = orders
		.flatMap((o) => o.data.topItemsLeftInStock)
		.map((i) => i.name);

	return name;
};

export const countLeftInStock = (orders) => {
	const countLeftInStock = orders
		.flatMap((o) => o.data.topItemsLeftInStock)
		.map((i) => i.countLeftInStock);

	return countLeftInStock;
};

export const countOrdered = (orders) => {
	const countOrdered = orders
		.flatMap((o) => o.data.topItemsLeftInStock)
		.map((i) => i.countOrdered);

	return countOrdered;
};
