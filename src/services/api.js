import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3333'
});


instance.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('_pokemon_token')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default instance