<<<<<<< HEAD
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function myPageApi() {
  return <div>myPageApi</div>;
=======
import axios from "axios"

const fetchUser = async() => {
  const {data} = await axios.get(`http://localhost:3001/User`)
  return data
>>>>>>> 40f7c34e969355c1a9d2eb6045667e7d04c33390
}


export {fetchUser}