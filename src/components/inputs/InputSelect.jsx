import { Autocomplete, Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./InputSelect.css"


const InputSelect = ({ arr, title, setValue }) => {

    const [object, setObject] = useState(arr)
    console.log("🚀  object", object)

    return (
        <Autocomplete
            id="combo-box-demo"
            options={object}
            onChange={(e, value) => setValue(value)}
            // getOptionLabel={(object) => console.log(object?.value)}
            renderInput={(params) =>
                <TextField style={{
                    direction: "rtl",
                    textAlign: "center",
                    width: "250px"
                }}
                    variant="outlined" {...params}
                    label={title} />
            } />


        // <Box sx={{ width: 250 }}>
        //     <FormControl fullWidth>
        //         <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-label"
        //             id="demo-simple-select"
        //             value={value}
        //             label={title}
        //             onChange={e => setValue(e.target.value)}

        //         >
        //             <Test len={5} />
        //             <MenuItem value={1}>כל הלקוחות</MenuItem>
        //             {/* <MenuItem value={menuItemValue}>{menuItemLabel}</MenuItem> */}
        //             {/* <MenuItem value={3}>רמי לוי</MenuItem> */}
        //         </Select>
        //     </FormControl>
        // </Box>
    )
}

export default InputSelect