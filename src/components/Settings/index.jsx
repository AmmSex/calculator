import React, {useContext} from 'react'
import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Context from '../context'
import './style.css'

const Settings = () => {
    const {theme, setTheme, setLightTheme, setDarkTheme} = useContext(Context)
    
    const P = styled.p`
        font-size: 26px;
    `
    const names = [
        'light',
        'dark' 
    ];
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };

    const handleChange = (event) => {
        let themeValue = event.target.value;
        themeValue == 'light' ?  setLightTheme() : setDarkTheme()
        setTheme(themeValue)
    }

    return(
        // <Context.Consumer>
        //     { 
        //         theme => (
                    <div className={`${theme}-background settings`}>
                        <P>Settings</P>
                        <FormControl sx={{ m: 1, width: 250}}>
                            <InputLabel id="demo-multiple-name-label">Theme</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                
                                value={theme}
                                onChange={handleChange}
                                input={<OutlinedInput label="Theme" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button variant="outlined" size="large" style={{width: '250px'}}>
                            All clear history
                        </Button>
                    </div>
        //        )
        //     }
            
        // </Context.Consumer>
    )
}


export default Settings