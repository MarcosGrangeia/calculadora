import { useState } from "react"

import "./style.scss"
export default function App() {
    const [primeiroValor, setSegundoValor] = useState()
  return(
    <main>
      <h1>calculadora</h1>
      <input type="number" placeholder="insira um número"/>
      <input type="number" placeholder="insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button>
      </div>
    </main>
  )
}