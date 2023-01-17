import orderStatus from "~/components/data/orderStatus";

export const statusTypeByValue = (value) => {
	return orderStatus.find((e) => e.value === value)?.label;
};
