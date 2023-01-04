import React from 'react'
import { jsPDF } from "jspdf";
import "jspdf-autotable"

const Pdf = () => {

    const exportFile = () => {
        const doc = new jsPDF();
        doc.autoTable({ html: '#my-table' });

        doc.save('table.pdf');
    }

    return (
        <button className='btn btn-primary pdf' onClick={exportFile}>Export to pdf</button>
    )
}

export default Pdf