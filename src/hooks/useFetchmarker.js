import { useEffect, useState } from "react";
import { getMarker } from '../helpers/getMarkers';
import { getUrl } from "../helpers";

/**
 * Obtiene los marcadores del servidor y los guarda en el estado.
 *
 * @param {string} entry - Información para obtener la URL.
 * @returns {Object} - Objeto con los marcadores, estado de cargando y función para actualizar los marcadores.
 */
export const useFetchMarkers = (entry, id) => {

    const [markers, setMarker] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const url = getUrl(entry, id)
 
    const consultMarkers = async () => {

        setIsLoading(true);
        const markerMongo = await getMarker(url, id);
        setMarker(markerMongo);
        setIsLoading(false);

    };

    const refreshMarkers = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        consultMarkers();
    }, [refresh]);

    //* Este valor viene desde el useFormModal y hace una llamada a la api cuando el formulario se envía
 
    return {
        markers,
        isLoading,
        refreshMarkers
    };
};
