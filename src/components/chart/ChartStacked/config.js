// export const ordersDataName = (orders) => {
// 	const name = orders
// 		.flatMap((o) => o.data.topItemsLeftInStock)
// 		.map((i) => i.name);

// 	return name;
// };

// export const countLeftInStock = (orders) => {
// 	const countLeftInStock = orders
// 		.flatMap((o) => o.data.topItemsLeftInStock)
// 		.map((i) => i.countLeftInStock);

// 	return countLeftInStock;
// };

// export const countOrdered = (orders) => {
// 	const countOrdered = orders
// 		.flatMap((o) => o.data.topItemsLeftInStock)
// 		.map((i) => i.countOrdered);

// 	return countOrdered;
// };
export const customerName = (data) => {
	const name = data.map((n) => n.CDES);

	return name;
};

export const customerSum = (data) => {
	const sum = data.map((s) => s.QPRICE);

	return sum;
};
