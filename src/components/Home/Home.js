import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"

export default function Home() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function loginHandler(e) {
        e.preventDefault()

        await api.post('/users/login', {
            userName,
            password
        }).then((user) => {
            localStorage.setItem("auth_token", JSON.stringify(user.data))
            navigate('/chat')
        }).catch(() => {
            console.log('Usuário ou senha incorreto')
        })
    }

    return(
        <div>
           <form>
                <input className="login_input" type="text" placeholder="Usuário" onChange={(data) => {setUserName(data.target.value)}} />
                <input className="login_input" type="password" placeholder="Senha" onChange={(data) => {setPassword(data.target.value)}}/>
                <button className="login_btn" onClick={loginHandler}>Entrar</button>
           </form>
        </div>
    )
}