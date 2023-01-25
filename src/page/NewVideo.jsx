import React from "react";
import VideoBox from "../component/VideoBox";
import styled from "styled-components";

export default function NewVideo() {
  return (
    <>
      <StyledMainContainer>
        <div style={{ fontSize: 40, fontWeight: "bold", margin: "20px" }}>
          최신동영상
        </div>

        {/* 여기다가 동영상 map돌려서 가져올 예정 */}

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
