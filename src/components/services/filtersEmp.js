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

export const filterByAge = (type, arrowAge, setArrowAge, resultsInput, setResultsInput) => {
    if (arrowAge) {
        setArrowAge(!arrowAge)
        const sorted = [...resultsInput].sort((a, b) => a[type] > b[type] ? 1 : -1)
        setResultsInput(sorted)
    }
    else {
        setArrowAge(!arrowAge)
        const sorted = [...resultsInput].sort((a, b) => a[type] < b[type] ? 1 : -1)
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

