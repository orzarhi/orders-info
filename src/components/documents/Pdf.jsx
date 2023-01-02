import React from 'react'
import { jsPDF } from "jspdf";
import "jspdf-autotable"

const Pdf = () => {

    const test = () => {
        const doc = new jsPDF();
        doc.autoTable({ html: '#my-table' });
        doc.save('table.pdf');
    }

    return (
        <button className='btn btn-primary pdf' onClick={test}>Export to pdf</button>
    )
}

export default Pdf