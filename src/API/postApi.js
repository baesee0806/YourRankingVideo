import axios from "axios";

const BASE_URL = 'http://localhost:3001';

export const videoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  }
});

export const createVideo = (id) => videoApi.post('/videos', id);

export const editVideo = ({id, title, content}) => videoApi.patch(`/videos/${id}`, {
  title,
  content,
});

export const deleteVideo = (id) => videoApi.delete(`/videos/${id}`); 