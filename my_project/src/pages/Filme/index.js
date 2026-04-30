import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";



function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "701882ba979a87e85e64cdd5d735f17f",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Ops... Filme não encontrado!");
      })
    }

    loadFilme();

    return () => {
      console.log("Componente desmontado");
    }

  }, []);

  if(loading) {
    return (
      <div className="filme-info">
        <h2>Carregando detalhes do filme...</h2>
      </div>
    );
  }


  return (
    <div>
      <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        <p>{filme.overview}</p>
        <p>{filme.vote_average}/10</p>
      </div>
    </div>
  );
}
 
export default Filme;
