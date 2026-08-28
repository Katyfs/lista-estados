import { useEffect, useState } from "react"
import Estado from "./components/Estado"
import "./App.css"

function App() {
  const [estados, setEstados] = useState([])

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((resposta) => resposta.json())
      .then((dados) => setEstados(dados))
  }, [])

  return (
    <div>
      <h1>Estados Brasileiros</h1>

      <div className="lista-estados">
        {estados.map((estado) => (
          <Estado
            key={estado.id}
            estado={estado}
          />
        ))}
      </div>
    </div>
  )
}

export default App