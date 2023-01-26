import React from "react";
import VideoBox from "../component/VideoBox";
import ScrollTopBtn from "../component/ScrollTopBtn";

function Home() {
  return (
    <div style={containerDiv}>
      {/* 영상부분 */}
      <h1>Best🏆</h1>
      <div style={videoContainerDiv}>
        <VideoBox
          iconSize="23px"
          style={{ height: "650px", width: "1130px" }}
        />
      </div>
      <div style={{ marginTop: "10%" }}>
        <h2>인기동영상🦋</h2>
        {/* 인기동영상 묶을 div */}
        <div style={videoListDiv}>
          {/* 여기서 맵 돌림 */}
          <div>
            <VideoBox
              iconSize="17px"
              style={{ height: "200px", width: "370px" }}
            />
          </div>
          <div>
            <VideoBox
              iconSize="17px"
              style={{ height: "200px", width: "370px" }}
            />
          </div>
          <div>
            <VideoBox
              iconSize="17px"
              style={{ height: "200px", width: "370px" }}
            />
          </div>
        </div>
      </div>
      <ScrollTopBtn />
    </div>
  );
}

export default Home;

const containerDiv = {
  width: "1300px",
  margin: "auto",
  padding: "10px",
};

const videoContainerDiv = {
  display: "flex",
  flexDirection: "column",
  height: "650px",
  width: "1150px",
  margin: "auto",
};

const videoListDiv = {
  display: "flex",
  justifyContent: "space-between",
};
