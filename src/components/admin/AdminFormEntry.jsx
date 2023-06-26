import { useContext } from 'react'
import { useFormAdmin } from '../../hooks'
import { UserContext } from '../../context'
import { useNavigate } from 'react-router-dom'

export const AdminFormEntry = ({ markers, id, refreshMarkers }) => {

  const { handleChange, handleSubmit, error } = useFormAdmin(id, refreshMarkers, markers)
  const { user } = useContext(UserContext)
  const navigateTo = useNavigate()

  const findError = (fieldName) => {
    const fieldError = error?.find(err => err.path === fieldName);
    return fieldError ? fieldError.msg : null;
  }

  return (
    <>
      <div className="w-full h-full flex items-center justify-end mt-6">
        <div className="bg-zbgcosa w-full max-w-md h-full px-6 py-8">

        <button type="submit" onClick={()=>navigateTo(-1)} className="w-full block bg-zyellow hover:bg-zbgcosa focus:bg-zbrown text-white font-semibold rounded-lg px-4 py-2 mb-4">Volver</button>

          <h2 className="text-zyellow font-bold leading-tight mb-4">Usuario: {markers[0].userUsername}</h2>
          <h2 className="text-zyellow font-bold leading-tight mb-4">Email: {markers[0].userEmail}</h2>
          {user.role !== 'user' &&
            <h2 className="text-zyellow font-bold leading-tight mb-4">Rol: {markers[0].userRole}</h2>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-zyellow text-sm">Título</label>
              <input type="text" id="title" name="title" defaultValue={markers[0].title} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" autoFocus
                onChange={handleChange} />
              {findError('title') && <p className="text-xs text-red-500 mt-1">{findError('title')}</p>}
            </div>
            <div>
              <label className="block text-zyellow text-sm">Descripción</label>
              <textarea id="description" name="description" defaultValue={markers[0].description} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm" autoFocus
                onChange={handleChange} />
              {findError('description') && <p className="text-xs text-red-500 mt-1">{findError('description')}</p>}
            </div>

            <div>
              <label className="block text-zyellow text-bold">Icono actual: {markers[0].iconType === "Dungeon" ? "Santuario" : "Torre"}</label>
              <select id="iconType" name="iconType" onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm">
              <option value="Dungeon">Santuario</option>
              <option value="Tower">Torre</option>
            </select>
            {findError('iconType') && <p className="text-xs text-red-500 mt-1">{findError('iconType')}</p>}
            </div>
            {user.role !== 'user' &&
            <div>
              <label className="block text-zyellow text-bold">Estado Actual: {markers[0].iconType === "true" ? "Activad" : "Inactivo"}</label>
              <select id="status" name="status" onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none text-sm">
              <option value="true">Activado</option>
              <option value="false">Inactivo</option>
            </select>
            {findError('iconType') && <p className="text-xs text-red-500 mt-1">{findError('iconType')}</p>}
            </div>}

            <button type="submit" className="w-full block bg-zyellow hover:bg-zbgcosa focus:bg-zbrown text-white font-semibold rounded-lg px-4 py-2">Guardar</button>
          </form>
        </div>
      </div>
    </>
  );
}

