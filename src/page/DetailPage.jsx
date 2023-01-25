import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import YouTube from "react-youtube";

export default function DetailPage() {
  const queryClient = useQueryClient();
  // uuid생성
  const likeUUID = uuidv4();
  //영상ID
  const contentID = 2;
  //userID
  const userID = 4;

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
      userID,
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
    return i.contentID === contentID && i.userID === userID;
  });
  console.log(data.data.length);

  return (
    <DetailPageWrapdiv>
      {/* 영상 */}
      <DetailPageVideodiv>
        <YouTube
          videoId="LlnlpVf7Rpk"
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
        <DetailPageTItleh1>TitleTiTitleTitle</DetailPageTItleh1>

        {/* 좋아요 */}
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
      </DetailPageTextTitlediv>

      <DetailPageTextNamediv>
        {/* 닉네임 */}
        <DetailPageNamediv>name</DetailPageNamediv>
        {/* 날짜 */}
        <DetailPageDatediv>2023.01.21</DetailPageDatediv>
      </DetailPageTextNamediv>

      {/* 내용 */}
      <DetailPageContentdiv>
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
        내용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용용내용
      </DetailPageContentdiv>

      <DetailPageButtondiv>
        {/* 수정버튼 */}
        <DetailPageEditButton>수정</DetailPageEditButton>
        {/* 삭제버튼 */}
        <DetailPageDeleteButton>삭제</DetailPageDeleteButton>
      </DetailPageButtondiv>
    </DetailPageWrapdiv>
  );
}

const DetailPageWrapdiv = styled.div`
  width: 1600px;
  margin: 0 auto;
  @media screen and (max-width: 1700px) {
    width: 1400px;
  }
  @media screen and (max-width: 1600px) {
    width: 1300px;
  }
  @media screen and (max-width: 1440px) {
    width: 1200px;
  }
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
  margin-top: 20px;
`;
const DetailPageTextTitlediv = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DetailPageTItleh1 = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  letter-spacing: -1px;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
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
  margin-top: 10px;
  margin-right: 5px;
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
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #727272;
`;
const DetailPageNamediv = styled.div`
  font-size: 20px;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const DetailPageDatediv = styled.div`
  font-size: 20px;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const DetailPageContentdiv = styled.div`
  margin-top: 40px;
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
  margin-top: 40px;
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
