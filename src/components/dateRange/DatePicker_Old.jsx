import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "./DatePicker.css";

const DatePicker = () => {
	const [dates, setDates] = useState([new Date(), new Date()]);

	return (
		<div className="date-picker">
			<DateRangePicker
				onChange={setDates}
				value={dates}
				// calendarAriaLabel="Toggle calendar"
				// clearAriaLabel="Clear value"
				// dayAriaLabel="Day"
				// monthAriaLabel="Month"
				// nativeInputAriaLabel="Date"
				// yearAriaLabel="Year"
			/>
		</div>
	);
};

export default DatePicker;
