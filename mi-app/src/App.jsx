import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <br/>
      <Inicio/>
      
    </>
  )
}

export default App
