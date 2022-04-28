import React, {useState} from 'react'
import Context, {themes} from './context'

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themes.light.name);

    const setLightTheme = () => setTheme(themes.light.name)

    const setDarkTheme = () => setTheme(themes.dark.name)

    return(
        <Context.Provider value={{theme, setTheme, setDarkTheme, setLightTheme}}>
            {children}
        </Context.Provider>
    )
}

export default ThemeProvider