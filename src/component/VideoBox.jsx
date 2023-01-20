import React from "react";
import { FcLike } from "react-icons/fc";

function VideoBox({ style, bottomBar, iconSize, title }) {
  return (
    <div style={videoStyle}>
      {/* 메인동영상 */}
      <div style={style}></div>
      {/* 비디오 밑에 흰색바 */}
      <div style={bottomBar}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={title}>여기가 동영상Title</span>
          {/* 하트 이모티콘 & 좋아요 수 */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FcLike
              onClick={() => {
                alert("wow");
              }}
              style={{ fontSize: iconSize }}
            />
            <span style={{ fontSize: iconSize, marginLeft: "5px" }}>30</span>
          </div>
        </div>
      </div>
    </div>
  );
}

//전체 비디오 속성
const videoStyle = {
  boxShadow: " 10px 15px 15px #888",
  marginBottom: "40px",
};

export default VideoBox;
