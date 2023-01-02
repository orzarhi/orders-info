import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import user from "../../../public/image/user.png";
import data from '../../data';
import Pdf from '../documents/Pdf';
import Xlsx from '../documents/Xlsx';
import { deleteEmp } from '../services/deleteEmp';
import { filterByAtWork, filterByDate, filterById, filterByName, filterBySalary } from '../services/filtersEmp';
import { searchEmp } from '../services/searchEmp';
import "./Employees.css";

const Employees = () => {
    const [resultsInput, setResultsInput] = useState(data)
    const [arrowId, setArrowId] = useState(false)
    const [arrowFullName, setArrowFullName] = useState(false)
    const [arrowDate, setArrowDate] = useState(false)
    const [arrowSalary, setArrowSalary] = useState(false)
    const [arrowAtWork, setArrowAtWork] = useState(false)

    const innerWidth = window.innerWidth;

    return (
        <>
            <Xlsx data={resultsInput} />
            <Pdf />
            <Link to='/charts'>
                <button type="button" className="btn btn-info charts">Go to Charts</button>
            </Link>
            <div className='filters'>
                <input
                    type='search'
                    className='input-search'
                    placeholder='Search Employee...'
                    onChange={e => searchEmp(e.target.value, setResultsInput, data)}
                />
            </div>

            {resultsInput.length === 0 && <span className='not-found'>Not Found</span>}

            <table id='my-table' className={resultsInput.length > 0 ? 'employees' : 'employees employees-visibility'}>
                <tbody>
                    <tr>
                        {innerWidth > 1000 && <th>Picture</th>}
                        <th onClick={() => filterById('id', arrowId, setArrowId, resultsInput, setResultsInput)}>{arrowId ? <AiFillCaretDown /> : <AiFillCaretUp />} Id</th>
                        <th onClick={() => filterByName('name', arrowFullName, setArrowFullName, resultsInput, setResultsInput)}>{arrowFullName ? <AiFillCaretDown /> : <AiFillCaretUp />} Full Name</th>
                        <th onClick={() => filterByDate('date_birth', arrowDate, setArrowDate, resultsInput, setResultsInput)}>{arrowDate ? <AiFillCaretDown /> : <AiFillCaretUp />} Date Birth</th>
                        <th onClick={() => filterBySalary('salary', arrowSalary, setArrowSalary, resultsInput, setResultsInput)}>{arrowSalary ? <AiFillCaretDown /> : <AiFillCaretUp />} Salary</th>
                        <th onClick={() => filterByAtWork('at_work', arrowAtWork, setArrowAtWork, resultsInput, setResultsInput)}>{arrowAtWork ? <AiFillCaretDown /> : <AiFillCaretUp />} At Work</th>
                    </tr>
                    {resultsInput.map((employee) => (
                        <tr key={employee.id}>
                            {innerWidth > 1000 && <td><img src={user} alt='user-picture' /></td>}
                            <td>{employee?.id}</td>
                            <td>{employee?.name}</td>
                            <td>{employee?.date_birth}</td>
                            <td>{employee?.salary.toLocaleString()}</td>
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