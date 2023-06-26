
import { useMapEvents } from 'react-leaflet';

export const MapClickHandler = ({ onCoordinatesChange }) => {

  useMapEvents({
    click: (e) => {const { lat, lng } = e.latlng;
      onCoordinatesChange({ lat, lng });
    },
  });

  return null;
};