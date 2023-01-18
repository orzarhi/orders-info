export const filterByDates = (data, setData, dateFrom, dateTo) => {
	setData(
		data.filter(
			(d) =>
				new Date(d.CURDATE)?.toISOString() >=
					new Date(dateFrom)?.toISOString() &&
				new Date(d.CURDATE)?.toISOString() <=
					new Date(dateTo)?.toISOString()
		)
	);
};
