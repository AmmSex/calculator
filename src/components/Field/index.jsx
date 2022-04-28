import React from 'react'
import ButtonFields from './ButtonsFields';
import './style.css'
import InputField from './Input';

const Field = () => {
    return(
        <div className='field'>
          <InputField />
          <ButtonFields/>
        </div>
    )
}

export default Field