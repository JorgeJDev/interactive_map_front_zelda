import { useEffect, useState } from 'react';
import { storage } from '../../helpers/firebaseStore';
import { ref, getDownloadURL } from 'firebase/storage';
import { ImageOverlay } from 'react-leaflet';
import { MapClickHandler } from './MapClickHandler';

export const MapImage = ({ bounds, onCoordinatesChange }) => {
  const [imageUrl, setImageUrl] = useState('');
  const imageRef = ref(storage, 'Mapitshjpeg.jpg');

  const loadImage = async () => {
    const url = await getDownloadURL(imageRef);
    setImageUrl(url);
  };
  // const url = "src/assets/Mapitshjpeg.jpg"
  useEffect(() => {
    loadImage();
  }, []);

  return (
    <>
      <MapClickHandler onCoordinatesChange={onCoordinatesChange} />
      <ImageOverlay url={imageUrl} bounds={bounds} />
    </>
  );
};