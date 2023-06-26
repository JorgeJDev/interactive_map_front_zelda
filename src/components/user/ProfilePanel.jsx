import { useContext } from "react";
import { UserContext } from "../../context";
import { getUrl, setLocal } from "../../helpers";
import {useNavigate} from 'react-router-dom'
import { consultation } from "../../api/fetch";

export const ProfilePanel = () => {

  const { user, setUser } = useContext(UserContext)
  const navigeteTo = useNavigate()

  const handleDelete = async () => {

    try {

      const url = getUrl("users", user._id);
      const method = "DELETE"
      const response = await consultation(url, method);

      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }
      setLocal(null);
      setUser(null); 
      navigeteTo('/')

    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const url = getUrl("users", user._id);
      const method = "PUT";
      const response = await consultation(url, method, updatedUser);
    
      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }

      const updateUser = await response.data;
      setLocal(updateUser); 
      setUser(updateUser); 
      navigeteTo(-1)
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };
  return (

    <>

      <div className="h-screen flex  justify-center bg-zbgcosa">
        <div className="overflow-auto bg-zbgTAP w-full max-w-md  px-6 py-8">
          <h1 className="text-black font-bold leading-tight mb-4">Perfil de {user?.username}</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-black text-sm">Nombre de usuario</label>
              <input type="text" name="username" id="username" placeholder={user?.username} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" autoFocus />
            </div>
            <div>
              <label className="block text-black text-sm">Correo electrónico</label>
              <input type="text" name="email" id="email" placeholder={user?.email} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" autoFocus />
            </div>

            <div>
              <label className="block text-black text-sm">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="Contraseña" className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" />
            </div>
            <button type="submit" className="w-full block bg-zyellow hover:bg-zbgcosa text-white font-semibold rounded-lg px-4 py-2">
              Actualizar
            </button>
          </form>

          <button onClick={handleDelete}className="w-full block bg-red-900 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 mt-20 ">
            Eliminar Usuario
          </button>
        </div>
      </div>
    </>
  )
}
