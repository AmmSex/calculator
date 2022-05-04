import React, {useContext, useState} from 'react'
import Field from '../Field'
import History from '../History'
import Context from '../context'
import './style.css'

const Calculator = ({calc, setCalc}) => {

    const {theme} = useContext(Context)


    return(
        <div className={`calculator ${theme}-background`}>
            <Field calc={calc} setCalc={setCalc}/>
            <History calc={calc}/>   
        </div>
    )
}

export default Calculator