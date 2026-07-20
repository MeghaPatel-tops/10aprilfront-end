import React, { useContext } from 'react'
import ChildPage from './ChildPage'
import { ThemeContext } from '../Utils/ThemeContext'

function ParentPage() {
    const {theme,setTheme}= useContext(ThemeContext);
    console.log("theme=",theme);
    
  return (
    <div  style={{
        height:'auto',
        backgroundColor:theme=='light'?'white':'black',
        color:theme=='light'?'black':'white'
    }}>ParentPage
        <ChildPage/>
    </div>
  )
}

export default ParentPage