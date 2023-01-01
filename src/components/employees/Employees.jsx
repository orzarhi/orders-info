import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import data from '../../data';
import { deleteEmp } from '../services/deleteEmp';
import { filterByAge, filterByAtWork, filterById, filterByName, filterBySalary } from '../services/filtersEmp';
import { searchEmp } from '../services/searchEmp';
import "./Employees.css";

const Employees = () => {
    const [resultsInput, setResultsInput] = useState(data)
    const [arrowId, setArrowId] = useState(false)
    const [arrowFullName, setArrowFullName] = useState(false)
    const [arrowAge, setArrowAge] = useState(false)
    const [arrowSalary, setArrowSalary] = useState(false)
    const [arrowAtWork, setArrowAtWork] = useState(false)

    return (
        <>
            <div className='filters'>
                <input className='input-search'
                    placeholder='Search Employee...'
                    onChange={e => searchEmp(e.target.value, setResultsInput, data)}
                />
            </div>
            {resultsInput.length === 0 && <span className='not-found'>Not Found</span>}
            <table className={resultsInput.length > 0 ? 'employees' : 'employees employees-visibility'}>
                <tbody>
                    <tr>
                        <th onClick={() => filterById('id', arrowId, setArrowId, resultsInput, setResultsInput)}>{arrowId ? <AiFillCaretDown /> : <AiFillCaretUp />} Id</th>
                        <th onClick={() => filterByName('employee_name', arrowFullName, setArrowFullName, resultsInput, setResultsInput)}>{arrowFullName ? <AiFillCaretDown /> : <AiFillCaretUp />} Full Name</th>
                        <th onClick={() => filterByAge('employee_age', arrowAge, setArrowAge, resultsInput, setResultsInput)}>{arrowAge ? <AiFillCaretDown /> : <AiFillCaretUp />} Age</th>
                        <th onClick={() => filterBySalary('employee_salary', arrowSalary, setArrowSalary, resultsInput, setResultsInput)}>{arrowSalary ? <AiFillCaretDown /> : <AiFillCaretUp />}Salary</th>
                        <th onClick={() => filterByAtWork('at_work', arrowAtWork, setArrowAtWork, resultsInput, setResultsInput)}>{arrowAtWork ? <AiFillCaretDown /> : <AiFillCaretUp />}At Work</th>
                    </tr>
                    {resultsInput.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee?.id}</td>
                            <td>{employee?.employee_name}</td>
                            <td>{employee?.employee_age}</td>
                            <td>{employee?.employee_salary.toLocaleString()}</td>
                            <td><input type='checkbox' checked={employee?.at_work} readOnly /></td>
                            <td><RiDeleteBin5Line style={{ cursor: "pointer" }} onClick={() => deleteEmp(employee?.id, setResultsInput)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Employees