import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { UserContext } from '../../context/UserContext'
import { useContext, useEffect, useState } from "react";
import { getIcon } from '../../helpers'

export const Markers = ({ markerMongo, markerData }) => {
 
  const { user } = useContext(UserContext);
  const isAdmin = user?.role === 'admin' || user?.role === 'modertor';
 
  const [filteredMarkers, setFilteredMarkers] = useState([]);

  const filterMarkers = () => {
    const newFilteredMarkers = markerMongo.filter((marker) => {
      if (isAdmin) {
        return true;
      } else if (user?._id === marker.userId) {
        return true;
      } else {
        return marker.status === true;
      }
    });

    setFilteredMarkers(newFilteredMarkers);
  };

  useEffect(() => {
    filterMarkers();
  }, [markerMongo, isAdmin, user]);

  return (

    <>

      {markerData &&
        <Marker key={1} position={markerData.position} icon={markerData.icon} />
      }
      {filteredMarkers.map((marker, index) => {
        const iconOptions = { ...marker.icon.options };
        iconOptions.iconUrl = getIcon(marker.iconType);
        return (
          <Marker key={index} position={marker.position} icon={L.icon(iconOptions)} eventHandlers={{ click: () => (marker.showPopup = true) }}>
            <Popup offset={[-2, 40]} closeButton={false} onClose={() => (marker.showPopup = false)} open={marker.showPopup}>
              <div>
                <h2>{marker.title}</h2>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        )
      })}

    </>
  )
}






//* Marker:
//* key: es una propiedad especial de React que ayuda a identificar de manera única cada elemento en una lista y se utiliza para mejorar el rendimiento del renderizado.
//* position: es la ubicación geográfica del marcador en el mapa. Se debe pasar como un objeto con las propiedades lat y lng que representan la latitud y la longitud, respectivamente.
//* icon: es el ícono que se utilizará para representar el marcador en el mapa. Se debe pasar como un objeto L.Icon de Leaflet que se puede crear utilizando las opciones de icono disponibles.
//* eventHandlers: es un objeto que contiene los controladores de eventos que se asignarán al marcador. En este caso, el evento click está siendo manejado para mostrar el Popup asociado al marcador cuando se hace clic en él.

//* Popup:
//* offset: es una matriz que representa el desplazamiento del Popup con respecto a su posición original en el mapa. El primer valor de la matriz representa el desplazamiento horizontal y el segundo valor representa el desplazamiento vertical.
//* closeButton: es un valor booleano que indica si se debe mostrar un botón para cerrar el Popup.
//* onClose: es una función que se llama cuando el Popup se cierra.
//* open: es un valor booleano que indica si el Popup está abierto o cerrado.