import { Button } from '@mui/material'
import React from 'react'
import * as XLSX from "xlsx"

const Xlsx = ({ data }) => {

    const handleExportXlsx = () => {
        var wb = XLSX.utils.book_new(),
            ws = XLSX.utils.json_to_sheet(data)

        XLSX.utils.book_append_sheet(wb, ws, "employees-info")

        XLSX.writeFile(wb, "employees-info.xlsx");
    }
    return (
        <Button className='xls' variant="contained" color='inherit' onClick={handleExportXlsx}>Export to xls</Button>
    )
}

export default Xlsx