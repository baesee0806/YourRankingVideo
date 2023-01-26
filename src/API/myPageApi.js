import axios from "axios"

const fetchUser = async() => {
  const {data} = await axios.get(`http://localhost:3001/User`)
  return data
}


export {fetchUser}