import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { fetchLikes } from "../API/youtube";
import { useQuery } from "react-query";

function VideoBox({ iconSize, style, videoId, item, title, contentID }) {
  //상세페이지로 이동하는 네비게이터
  //하트 state로 관리
  //   console.log("props로 가져온", item);

  useEffect(() => {
    fetchLikes();
  }, []);

  const navigate = useNavigate();

  const detailNavigate = () => {
    navigate(`/${item?.id}`);
  };

  const { isLoading, isError, data, error } = useQuery("likes", fetchLikes);
  //   console.log("좋아요 함수", data); //들어오는거 확인

  if (isLoading) <div>...Loading</div>;
  if (isError) return alert("에러", error);

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
        <div style={{ boxSizing: "border-box", fontSize: `${iconSize}` }}>
          <span>
            {title.slice(0, 15)}
            {title.length > 7 && "..."}
          </span>
          {/* {data.map((i) =>
            i.contentID === item.contentID ? (
              <span>{item.contentID}</span>
            ) : (
              <span>없음</span>
            )
          )} */}
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
          <span style={{ fontSize: iconSize, marginLeft: "5px" }}>
            {item.nickName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoBox;
