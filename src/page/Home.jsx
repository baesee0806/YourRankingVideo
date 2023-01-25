import React from "react";
import VideoBox from "../component/VideoBox";
import styled from "styled-components";

export default function Home() {
  return (
    //style= best동영상 사이즈 조절 시 사용
    //bottomBar = bottomBar조절 시 사용
    //iconSize = 하트 조절, 옆에 글자랑 폰트크기 동일
    //title = bottomBar에 있는 title 글자 조절
    <>
      <StyledMainContainer>
        <span style={{ fontSize: 40, fontWeight: "bold" }}>Best🏆</span>
        {/* 여기는 1위 동영상 자리 */}
        <VideoBox
          style={bestVideo}
          bottomBar={videoBottomBar}
          iconSize="23px"
          title={bestVideoTitle}
        ></VideoBox>

        {/* 여기다가 동영상 map돌려서 가져올 예정 */}
        <p style={{ fontSize: 30, fontWeight: "bold" }}>인기동영상</p>
        <div
          style={{
            display: "flex",

            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <VideoBox
            style={listVideo}
            bottomBar={listVideoBottomBar}
            iconSize="19px"
          ></VideoBox>
          <VideoBox
            style={listVideo}
            bottomBar={listVideoBottomBar}
            iconSize="19px"
            title={listVideoTitle}
          ></VideoBox>
          <VideoBox
            style={listVideo}
            bottomBar={listVideoBottomBar}
            iconSize="19px"
            title={listVideoTitle}
          ></VideoBox>
          <VideoBox
            style={listVideo}
            bottomBar={listVideoBottomBar}
            iconSize="19px"
          ></VideoBox>
        </div>
      </StyledMainContainer>
    </>
  );
}

//전체를 감싸는 container 스타일
const StyledMainContainer = styled.div`
  width: 1600px;
  margin: auto;
`;

//**동영상규격이 거의 비슷해서 이대로 가져가서 쓰거나 원하시는대로 조금만 고쳐서 사용하시면 될것 같습니다.*/
//베스트 동영상 style
const bestVideo = {
  // maxWidth: "95%",
  width: "1600px",
  height: "700px",
  margin: "auto",
  backgroundColor: "gray",
};
const videoBottomBar = {
  width: "1600px",
  backgroundColor: "#eee",
  height: "65px",
  boxSizing: "border-box",
  padding: "20px",
};

const bestVideoTitle = {
  display: "flex",
  alignItem: "center",
  fontSize: "23px",
};

//동영상 기본 리스트들 style
const listVideo = {
  width: "450px",
  height: "310px",
  backgroundColor: "gray",
};
const listVideoBottomBar = {
  width: "450px",
  height: "45px",
  backgroundColor: "#eee",
  boxSizing: "border-box",
  padding: "13px",
};

const listVideoTitle = {
  display: "flex",
  alignItem: "center",
  fontSize: "17px",
};
