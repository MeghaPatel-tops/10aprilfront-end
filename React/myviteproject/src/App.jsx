import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Home from './Components/Home'
import About from './Components/About'
import { Contact, Footer } from './Components/comman'
import ProductCatalog from './Components/ProductCatalog'
import Counterapp from './Components/Counterapp'
import InlineCss from './Components/InlineCss'
import ExtrenalCss from './Components/ExtrenalCss'
import CssModules from './Components/CssModules'

function App() {
  const addressInfo = {address:'101 main street surat',contact:'009090909',email:'abc@example.com'}
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home username={"Megha Patel"}/> */}
     {/* 
     <About/>
     <Contact adInfo={addressInfo}/>
     <Footer/> */}
     {/* <ProductCatalog/> */}
     <Counterapp/>
     <InlineCss/>
     <ExtrenalCss/>
     <CssModules/>
    </>
  )
}

export default App
