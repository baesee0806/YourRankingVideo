import axios from "axios";

const BASE_URL = 'http://localhost:3001';

export const videoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  }
});

// export const createVideo = async () => {
//   // const response = await videoApi.post('/videos');
//   const response = await axios.post('http://localhost:3001/videos');
//   return response.data;
// }

// export const createVideo = (id) => axios.post('http://localhost:3001/videos', id)
export const createVideo = (id) => videoApi.post('/videos', id)