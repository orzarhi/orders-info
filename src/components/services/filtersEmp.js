export const filterById = (type, arrowId, setArrowId, resultsInput, setResultsInput) => {
    if (arrowId) {
        setArrowId(!arrowId)
        const sorted = [...resultsInput].sort((a, b) => a[type] > b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
    else {
        setArrowId(!arrowId)
        const sorted = [...resultsInput].sort((a, b) => a[type] < b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
}

export const filterByName = (type, arrowFullName, setArrowFullName, resultsInput, setResultsInput) => {
    if (arrowFullName) {
        setArrowFullName(!arrowFullName)
        const sorted = [...resultsInput].sort((a, b) => a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1)
        setResultsInput(sorted)
    }
    else {
        setArrowFullName(!arrowFullName)
        const sorted = [...resultsInput].sort((a, b) => a[type].toLowerCase() < b[type].toLowerCase() ? 1 : -1)
        setResultsInput(sorted)
    }
}

export const filterByDate = (type, arrowDate, setArrowDate, resultsInput, setResultsInput) => {
    if (arrowDate) {
        setArrowDate(!arrowDate)
        const sorted = [...resultsInput].sort((a, b) => new Date(a[type]).getTime() - new Date(b[type]).getTime())
        setResultsInput(sorted)
    }
    else {
        setArrowDate(!arrowDate)
        const sorted = [...resultsInput].sort((a, b) => new Date(b[type]).getTime() - new Date(a[type]).getTime())

        setResultsInput(sorted)
    }
}

export const filterBySalary = (type, arrowSalary, setArrowSalary, resultsInput, setResultsInput) => {
    if (arrowSalary) {
        setArrowSalary(!arrowSalary)
        const sorted = [...resultsInput].sort((a, b) => a[type] > b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
    else {
        setArrowSalary(!arrowSalary)
        const sorted = [...resultsInput].sort((a, b) => a[type] < b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
}

export const filterByAtWork = (type, arrowSalary, setArrowSalary, resultsInput, setResultsInput) => {
    if (arrowSalary) {
        setArrowSalary(!arrowSalary)
        const sorted = [...resultsInput].sort((a, b) => a[type] > b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
    else {
        setArrowSalary(!arrowSalary)
        const sorted = [...resultsInput].sort((a, b) => a[type] < b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
}