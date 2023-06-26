import { useNavigate } from 'react-router-dom'
import { useDeleteEntry } from '../../hooks'
import { UserContext } from '../../context'
import { useContext } from 'react';

export const Entry = ({ markerMongo, isLoading, refreshMarkers }) => {
  
  const {user} = useContext(UserContext)
  const navigateTo = useNavigate()

  return (

    <>
      <div className="p-5 h-screen bg-zbgcosa hidden lg:block">
        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-zbgTAP border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-zbgbrown font-semibold tracking-wide text-left">
                  Título
                </th>
                <th className="p-3 text-zbgbrown font-semibold tracking-wide text-left">
                  Descripción
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Tipo
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Usuario
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Estado
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Editar
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Borrar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {markerMongo.map((marker, index) => (

                <tr key={index} className="bg-zbgTAP">
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">
                    <p className="font-bold text-zbgbrown hover:underline">{marker.title}</p>
                  </td>
                  <td className="p-2 text-sm text-zbgbrown whitespace-nowrap">
                    {marker.description.substring(0, 20)}
                  </td>
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">{marker.iconType}</td>
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">{marker.userEmail}</td>
                  <td className="p-3 text-sm text-zbgbrown whitespace-nowrap">
                    <span className={`p-1 text-xs font-medium uppercase tracking-wider ${marker.status ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'} rounded-lg bg-opacity-50`}>
                      {marker.status ? 'Activado' : 'Inactivo'}
                    </span>
                  </td>
                  {/* {user.role !== "user" &&} */}
                  <td className="p-1 text-sm text-zbgbrown whitespace-nowrap">
                    <button onClick={() => navigateTo(`/user/entries/${marker.id}`)}
                    className="bg-zyellow hover:bg-zbrown text-white font-bold py-1 px-4 rounded">
                    Editar
                  </button>
                  
                  </td>
                  <td className="p-1 text-sm text-zbgbrown whitespace-nowrap">
                    <button onClick={() => useDeleteEntry(marker.id, 'entries', refreshMarkers)} className="bg-red-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                    Borrar
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
                    {marker.title}
                  </p>
                </div>
                <div className="text-zbgbrown font-bold">{marker.userEmail}</div>
                <div className="text-sm font-medium text-zbgbrown ">{marker.iconType}</div>
                
              </div>
              <div className="text-sm text-zbgbrown font-bold">
                {marker.description.substring(0, 10)}
              </div>
              <div className="flex items-center space-x-2 text-sm">
              <div>
                  <span className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${marker.status ? "text-green-800 bg-green-200" : 'text-red-800 bg-red-200'}`}>
                    {marker.status ? "Activado" : "Inactivo"}
                  </span>
                </div>
                <button onClick={() => navigateTo(`/user/entries/${marker.id}`)}
                className="bg-zyellow hover:bg-zbrown text-white font-bold py-1 px-4 rounded">
                  Editar
                </button>
                <button onClick={() => useDeleteEntry(marker.id, 'entries', refreshMarkers)} className="bg-red-900 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};
