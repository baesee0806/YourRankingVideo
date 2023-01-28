import React, { useEffect } from "react";
import styled from "styled-components";
import VideoBox from "../component/VideoBox";
import ScrollTopBtn from "../component/ScrollTopBtn";
import { fetchLikes, fetchPopVideo } from "../API/youtube";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    fetchPopVideo();
  }, []);

  const navigate = useNavigate();

  //likedata배열에서 가장 많이 나온 contentID를 배열안에다가 정리하자.
  //그 배열을 가지고 Map돌리면 끝이다.

  const { isLoading, isError, data, error } = useQuery("videos", fetchPopVideo);
  console.log("video데이터", data);

  const likeDatas = useQuery("likes", fetchLikes).data;
  console.log("좋아요데이터", likeDatas);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return alert("잠시 후 다시 시도", error);
  }
  //contentID값 누적 가지고 옴
  //누적값이 가장 많은 contentID를 들고오자.->배열로 가져오자
  //******************************* */

  // const answer = likeDatas.map((i) => i.contentID);
  // console.log(answer);

  // const answer2 = data?.map((i) => i);
  // console.log("answer2", answer2);

  // const number = likeDatas.filter((v) => {
  //   for (let i = 0; i < likeDatas.length; i++) {
  //     return v.contentID === answer2[i].id;
  //   }
  // }).length;
  // console.log(number);

  return (
    <div style={containerDiv}>
      {/* 영상부분 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Best🏆</h1>
        <StyledPostBtn
          onClick={() => {
            navigate("/postpage");
          }}
        >
          글 쓰기
        </StyledPostBtn>
      </div>

      <div style={videoContainerDiv}>
        <div key={data[0].id}>
          <VideoBox
            iconSize="23px"
            style={{
              height: "650px",
              width: "1180px",
              paddingBottom: "10px",
              boxSizing: "border-box",
            }}
            videoId={data[0]?.videoUrl}
            item={data[0]}
            title={data[0]?.title}
          />

          <div style={{ marginTop: "10%" }}>
            <h2>인기동영상🦋</h2>
            <div style={videoListDiv}>
              {data?.map((v) => (
                <div key={v.id}>
                  <VideoBox
                    iconSize="17px"
                    style={{ height: "200px", width: "370px" }}
                    videoId={v.videoUrl}
                    item={v}
                    title={v.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollTopBtn />
    </div>
  );
}

export default Home;

const containerDiv = {
  width: "1350px",
  margin: "auto",
  padding: "10px",
};

const videoContainerDiv = {
  display: "flex",
  flexDirection: "column",
  width: "1200px",
  margin: "auto",
};

const videoListDiv = {
  width: "1200px",
  display: "flex",
  flexWrap: "wrap",
  paddingLeft: "20px",
};

const StyledPostBtn = styled.button`
  border-radius: 8px;
  width: 100px;
  height: 50px;
  margin-top: 20px;
  padding-top: 4px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 17px;
  border: 2px solid #c4302b;
  box-shadow: 5px 5px 10px #aaa;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    background-color: #c4302b;
    color: white;
  }
`;
