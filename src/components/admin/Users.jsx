
import { consultation } from '../../api/fetch';
import { getUrl } from '../../helpers';
import { useDeleteEntry } from '../../hooks'

export const Users = ({ markerMongo, refreshUsers }) => {

  {console.log(markerMongo)}

  const handleRoleChange = async (e, userId) => {
    const newRole = e.target.value;

    try {

      const updatedUser = {
        role: newRole,
      };

      const url = getUrl("users", userId);
      const method = "PUT";
      const body = updatedUser;

      const response = await consultation(url, method, body);

      if (!response.ok) {
        throw new Error("Error al actualizar el rol del usuario");
      }

      refreshUsers();
    } catch (error) {
      console.error("Error al actualizar el rol del usuario:", error);
    }
  };

  return (
    <>


      <div className="p-5 h-screen bg-zbgcosa hidden lg:block">
        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-zbgTAP border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-zbgbrown font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Fecha de registro
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Rol
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Cambiar Rol
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Borrar usuario
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Borrar todas las entradas
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {markerMongo.map((marker, index) => (
                 
                <tr key={index} className="bg-zbgTAP">
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">
                    <p className="font-bold text-zbgbrown hover:underline">{marker.username}</p>
                  </td>
                  <td className="p-2 text-sm text-zbgbrown whitespace-nowrap">
                    {marker.date.substring(0, 10)}
                  </td>
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">{marker.email}</td>
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">{marker.role}</td>
                  <td className="p-3">
                    <select name="role" onChange={(e) => handleRoleChange(e, marker.id)} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm"
                    >
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderator</option>
                      <option value="user">User</option>
                    </select>
                  </td>
                  <td className="p-1 text-sm text-zbgbrown whitespace-nowrap">
                    <button onClick={() => useDeleteEntry(marker.id, 'users', refreshUsers)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                      Borrar usuario
                    </button>
                    </td>
                    <td className="p-1 text-sm text-zbgbrown whitespace-nowrap">
                    <button onClick={() => useDeleteEntry(marker.id, 'entries/users', refreshUsers)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                      Borrar todas las entradas
                    </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="p-5 h-screen bg-zbgcosa lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {markerMongo.map((marker, index) => (
            <div key={index} className="bg-zbgTAP space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <p className="text-zbgbrown font-bold hover:underline">
                    {marker.username}
                  </p>
                </div>
                <div className="text-zbgbrown">{marker.email}</div>
                <div className="text-sm font-medium text-zbgbrown">{marker.role}</div>
              </div>
              <div className="text-sm text-zbgbrown font-bold">
                {marker.date.substring(0, 10)}
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <select name="role" onChange={(e) => handleRoleChange(e, marker.id)} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm">
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                  <option value="user">User</option>
                </select>
                <button onClick={() => useDeleteEntry(marker.id, 'users', refreshUsers)} className="bg-red-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                  Borrar usuarios
                </button>
                <button onClick={() => useDeleteEntry(marker.id, 'entries/users', refreshUsers)} className="bg-red-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                  Borrar entradas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
