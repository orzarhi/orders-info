export const deleteEmp = (id, setResultsInput) => {
	setResultsInput((prevEmp) => {
		return prevEmp.filter((emp) => {
			return emp.id !== id;
		});
	});
};
