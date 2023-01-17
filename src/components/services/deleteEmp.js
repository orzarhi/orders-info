import { SuccessMessage } from "~/utils/notification/notification";

export const deleteEmp = (id, setResultsInput) => {
	setResultsInput((prevEmp) => {
		return prevEmp.filter((emp) => emp.ORDNAME !== id);
	});
	SuccessMessage("Successfully deleted");
};
