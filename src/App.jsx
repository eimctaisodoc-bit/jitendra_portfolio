import { useState } from 'react'

import './App.css'
import { Header_ } from './assets/Component/pages/header_'
import { MyContext } from './assets/Component/hooks/context'

function App() {
  const [name, setname] = useState({name:"ranjan", age:23})
  return (
    <>
  
      <MyContext.Provider value={{ name, setname }}>
        <Header_ />
      </MyContext.Provider>
      
    </>
  )
}

export default App
