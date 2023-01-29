import axios from "axios";

const BASE_URL = 'https://darkened-tasty-airship.glitch.me';

export const videoApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  }
});

export const createVideo = (id) => videoApi.post('/videos', id);

export const editVideo = ({id, title, content}) => videoApi.patch(`/videos/${id}`, {
  title, // : String
  content, // : String
});

export const deleteVideo = (id) => videoApi.delete(`/videos/${id}`); 