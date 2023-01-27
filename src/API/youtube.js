import axios from "axios";

const MY_Key = "AIzaSyDC2j0XqxERFfjHRWO8YOVj368kFoZ10SY";

// 대한민국 유튜브 인기동영상 10개 get
// https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=kr&key=AIzaSyDC2j0XqxERFfjHRWO8YOVj368kFoZ10SY

const fetchLists = async () => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=kr&key=${MY_Key}`
  );
  return data;
};

const fetchVideo = async () => {
  const { data } = await axios.get(
    `http://localhost:3001/videos?_sort=createAt&_order=desc`
  );
  return data;
};

export { fetchLists, fetchVideo };

// import { fetchLists } from "../API/youtube";
// import { useQuery } from "react-query";
// const { isLoading, isError, data } = useQuery("items", fetchLists);

// if (isLoading) {
//   return alert("로딩중");
// }

// if (isError) {
//   return alert("에러");
// }
// console.log(data.items.map((el) => el.id));
