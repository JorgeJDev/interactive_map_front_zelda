import { useContext } from 'react';
import { setLocal, getUrl } from '../helpers'
import { consultation } from '../api/fetch'
import { UserContext } from '../context';
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {

    const { setUser } = useContext(UserContext);
    const navigateTo = useNavigate()

    const handleLogout = async () => {

        const url = getUrl('auth', 'logout');
     
        const response = await consultation(url);

        if (response.ok) {
            navigateTo('/')
            setLocal(null);
            setUser(null);

        } else {

            console.error('Error al cerrar sesión:', response.error);
        }
    };


    return {
        handleLogout
    }
}
