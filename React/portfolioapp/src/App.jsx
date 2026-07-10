import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900'>
          <header>
                <Navbar/>
          </header>
          <Hero/>
      </div>
    </>
  )
}

export default App
