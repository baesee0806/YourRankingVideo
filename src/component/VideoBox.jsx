import React from "react";
import YouTube from "react-youtube";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function VideoBox({ iconSize, style, videoId, item, title }) {
  //상세페이지로 이동하는 네비게이터
  //하트 state로 관리

  const navigate = useNavigate();

  const detailNavigate = () => {
    navigate(`/${item?.id}`);
  };

  return (
    <div
      style={{
        boxShadow: "10px 15px 15px #888",
        marginBottom: "30px",
        marginLeft: "20px",
      }}
    >
      <YouTube
        style={style}
        videoId={videoId.slice(-11)}
        opts={{
          height: "100%",
          width: "100%",
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
      {/* BottomBar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#eee",
          width: "100%",
          padding: "2%",
          boxSizing: "border-box",
          //신정근 수정
          cursor: "pointer",
        }}
        onClick={detailNavigate}
      >
        <div style={{ boxSizing: "border-box" }}>
          <span>
            {title.slice(0, 15)}
            {title.length > 7 && "..."}
          </span>
        </div>
        {/* 하트 + 좋아요수 */}
        <div
          style={{
            display: "flex",
            marginRight: "10px",
          }}
        >
          <FcLike
            onClick={() => {
              alert("");
            }}
            style={{ fontSize: iconSize }}
          />
          <span style={{ fontSize: iconSize, marginLeft: "5px" }}>30</span>
        </div>
      </div>
    </div>
  );
}

export default VideoBox;
