import { consultation } from "../api/fetch";
import { getUrl } from "../helpers";


export const useDeleteEntry = async (id, entry, refresh) => {
  
  const method = 'DELETE';
  const url = getUrl(entry,id);
  console.log(url)
  try {
    const request = await consultation(url, method);
    
    if (request.ok === true) {
    refresh();
   
  }
 
  } catch (error) {
   
}}