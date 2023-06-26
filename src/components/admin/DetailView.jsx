import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, ZoomControl, Marker, Popup } from "react-leaflet";
import { MapImage,  } from "../map";
import { bounds, crs, maxZoom } from '../../config'
import { getIcon } from '../../helpers'
import { useFetchMarkers } from '../../hooks';
import { AdminFormEntry } from './'
import { useParams } from 'react-router-dom';

export const DetailView = ({ refreshMarkers }) => {

  const { id } = useParams();
  const { markers, isLoading } = useFetchMarkers('entries', id)

  return (
    <>
      {
        isLoading ?
          <p>Cargando...</p>
          :
          <div className="absolute z-1k1 top-28 left-0 z-10">
            <div className="h-full w-80">
              <AdminFormEntry markers={markers} id={id} refreshMarkers={refreshMarkers}/>
            </div>
          </div> }


        <MapContainer crs={crs} center={[125, 150]} zoom={1} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false} zoomControl={false} attributionControl={false}>
        <MapImage bounds={bounds}/>
        {markers.map((marker, index) => {
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


        <ZoomControl position="topright" zoomInTitle="Aumentar" zoomOutTitle="Alejar"/>
        </MapContainer>

    </>
  )
}


