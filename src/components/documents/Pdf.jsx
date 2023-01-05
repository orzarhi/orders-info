import React from 'react'
import { jsPDF } from "jspdf";
import "jspdf-autotable"
import { Button } from '@mui/material';

const Pdf = () => {

    const exportFile = () => {
        const doc = new jsPDF();
        doc.autoTable({ html: '#my-table' });

        doc.save('table.pdf');
    }

    return (
        <Button className='pdf' variant="contained" color='inherit' onClick={exportFile}>Export to xls</Button>
    )
}

export default Pdf