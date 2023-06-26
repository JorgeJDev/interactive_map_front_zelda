import { NavLink } from 'react-router-dom';
import { useLogout } from '../../hooks'

export const NavBar = () => {

  const { handleLogout } = useLogout()

  return (

    <>
      <nav className="bg-backgroundZelda p-4 px-8 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <ul className="flex space-x-4">

              <li>
                <NavLink to="/" className="text-zyellow font-medium hover:white">
                  Zona usuario </NavLink>
              </li>
              
              <li>
                <NavLink to="/admin/entries" className="text-zyellow font-medium hover:text-white">
                  Gestionar Marcadores </NavLink>
              </li>

              <li>
              <NavLink to="/admin/users" className="text-zyellow font-medium hover:text-white">
                  Gestionar Usuarios </NavLink>
              </li>
            
            </ul>

            <div className="">

              <button onClick={handleLogout} className="text-zyellow font-medium hover:text-white"> Logout </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};




