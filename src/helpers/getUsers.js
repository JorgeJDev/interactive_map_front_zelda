import { consultation } from '../api/fetch';
/**
 * Obtiene la información de usuarios a través de la API.
 *
 * @param {string} url - La URL de la API para obtener los datos de usuarios.
 * @returns {Promise<Array<Object>>} - Un array de objetos que contienen información sobre los usuarios.
 */
export const getUsers = async (url) => {
    
    const request = await consultation(url);
    const users = request.data.map((item) => ({

        id: item._id,
        username: item.username,
        email: item.email,
        role: item.role,
        date: item.date
        
    }));
   
    return users;
 
}