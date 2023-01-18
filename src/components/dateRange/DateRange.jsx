import { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import { filterByDates } from "./config";
import clsx from "clsx";
import "./DateRange.css";
const DateRange = ({ data, setData, className }) => {
	const [dates, setDates] = useState(new Date());
	const [firstRound, setFirstRound] = useState(false);

	useEffect(() => {
		if (!firstRound) {
			setFirstRound(true);
			return;
		} else if (dates === "" || !dates) {
			return setData(data);
		}
		filterByDates(data, setData, dates[0], dates[1]);
	}, [dates]);

	return (
		<DateRangePicker
			size="lg"
			appearance="subtle"
			placeholder="חיתוך תאריכים"
			className={clsx(className)}
			format="dd-MM-yyyy"
			selected={dates}
			onChange={(date) => setDates(date)}
		/>
	);
};

export default DateRange;
