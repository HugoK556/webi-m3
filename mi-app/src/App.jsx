import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { ListaPaises } from './components/ListaPaises'
import { Aleatorio } from './components/Aleatorio'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
      <Inicio/>
      <ListaPaises/>
      <Aleatorio/>
      </main>
      <Footer/>

    </>
  )
}

export default App
