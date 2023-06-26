import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { consultation } from '../api/fetch';
import { UserContext} from '../context'
import { getUrl, setLocal } from "../helpers";


/**
 * Funcionalidad para manejar un formulario login y registro.
 *
 * @param {Object} estadoInicial - El estado inicial del formulario.
 * @returns {Object} - Objeto con funciones y estados para controlar el formulario.
 */
export const useForm = (estadoInicial) => {

    const [formulario, setFormulario] = useState(estadoInicial);
    const [error, setError] = useState()
    const { setUser } = useContext(UserContext);

    const navigateTo = useNavigate()
    
    
    const handleSubmit = async (ev) => {

        ev.preventDefault()
        
        if (!ev.target.username) {

            const body = {
                email: ev.target.email.value,
                password: ev.target.password.value
            }
            const method = 'POST'
            const url = getUrl('auth', 'login')      
            const request = await consultation(url, method, body)
            const userMongo = request.user
            const token = request.token
      
            if (request.ok === true) {
                
                setUser(userMongo)
                setLocal(userMongo, token)
                navigateTo('/')

            }else {
             
                if(request.error === 'auth/weak-password'){
                    setError('Contraseña débil, debe tener al menos 6 caracteres') 
                }else if (request.error === 'auth/invalid-email'){
                    setError('Correo incorrecto')
                } else if (request.error){
                    setError('Email o contraseña incorrecto')
                }   
            }

        } else {
            
            const body = {
                username: ev.target.username.value,
                email: ev.target.email.value,
                password: ev.target.password.value,
                date: new Date()
            }
            const method = 'POST'
            const url = getUrl('auth', 'register')
            const request = await consultation(url, method, body)
            const userMongo = request.user
            const token = request.token

            if (request.ok === true) {

                setUser(userMongo)
                setLocal(userMongo, token)
                navigateTo('/')
                
            }else {

                if(request.error === 'auth/weak-password'){
                    setError('Contraseña débil, debe tener al menos 6 caracteres') 
                }else if (request.error === 'auth/invalid-email'){
                    setError('Correo incorrecto')
                } else if (request.error){
                    setError('Email o contraseña incorrecto')
                }  
            }
        }
    }


    const handleGoogle = () => {


        
    }

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        handleChange,
        handleSubmit,
        error
    }
}