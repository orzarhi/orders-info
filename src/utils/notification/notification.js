import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({ duration: 5000 });

export const SuccessMessage = (message) => {
	return notyf.success(message);
};

export const ErrorMessage = (message) => {
	return notyf.error(message);
};
