import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { fetchLists } from "../API/youtube";
import { useState } from "react";

export default function DetailPage() {
  const queryClient = useQueryClient();
  //로그인 안했을때 해결필요
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useParams로 정보 받아오기
  const { id } = useParams();
  console.log(id);

  //인기동영상 데이터
  const youtubeData = useQuery("items", fetchLists);
  //params로 갖고온 id를 find
  const youtubeDataFind = youtubeData.data?.items.find((item) => {
    return item.id === id;
  });
  console.log(youtubeDataFind?.snippet);

  //게시글 데이터
  const getVideos = async () => {
    const response = await axios.get("http://localhost:3001/videos");
    return response;
  };
  const videos = useQuery("videos", getVideos);
  console.log(videos?.data?.data);

  // uuid생성
  const likeUUID = uuidv4();
  //영상ID
  const contentID = 2;
  //userID
  const userID = getAuth().currentUser;
  // console.log(userID?.uid);

  // like create
  const postMutation = useMutation(
    (newLike) => axios.post("http://localhost:3001/likes", newLike),
    {
      onSuccess: () => {
        // 쿼리 무효화
        queryClient.invalidateQueries("likes");
      },
    }
  );

  // like delete
  const DeleteMutation = useMutation(
    //넘겨받은 id를 삭제
    (id) => axios.delete(`http://localhost:3001/likes/${id}`),
    {
      onSuccess: () => {
        // 쿼리 무효화
        queryClient.invalidateQueries("likes");
      },
    }
  );

  //dbjson생성
  const likeCreate = () => {
    const newLike = {
      contentID,
      userID: userID?.uid,
      id: likeUUID,
    };

    postMutation.mutate(newLike);
  };

  //get likes
  const getLikes = async () => {
    const response = await axios.get("http://localhost:3001/likes");
    return response;
  };

  const { isLoading, isError, data, error } = useQuery("likes", getLikes);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log("오류내용", error);
    return <p>Error..!</p>;
  }

  //userID와 contentID가 현재 페이지와 같은 것만 반환
  const likesData = data.data.filter((i) => {
    return i.contentID === contentID && i.userID === userID?.uid;
  });

  return (
    <DetailPageWrapdiv>
      {/* 영상 */}
      <DetailPageVideodiv>
        <YouTube
          videoId={id}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </DetailPageVideodiv>

      <DetailPageTextTitlediv>
        {/* 제목 */}
        <DetailPageTItleh1>
          {youtubeDataFind ? youtubeDataFind.snippet?.title : "게시물제목"}
        </DetailPageTItleh1>

        {/* 좋아요 */}
        {/* 유튜브 인기동영상 데이터가 존재할 때는 좋아요 숨김 */}
        {youtubeDataFind ? (
          ""
        ) : (
          <DetailPageLikediv>
            <AiFillHeartdiv>
              {/* likesData가 존재할때만 true */}
              {likesData[0] ? (
                <AiFillHeart
                  style={{ fontSize: 20, color: "red" }}
                  onClick={() => {
                    // 현재 페이지 likes의 id를 넘겨줌
                    DeleteMutation.mutate(likesData[0].id);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  style={{ fontSize: 20, color: "red" }}
                  onClick={likeCreate}
                />
              )}
            </AiFillHeartdiv>
            {/* likes의 수 */}
            <DetailPageLikep>{data.data.length}</DetailPageLikep>
          </DetailPageLikediv>
        )}
      </DetailPageTextTitlediv>

      <DetailPageTextNamediv>
        {/* 닉네임 */}
        <DetailPageNamediv>
          {youtubeDataFind
            ? youtubeDataFind.snippet?.channelTitle
            : "게시물내용"}
        </DetailPageNamediv>
        {/* 날짜 */}
        <DetailPageDatediv>
          {/* T뒤의 문자 삭제 */}
          {youtubeDataFind
            ? youtubeDataFind?.snippet?.publishedAt.substring(
                0,
                youtubeDataFind?.snippet?.publishedAt.indexOf("T", 0)
              )
            : "게시물날짜"}
        </DetailPageDatediv>
      </DetailPageTextNamediv>

      {/* 내용 */}
      <DetailPageContentdiv>
        {youtubeDataFind ? youtubeDataFind.snippet?.description : "게시물내용"}
      </DetailPageContentdiv>
      {youtubeDataFind ? (
        ""
      ) : (
        //여기안에서 작성자 id와 로그인 id비교후 출력
        <DetailPageButtondiv>
          {/* 수정버튼 */}
          <DetailPageEditButton>수정</DetailPageEditButton>
          {/* 삭제버튼 */}
          <DetailPageDeleteButton>삭제</DetailPageDeleteButton>
        </DetailPageButtondiv>
      )}
    </DetailPageWrapdiv>
  );
}

const DetailPageWrapdiv = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1350px) {
    width: 1100px;
  }
  @media screen and (max-width: 1200px) {
    width: 900px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 580px) {
    width: 95%;
  }
`;
const DetailPageVideodiv = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  background: #ccc;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
  border-radius: 15px;
  overflow: hidden;
`;
const DetailPageTextTitlediv = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DetailPageTItleh1 = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin: 0;
  letter-spacing: -1px;
  line-height: 130%;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 120%;
  }
  @media screen and (max-width: 667px) {
    font-size: 24px;
  }
`;
const DetailPageLikediv = styled.div`
  display: flex;
  align-items: center;
`;
const AiFillHeartdiv = styled.div`
  margin: 10px 5px 0 10px;
  cursor: pointer;
`;
const DetailPageLikep = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const DetailPageTextNamediv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #727272;
  @media screen and (max-width: 1024px) {
    margin-top: 25px;
  }
`;
const DetailPageNamediv = styled.div`
  font-size: 18px;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const DetailPageDatediv = styled.div`
  font-size: 18px;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const DetailPageContentdiv = styled.div`
  margin: 40px 0 100px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const DetailPageButtondiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;
const DetailPageEditButton = styled.button`
  margin-left: auto;
  color: #fff;
  background-color: #c4302b;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
  border: 0;
  line-height: 30px;
  @media screen and (max-width: 1024px) {
    width: 70px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
  }
  @media screen and (max-width: 580px) {
    margin-left: 0;
  }
`;
const DetailPageDeleteButton = styled.button`
  margin-left: 10px;
  color: #fff;
  background-color: #c4302b;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
  border: 0;
  line-height: 30px;
  @media screen and (max-width: 1024px) {
    width: 70px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
  }
`;
