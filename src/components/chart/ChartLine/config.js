export const customerName = (data) => {
	const name = data.map((n) => n.name);

	return name;
};

export const customerSalary = (data) => {
	const salary = data.map((s) => s.salary);

	return salary;
};
