import { NavBarUser, ProfilePanel } from "../components/user"
import { Route, Routes } from 'react-router-dom'
import { useFetchMarkers } from "../hooks";
import { UserContext } from '../context'
import { useContext } from "react";
import { DetailView, Entry } from "../components/admin";

export const UserPage = () => {

   const {user} = useContext(UserContext)
    
    const { markers, isLoading, refreshMarkers } = useFetchMarkers('entries');

    const filteredMarkers = markers.filter((marker) => {
    if (user?._id === marker.userId) {
        return true;
      }
    });

    
  return (

    <>
        <header className="bg-backgroundZelda p-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl text-zyellow font-semibold">
            Panel de Usuario
          </h1>
        </div>
      </header>

        <NavBarUser/>
      <main>
        <Routes>
        <Route path='/profile' element={<ProfilePanel refreshMarkers={refreshMarkers}/>} />
        <Route path='/entries' element={<Entry markerMongo={filteredMarkers} isLoading={isLoading} refreshMarkers={refreshMarkers} />} />
        <Route path='/entries/:id' element={<DetailView markerMongo={markers} refreshMarkers={refreshMarkers}/>} />
        
      </Routes>
    </main>
    </>

  )
}
