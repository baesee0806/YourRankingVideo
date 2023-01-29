import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { fetchLikes } from "../API/youtube";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useCookies } from "react-cookie";
// 쓰지 않는 변수는 (공백),처리해주고 removeCookie 옵션만 사용한다
function VideoBox({ iconSize, style, videoId, item, title }) {
  useEffect(() => {
    fetchLikes();
  }, []);

  const navigate = useNavigate();

  const detailNavigate = () => {
    navigate(`/${item?.id}`);
  };

  const { isLoading, isError, data, error } = useQuery("likes", fetchLikes);

  if (isLoading) <div>...Loading</div>;
  if (isError) return alert("에러", error);

  //좋아요갯수 가지고 오는 함수
  const num = data?.filter((value) => {
    return value?.contentID === item?.id;
  }).length;

  return (
    <VideoBoxContainerDiv>
      <YouTube
        style={style}
        videoId={videoId?.slice(-11)}
        opts={{
          height: "100%",
          width: "100%",
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
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
            {title?.slice(0, 15)}
            {title?.length > 7 && "..."}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginRight: "10px",
          }}
        >
          {num <= 0 ? null : (
            <FcLike
              onClick={() => {
                alert("");
              }}
              style={{ fontSize: iconSize }}
            />
          )}

          <span style={{ fontSize: iconSize, marginLeft: "5px" }}>{num > 0 ? num : null}</span>
        </div>
      </div>
    </VideoBoxContainerDiv>
  );
}

const VideoBoxContainerDiv = styled.div`
  box-shadow: 10px 15px 15px #888;
  margin-bottom: 30px;
  margin-left: 20px;
`;

export default VideoBox;
