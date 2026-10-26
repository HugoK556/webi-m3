import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { ListaPaises } from './components/ListaPaises'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <br/>
      <main>
      <Inicio/>
      <ListaPaises/>
      </main>

    </>
  )
}

export default App
