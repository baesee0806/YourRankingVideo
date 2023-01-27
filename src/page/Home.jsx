import React, { useEffect } from "react";
import VideoBox from "../component/VideoBox";
import ScrollTopBtn from "../component/ScrollTopBtn";
import { fetchVideo } from "../API/youtube";
import { useQuery } from "react-query";

function Home() {
  useEffect(() => {
    fetchVideo();
  }, []);

  const { isLoading, isError, data, error } = useQuery("videos", fetchVideo);
  console.log(data);
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return alert("에러", error);
  }

  return (
    <div style={containerDiv}>
      {/* 영상부분 */}
      <h1>Best🏆</h1>
      <div style={videoContainerDiv}>
        {data.map((v) => (
          <div key={v.id}>
            <VideoBox
              iconSize="23px"
              style={{ height: "650px", width: "1130px" }}
              videoId={v.videoUrl}
              item={v}
              title={v.title}
            />

            <div style={{ marginTop: "10%" }}>
              <h2>인기동영상🦋</h2>

              <div style={videoListDiv}>
                <div>
                  <VideoBox
                    iconSize="17px"
                    style={{ height: "200px", width: "370px" }}
                    videoId={v.videoUrl}
                    item={v}
                    title={v.title}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
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
