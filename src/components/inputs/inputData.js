export const ordersData = (orders) => {
	const categoryData = orders
		.flatMap((o) => o.data.topItemsLeftInStock)
		.map((i) => ({ label: i.name, value: i.id }));

	return categoryData;
};
