import axios from 'axios';


// Base da UR: https://api.themoviedb.org/3/
// URL


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;