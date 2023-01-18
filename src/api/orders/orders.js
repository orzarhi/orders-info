import axios from "../axios";

export const getOreders = async () => {
	const { data } = await axios.get(
		"/ORDERS?$select=CUSTNAME,CDES,CURDATE,ORDNAME,ORDSTATUSDES,TOTQUANT,QPRICE&$expand=ORDERITEMS_SUBFORM($select=KLINE,PARTNAME,PDES,QUANT,PRICE,QPRICE)"
	);
	console.log("🚀 data", data);

	return data;
};
