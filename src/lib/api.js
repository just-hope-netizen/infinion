import axios from "axios";

const endpoint = import.meta.env.VITE_BACKEND_API
export const fetchData = async () => {
    try {
      const res = await axios.get(
        endpoint
      );
      return res
    } catch (error) {
        return error
    }
  };
 export  const postData = async (data) => {
    try {
      const res = await axios.post(
        endpoint,
        data
      );
      return res
         } catch (error) {
        return error
    }
  };
 export const deleteData = async (id) => {
    try {
      const res = await axios.delete(
        endpoint + id,
        {
          headers: {
            accept: "*/*",
          },
        }
      );
      return res
   } catch (error) {
      return error
    }
  };