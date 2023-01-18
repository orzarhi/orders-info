import { statusTypeByValue } from "~/utils/statusType/statusType";

export const filterByName = (data, setData, value) => {
	setData(
		data?.filter((d) => d.CDES.toLowerCase().includes(value?.toLowerCase()))
	);
};
export const filterByStatus = (data, setData, object) => {
	const value = object?.value;
	setData(data?.filter((d) => d.ORDSTATUSDES === statusTypeByValue(value)));
};
