import { NavLink } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";

export default function Header() {
    //Boa prática para true or false, começar com is. Ex: isLogged
    const [isLogged, setIsLogged] = useState(false);

    const handleLogin= () => {
        //!isLogged é para inverter, se tiver true, ele retorna false
        setIsLogged(!isLogged)
    }
    return (
        <>
            <header className="bg-purple-800 flex text-white justify-around items-center h-14">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                        {isLogged && <li><NavLink to="/settings">Configurações</NavLink></li>}
                    </ul>
                </nav>
                {/* Passar estado via props */}
                <Login isLogged={isLogged} handleLogin={handleLogin}/>
            </header>
        </>
    )
}