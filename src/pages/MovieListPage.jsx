/*
import { useState } from "react";
useState => gerenciar estados que uma variável vai aparecer na tela
export default function MovieListPage(){
começa em 0
const [contador, setContador] = useState(0)
const [textoBotao, setTextoBotao] = useState("Oi")

const handleClick = () =>{
    função que recebe o estado anterior e soma um
    setContador atualiza o contador
    setContador((prev) => prev + 1)
    console.log(contador)
}
const handleDiminuir = () =>{
    função que recebe o estado anterior e soma um
    setContador atualiza o contador
    setContador((prev) => prev - 1)
    console.log(contador)
}
const handleZerar = () =>{
    função que recebe o estado anterior e soma um
    setContador atualiza o contador
    setContador(0)
    console.log(contador)
}

const handleTexto = () => {
    setTextoBotao(prev => prev === "Oi" ? "Eita" : "Oi")
}
    return(
        <>
            <p>{Math.random()}</p>
            <p>{contador}</p>
            colocar handle é uma boa prática 
            <button onClick={handleClick}>Aumentar</button>
            <button onClick={handleDiminuir}>Diminuir</button>
            <button onClick={handleZerar}>Zerar</button>
            <button onClick={handleTexto}>{textoBotao}</button>
        </>
    )
}
 */

import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){

const [search, setSearch] = useState("")

const handleSearch = (event) => {
    setSearch(event.target.value)
}

/* pega filmes do json, busca pelo título. toLowerCase() é um metodo para transformar tudo em minúsculo. includes() é um método para validar se inclui algo */
const filmesFiltrados = movies.filter( filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <h2>Veja o catálogo completo de filmes</h2>
            <input
            type="text"
            id="search"
            className="text-black"
            value={search}
            onChange={handleSearch} />

                {/* if ternario */}
            { filmesFiltrados.length > 0 ?
                filmesFiltrados
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
                :
            <p>Nenhum filme encontrado</p>
            }
            
        </>
    )
}
