import React, { useEffect } from "react";
import ScrollTopBtn from "../component/ScrollTopBtn";
import VideoBox from "../component/VideoBox";
import styled from "styled-components";
import { fetchLists } from "../API/youtube";
import { useQuery } from "react-query";

export default function PopularVideo() {
  useEffect(() => {
    fetchLists();
    sessionStorage.clear();
  }, []);
  //data:array
  const { isLoading, isError, data, error } = useQuery("items", fetchLists);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return alert("에러", error);
  }

  return (
    <>
      <StyledMainContainer>
        <div style={{ fontSize: 30, fontWeight: "bold", margin: "20px 150px" }}>
          인기 동영상🔥
        </div>

        <div style={{ width: "70%", margin: "auto" }}>
          <div style={videoListDiv}>
            {data?.items.map((item) => (
              <div key={item.id}>
                <VideoBox
                  iconSize="17px"
                  style={{
                    height: "200px",
                    width: "350px",
                  }}
                  //videoId:string
                  videoId={item.id}
                  // item:array [{...}]
                  item={item}
                  //title:string
                  title={item.snippet.title}
                />
              </div>
            ))}
          </div>
        </div>
      </StyledMainContainer>
      <ScrollTopBtn />
    </>
  );
}

//전체를 감싸는 container 스타일
const StyledMainContainer = styled.div`
  width: 1600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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

const videoListDiv = {
  display: "flex",
  flexWrap: "wrap",
};
