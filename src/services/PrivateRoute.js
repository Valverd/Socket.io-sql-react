import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "./api"

export default function PrivateRoute({children}) {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("auth_token"))

        async function getToken() {
            if(token){
                api.defaults.headers.common['authorization'] = token

                await api.get('/token').then((data) => {
                    console.log(data)
                    setLoading(false)
                }).catch((err) => {
                    console.log(err)
                    navigate('/')
                })
            } else {
                console.log('Usuário não autenticado')
                navigate('/')
            }
        }
        // criado a autenticação, passado o token para o localstorage

        getToken()

    }, [])

    if(loading) {
        return(
            <div>
                ...Loading
            </div>
        )
    } else {
        return children
    }

}