import { useContext, useState } from "react";
import { getUrl } from '../helpers'
import { useNavigate } from 'react-router-dom'
import { consultation } from "../api/fetch";
import {UserContext} from '../context'

export const useFormAdmin = (id, refreshMarkers, markers) => {
  
    const [formulario, setFormulario] = useState('');
    const [error, setError] = useState()
    const navigateTo = useNavigate()
    const { user } = useContext(UserContext)

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({
            ...formulario,
            [name]: value
        })
    };

    const getFormData = (e) => {
        const title = e.target.title.value;
        const description = e.target.description.value;
        const iconType = e.target.iconType.value;
        const status = user?.role !== 'user' ? e.target.status.value : markers[0].status;
      
        return {
          title,
          description,
          status,
          iconType,
        };
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formEdit = getFormData(e);
      
        const body = formEdit;
        const method = 'PUT';
        const url = getUrl('entries', id);
      
        const request = await consultation(url, method, body);
      
        if (request.ok === true) {
          refreshMarkers();
          navigateTo(-1);
        } else {
          setError(request.errors);
        }
      };
      

    return {

        handleChange,
        handleSubmit,
        error
    }
}
