import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const DatePicker = () => {
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: "selection",
		},
	]);
	const startDate = new Date(dates[0]?.startDate)
		.toLocaleString()
		.slice(0, 8);
	const endDate = new Date(dates[0]?.endDate).toLocaleString().slice(0, 9);

	const closeRange = dates[0]?.endDate;
	console.log(startDate);
	console.log(endDate);
	return (
		<>
			{!closeRange && (
				<DateRange
					editableDateInputs={true}
					onChange={(item) => setDates([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={dates}
					retainEndDateOnFirstSelection={true}
				/>
			)}
			{startDate && <span>From: {startDate}</span>}
			{endDate && <span>To: {endDate}</span>}
		</>
	);
};

export default DatePicker;
