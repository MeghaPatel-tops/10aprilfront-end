import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ParentPage from './Components/ParentPage'
import UserData from './Components/UserData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <ParentPage/>
     <UserData/>
    </>
  )
}

export default App
