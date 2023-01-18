import orderStatus from "~/constants/orderStatus";

export const statusTypeByValue = (value) => {
	return orderStatus.find((e) => e.value === value)?.label;
};
