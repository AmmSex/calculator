import React, {useContext, useState} from 'react'
import Field from '../Field'
import History from '../History'
import Context from '../context'
import './style.css'

const Calculator = () => {

    const {theme, setTheme, setLightTheme, setDarkTheme} = useContext(Context)

    const [calc, setCalc] = useState({
        num: 0,
        sign: '',
        res : '',
        history: ''
    })

    return(
        <div className={`calculator ${theme}-background`}>
            <Field calc={calc} setCalc={setCalc}/>
            <History/>   
        </div>
    )
}

export default Calculator