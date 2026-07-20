import React, { useContext } from 'react'
import { ThemeContext } from '../Utils/ThemeContext'

function ChildPage() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div
            style={{
                height: '300px',
                backgroundColor: theme == 'light' ? 'white' : 'black',
                color: theme == 'light' ? 'black' : 'white',
                margin: '20px',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderColor: theme == 'light' ? 'black' : 'white'
            }}>ChildPage
            <button
                style={
                    {
                        backgroundColor: theme == 'light' ? 'white' : 'black',
                        color: theme == 'light' ? 'black' : 'white',
                        margin: '20px',
                        borderWidth: '3px',
                        borderStyle: 'solid',
                        borderColor: theme == 'light' ? 'black' : 'white'
                    }
                }

                onClick={()=>{
                    setTheme(theme=='light'?'dark':'light')
                }}
            >{theme=="light"?"Dark":"Light"}</button>
        </div>
    )
}

export default ChildPage