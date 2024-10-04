//Receber informações via props
export default function Login({isLogged, handleLogin}){
//passar function para o header ELEVAR O ESTADO    

    return(
        <div className="flex gap-4 items-center">
            {isLogged && <p>Olá, usuário</p>}
            {/* para colocar variáveis e if em css, utilize classname=`${suaVariável}` */}
            {/* para enviar para o email, utilize EMAIL JS */}
            <button onClick={handleLogin} className={`${isLogged ? "bg-white" : "bg-green-700"} text-purple-800 px-4 py-1 rounded`}>{isLogged ? "Logout" : "Login" }</button>
        </div>
    )
}