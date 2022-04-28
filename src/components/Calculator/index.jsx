import React, {useContext} from 'react'
import Field from '../Field'
import History from '../History'
import Context from '../context'
import './style.css'

const Calculator = () => {

    const {theme, setTheme, setLightTheme, setDarkTheme} = useContext(Context)

    return(
        <div className={`calculator ${theme}-background`}>
            <Field/>
            <History/>   
        </div>
    )
}

export default Calculator