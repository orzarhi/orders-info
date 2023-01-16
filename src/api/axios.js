import axios from "axios";

export default axios.create({
	baseURL: "https://pridev.max-erp.com/odata/Priority/tabula.ini/maxsg",
	headers: {
		Authorization: "Basic TWF4QXBpOk1BcGkkMjAyMA==",
	},
	withCredentials: true,
});
