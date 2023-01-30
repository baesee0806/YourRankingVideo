import VideoBox from "../component/VideoBox";
import styled from "styled-components";
import { fetchVideo } from "../API/youtube";
import { useQuery } from "react-query";
import ScrollTopBtn from "../component/ScrollTopBtn";

export default function NewVideo() {
  //여기 최신 순 제이슨데이터 가져오기
  //data:array
  const { isLoading, isError, data, error } = useQuery("videos", fetchVideo);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return alert("에러", error);
  }

  return (
    <>
      <StyledMainContainer>
        <div style={{ fontSize: 30, fontWeight: "bold", margin: "20px" }}>
          최신동영상
        </div>

        <div style={{ width: "70%", margin: "auto" }}>
          <div style={videoListDiv}>
            {data.map((item) => (
              <div key={item.id}>
                <VideoBox
                  iconSize="17px"
                  style={{
                    height: "200px",
                    width: "350px",
                  }}
                  videoId={item.videoUrl}
                  item={item}
                  title={item.title}
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

  @media screen and (max-width: 1500px) {
    width: 1200px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

const videoListDiv = {
  display: "flex",
  flexWrap: "wrap",
};
