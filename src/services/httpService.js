import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const http = {
  put: axios.put,
  get: axios.get,
  delete: axios.delete,
  post: axios.post,
};
export default http;
