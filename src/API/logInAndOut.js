import axios from "axios";

export const SERVER_ADDRESS = "http://localhost:3001";

export const login = async () => {
  const { data } = await axios.get(`${SERVER_ADDRESS}/user`);

  return data;
};

export const signup = async () => {
  const { data } = await axios.post(`${SERVER_ADDRESS}/user`);

  return data;
};
