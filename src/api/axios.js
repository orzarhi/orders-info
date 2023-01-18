import axios from "axios";

export default axios.create({
	baseURL: "https://pridev.max-erp.com/odata/Priority/tabula.ini/maxsg",
	headers: {
		"Content-type": "application/json",
		Authorization: "Basic TWF4QXBpOk1BcGkkMjAyMA==",
	},
	proxy: {
		protocol: "https",
		host: "127.0.0.3000",
		port: 3000,
		auth: {
			username: "MaxApi",
			password: "MApi$2020",
		},
	},
});
//		"Access-Control-Allow-Origin": "*",
