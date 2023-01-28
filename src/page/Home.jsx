import React, { useEffect } from "react";
import styled from "styled-components";
import VideoBox from "../component/VideoBox";
import ScrollTopBtn from "../component/ScrollTopBtn";
import { fetchVideo } from "../API/youtube";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    fetchVideo();
  }, []);

  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery("videos", fetchVideo);

  //좋아요 수가 만들어서 들고온 데이터의 배열 첫번째 값을 가장 큰 값으로 주고
  //가능하다면 첫번째 배열 짜르고 두번째 영상부터 map을돌리자

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return alert("에러", error);
  }

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
      </div>

      <div style={videoContainerDiv}>
        <div key={data[0].id}>
          {/* <VideoBox
            iconSize="23px"
            style={{
              height: "650px",
              width: "1180px",
              paddingBottom: "10px",
              boxSizing: "border-box",
            }}
            videoId={data[0].videoUrl}
            item={data[0]}
            title={data[0].title}
          /> */}

          <div style={{ marginTop: "10%" }}>
            <h2>인기동영상🦋</h2>
            <div style={videoListDiv}>
              {data.map((v) => (
                <div key={v.id}>
                  <VideoBox iconSize="17px" style={{ height: "200px", width: "370px" }} videoId={v.videoUrl} item={v} contentID={v.contentID} title={v.title} />
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
