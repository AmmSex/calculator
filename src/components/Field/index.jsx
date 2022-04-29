import React from 'react'
import ButtonFields from './ButtonsFields';
import './style.css'
import InputField from './Input';

const Field = ({calc, setCalc}) => {
  console.log('field', calc)
    return(
        <div className='field'>
          <InputField calc={calc} setCalc={setCalc}/>
          <ButtonFields calc={calc} setCalc={setCalc}/>
        </div>
    )
}

export default Field