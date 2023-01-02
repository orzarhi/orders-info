export const searchEmp = (value, setResultsInput, data) => {
    setResultsInput(data?.filter(e => e.name.toLowerCase().includes(value.toLowerCase())))
}
