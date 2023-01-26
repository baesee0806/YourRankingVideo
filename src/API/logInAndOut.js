import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const SERVER_ADDRESS = "http://localhost:3001/user";

export const login = async () => {
  const { data } = await axios.get(`${SERVER_ADDRESS}/user`);

  return data;
};

export const signup = async () => {
  const { data } = await axios.post(`${SERVER_ADDRESS}/user`);
  const authKey = uuidv4();
  return data;
};
