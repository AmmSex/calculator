import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import './style.css'

const InputField = ({calc, setCalc}) => {

    return(
        <div className='inputField'>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={calc.num ? calc.num : calc.res}
                        //onChange={changeHandle}
                    />
            </FormControl>
        </div>
    )
}

export default InputField