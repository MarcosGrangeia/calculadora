import { useState } from "react"

import "./style.scss"
export default function App() {
    const [primeiroValor, setPrimeiroValor] = useState()
    const [segundoValor, setSegundoValor] = useState()
    const capturandoPrimeiroValor =(e) => {
      setPrimeiroValor(Number(e.target.value))
    }
    const capturandoSegundoValor =() => {
      setSegundoValor(Number(e.target.value))
    }

  return(
    <main>
      <h1>calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="insira um número"/>
      <input onChange={capturandoSegundoValor} type="number" placeholder="insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button>
      </div>
    </main>
  )
}