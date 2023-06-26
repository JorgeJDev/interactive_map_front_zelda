import "leaflet/dist/leaflet.css";
import { useContext, useEffect } from "react";
import { MapContainer, ZoomControl } from "react-leaflet";
import { MapImage, Markers, MarkerForm } from "./map";
import { useMarker, useFetchMarkers, useFormModal } from "../hooks";
import { UserContext, MarkerContext, FilterContext } from '../context'
import { bounds, center, crs, maxZoom, zoom } from '../config/configMap'

/**
 * Componente contenedor principal del mapa que muestra los marcadores.
 *
 * @returns {JSX.Element} - El componente MapContainerComp.
 */
export const MapContainerComp = () => {

  const { user } = useContext(UserContext);
  const { marker } = useContext(MarkerContext);
  const { filter } = useContext(FilterContext);
  const [addMarker] = useMarker(user?._id);
  const { markers, isLoading, refreshMarkers } = useFetchMarkers('entries');
  const { showModal, handleChange, handleSubmit, openModal, closeModal, error } = useFormModal(refreshMarkers);

  const filteredMarkers = filter ? filter : markers;

  const handleCoordinatesChange = (coordinates) => {

    if (!user?._id || showModal === true) {
      return;
    }
    if (coordinates.lat >= 10 && coordinates.lat <= 320 && coordinates.lng >= 10 && coordinates.lng <= 380) {
      addMarker(coordinates);

    }
  };

  const openModalEffect = () => {
    if (marker && !showModal) {
      openModal(marker);
    }
  }
  useEffect(() => {
    openModalEffect()
  }, [showModal, openModal]);


  return (
    <>

      <MapContainer crs={crs} center={center} zoom={zoom} maxZoom={maxZoom} minZoom={0} doubleClickZoom={false} zoomControl={false} attributionControl={false}>
        <MapImage bounds={bounds} onCoordinatesChange={handleCoordinatesChange} />
        <Markers markerMongo={filteredMarkers} markerData={marker} isLoading={isLoading} />
        <MarkerForm showModal={showModal} handleChange={handleChange} handleSubmit={handleSubmit} closeModal={closeModal} error={error} />
        <ZoomControl position="bottomright" zoomInTitle="Aumentar" zoomOutTitle="Alejar" />
      </MapContainer>

    </>
  )
}

