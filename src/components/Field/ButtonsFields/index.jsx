import React from 'react'
import Button from '@mui/material/Button';
import './style.css'

const button ={
    width: 90,
    height: 90,
    fontSize: '30px',
    margin: '15px'
}
const ButtonFields = () => {

    const buttons = [
        {id: 1, value: '0'},
        {id: 2, value: '1'},
        {id: 3, value: '2'},
        {id: 4, value: '3'},
        {id: 5, value: '4'},
        {id: 6, value: '5'},
        {id: 7, value: '6'},
        {id: 8, value: '7'},
        {id: 9, value: '8'},
        {id: 10, value: '9'},
        {id: 11, value: '+'},
        {id: 12, value: '-'},
        {id: 13, value: '*'},
        {id: 14, value: '/'},
        {id: 15, value: '='},
        {id: 16, value: '.'},
        {id: 17, value: 'C'},
        {id: 18, value: 'CE'},
        {id: 19, value: '('},
        {id: 20, value: ')'},
    ]

    const buttonsF = buttons.map(el => <Button key={el.id} style={button} type='button' value={el.value} variant="outlined">{el.value}</Button>);

    const handleClick = (event) => {
        let element = event.target.innerHTML;
        console.log(element)
    }

    return(
        <div className='buttonsField' onClick={handleClick}>
            {
                buttonsF
            }            
        </div>
        
    )
}

export default ButtonFields