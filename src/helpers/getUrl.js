/**
 * Obtiene la URL para realizar consultas a la API.
 *
 * @param {string} entry - el final del endpoint para la URL
 * @param {string} [id] - El ID , si es necesario.
 * @returns {string} - La URL para realizar consultas a la API.
 */
export const getUrl = (entry, id) => {

   let url = ''

   if (entry === 'search') {
     
      url = `${import.meta.env.VITE_URL_BASE_API}/entries/?search=${id}`
      return url
   } else if (!id) {

      url = `${import.meta.env.VITE_URL_BASE_API}/${entry}`
      return url

   } else {

      url = `${import.meta.env.VITE_URL_BASE_API}/${entry}/${id}`
      return url
   }

}