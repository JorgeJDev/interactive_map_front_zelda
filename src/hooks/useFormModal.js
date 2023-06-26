import { useContext, useState } from 'react';
import { consultation } from '../api/fetch';
import { MarkerContext } from '../context'
import { getUrl } from '../helpers'

/**
 * Proporciona la funcionalidad para manejar el formulario que se muestra al generar el marcador.
 *
 * @param {Function} refreshMarkers - Función para actualizar los marcadores después de enviar el formulario.
 * @returns {Object} - Objeto con funciones y estados para controlar el formulario  de los marcadores.
 */
export const useFormModal = (refreshMarkers) => {

    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState()
    const [formulario, setFormulario] = useState({title: '', description: ''});
    const { marker, setMarker } = useContext(MarkerContext);
   

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({
            ...formulario,
            [name]: value
        })
    };
  
    const handleSubmit = async (e) => {

        e.preventDefault();
    
        const formMarker = {
            ...marker,
            title: e.target.title.value,
            description: e.target.description.value,
            iconType: e.target.iconType.value,
        };

        const body = formMarker;
        const method = 'POST'
        const url = getUrl('entries')
        const request = await consultation(url, method, body)
       
        if (request.ok === true) {
            resetForm();
            setMarker('');
            refreshMarkers();
            closeModal();  
        } else {
            
            setError(request.errors)
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        resetForm()
        setShowModal(false);
    };

    const resetForm = () => {
        setFormulario({
          title: '',
          description: '',
        });
      };

    return {
        showModal,
        handleChange,
        handleSubmit,
        openModal,
        closeModal,
        setShowModal,
        error
    };
};