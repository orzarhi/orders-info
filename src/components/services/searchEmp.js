export const searchEmp = (value, setResultsInput, data) => {
    setResultsInput(data?.filter(e => e.employee_name.toLowerCase().includes(value.toLowerCase())))
}
