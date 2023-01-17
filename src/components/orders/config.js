import { statusTypeByValue } from "~/utils/statusType/statusType";

export const searchName = (data, setData, value) => {
	setData(
		data?.filter((e) => e.CDES.toLowerCase().includes(value?.toLowerCase()))
	);
};
export const filterByStatus = (data, setData, value) => {
	if (statusTypeByValue(value) === "הכל") return setData(data);
	setData(data?.filter((e) => e.ORDSTATUSDES === statusTypeByValue(value)));
};
