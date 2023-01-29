import React, { useEffect } from "react";
import styled from "styled-components";
import VideoBox from "../component/VideoBox";
import ScrollTopBtn from "../component/ScrollTopBtn";
import { fetchPopVideo } from "../API/youtube";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    fetchPopVideo();
  }, []);

  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery("videos", fetchPopVideo);
  console.log(data);

  //좋아요순으로 만든 데이터 순서
  const iLike = data?.sort(function (a, b) {
    let lengthB = b.likesCount;
    let lengthA = a.likesCount;
    return lengthB - lengthA;
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return alert("에러", error);
  }
  return (
    <ContainerDiv>
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

      <VideoContainerDiv>
        <div key={iLike[0].id}>
          <VideoBox
            iconSize="23px"
            style={{
              height: "650px",
              width: "1180px",
              boxSizing: "border-box",
            }}
            videoId={iLike[0]?.videoUrl}
            item={iLike[0]}
            title={iLike[0]?.title}
          />
          <div style={{ marginTop: "10%" }}>
            <h2>인기동영상🦋</h2>
            <VideoListDiv>
              {iLike &&
                iLike?.map((v) => (
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
            </VideoListDiv>
          </div>
        </div>
      </VideoContainerDiv>
      <ScrollTopBtn />
    </ContainerDiv>
  );
}

export default Home;

const ContainerDiv = styled.div`
  width: 1350px;
  margin: auto;
  padding: 10px;
  @media screen and (max-width: 1400px) {
    width: 1200px;
  }
  @media screen and (max-width: 1300px) {
    width: 1100px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 780px) {
    width: 95%;
  }
`;

const VideoContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: auto;
  @media screen and (max-width: 1400px) {
    width: 1200px;
  }
  @media screen and (max-width: 1300px) {
    width: 1100px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 780px) {
    width: 95%;
  }
`;

const VideoListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
