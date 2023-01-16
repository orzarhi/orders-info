import axios from "../axios";

export const getOreders = async () => {
	const { data } = await axios.get(
		"/ORDERS?$select=CUSTNAME,CDES,CURDATE,ORDNAME,ORDSTATUSDES,TOTQUANT,QPRICE"
	);
	console.log("🚀 data", data);

	return data;
};
