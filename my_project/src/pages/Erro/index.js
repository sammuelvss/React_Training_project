import { Link } from "react-router-dom";
import "./erro.css";

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Ops... Página Não Encontrada</h2>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}

export default Erro;