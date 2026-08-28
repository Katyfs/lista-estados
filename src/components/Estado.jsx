import "./Estado.css"

function Estado({ estado }) {
  return (
    <div className="card">
      <h2>{estado.sigla}</h2>

      <h3>{estado.nome}</h3>

      <p>
        Região: {estado.regiao.nome}
      </p>
    </div>
  )
}

export default Estado