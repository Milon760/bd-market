import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()


const ThemeProvider = ({ children }) => {


    const [mode, setMode] = useState(()=>{
        const saveTheme = localStorage.getItem("theme");
        return saveTheme ? JSON.parse(saveTheme) : 'light';
    })

    useEffect(()=>{
      localStorage.setItem('theme', JSON.stringify(mode))
    }, [mode])

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;