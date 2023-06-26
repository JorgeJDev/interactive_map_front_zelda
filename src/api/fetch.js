/**
 * Realiza una consulta ala API de la cual su respuestá se usará a lo largo de la aplicación.
 *
 * @param {string} url - La URL a la que se realizará la consulta.
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method - Los métodos qque se utilizarán en la consulta.
 * @param {Object} [body={}] - En caso de usar los métodos POST o PUT se enviará un objeto a la API.
 * @returns {Promise<Object>} - La respuesta de la consulta en formato JSON.
 * @throws {Error} - Lanza un error si hay problemas al conectar con la API.
 */
export const consultation = async (url, method, body = {}) => {
  let options = {};

  const data = { ...body };

  try {

    if (method === "POST" || method === "PUT") {
      
      options = {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      };
    } 
    
    if (method === "DELETE") {

      options = { method };

    }
   
    const request = await fetch(url, options);

    if (request) {
      return request.json();
    } else {
      throw new Error("Error al conectar con la api");
    }
  } catch (error) {
    throw new Error(`Error al conectar con la API: ${error.message}`);
  }
};


