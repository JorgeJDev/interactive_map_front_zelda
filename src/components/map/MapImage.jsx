import { useEffect, useState } from 'react';
import { storage } from '../../helpers/firebaseStore';
import { ref, getDownloadURL } from 'firebase/storage';
import { ImageOverlay } from 'react-leaflet';
import { MapClickHandler } from './MapClickHandler';

export const MapImage = ({ bounds, onCoordinatesChange }) => {
  const [imageUrl, setImageUrl] = useState('');
  const imageRef = ref(storage, 'Mapitshjpeg.jpg');

  // const loadImage = async () => {
  //   const url = await getDownloadURL(imageRef);
  //   setImageUrl(url);
  // };

  const loadImage = async () => {
    const url = "https://firebasestorage.googleapis.com/v0/b/proyecto-final-backend-f0580.appspot.com/o/Mapitshjpeg.jpg?alt=media&token=c653e91a-e04a-44c3-8fc1-454dc1af0f24&_gl=1*1qw8vd6*_ga*NzMxODI1NTg2LjE2OTYyNDA0NzQ.*_ga_CW55HF8NVT*MTY5NjI0MDQ3NC4xLjEuMTY5NjI0NTM3Mi42MC4wLjA.";
    setImageUrl(url);
  };

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