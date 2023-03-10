import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { authService } from "../common/firebase";

export default function DetailPage() {
  //로그인 상태 정보
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    //로그인 상태 정보
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  // like create (likes에 데이터 추가)
  const postMutation = useMutation(
    (newLike) =>
      axios.post("https://darkened-tasty-airship.glitch.me/likes", newLike),
    {
      onSuccess: () => {
        // 쿼리 무효화
        queryClient.invalidateQueries("likes");
      },
    }
  );

  // like delete (likes에 데이터 삭제)
  const DeleteMutation = useMutation(
    //넘겨받은 id를 삭제
    (id) =>
      axios.delete(`https://darkened-tasty-airship.glitch.me/likes/${id}`),
    {
      onSuccess: () => {
        // 쿼리 무효화
        queryClient.invalidateQueries("likes");
      },
    }
  );

  //likesCount 수정 (videos의 likesCount 수정)
  const likesCountMutation = useMutation(
    ({ id, likesCount }) =>
      axios.patch(`https://darkened-tasty-airship.glitch.me/videos/${id}`, {
        likesCount,
      }),
    {
      onSuccess: () => {
        // window.location = "/";
      },
    }
  );

  //useParams로 컨텐츠 정보 받아오기
  const params = useParams();

  //인기동영상 데이터
  const youtubeData = useQuery("items", fetchLists);
  //params로 갖고온 id를 find
  const youtubeDataFind = youtubeData.data?.items.find((item) => {
    return item.id === params.id;
  });

  // uuid생성
  const likeUUID = uuidv4();
  //userID
  const userID = getAuth().currentUser;

  //게시글에 사용할 데이터 (videos데이터 가져오기)
  const getVideos = async () => {
    const response = await axios.get(
      "https://darkened-tasty-airship.glitch.me/videos"
    );
    return response;
  };
  const videos = useQuery("videos", getVideos);
  const videosFind = videos.data?.data?.find((data) => data?.id == params.id);
  const videosFindSplit = videosFind?.videoUrl?.split("=")[1];
  const dateSplit = videosFind?.time.slice(0, -1);

  //게시글 삭제 (videos데이터 삭제)
  const textDeleteMutation = useMutation(
    //넘겨받은 id를 삭제
    (id) =>
      axios.delete(`https://darkened-tasty-airship.glitch.me/videos/${id}`),
    {
      onSuccess: () => {
        window.location = "/";
      },
    }
  );

  const textDeleteMutationOnClick = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      textDeleteMutation.mutate(params.id);
      alert("삭제되었습니다");
    } else {
      alert("취소되었습니다");
    }
  };

  //get likes (likes데이터 가져오기)
  const getLikes = async () => {
    return await axios.get("https://darkened-tasty-airship.glitch.me/likes");
  };

  const { isLoading, isError, data, error } = useQuery("likes", getLikes);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log("오류내용", error);
    return <p>Error..!</p>;
  }
  const likesData = data?.data?.filter((i) => {
    return i.contentID === params.id && i.userID === userID?.uid;
  });
  const likesDataLength = data?.data?.filter((i) => {
    return params.id === i.contentID;
  });

  //좋아요 Likes 생성, videos(likesCount)수정
  const likeCreate = () => {
    if (isLoggedIn === false) {
      if (window.confirm("로그인 후 이용 가능합니다.")) {
        navigate("/login");
      } else {
      }
    } else {
      const newLike = {
        contentID: params.id,
        userID: userID?.uid,
        id: likeUUID,
      };

      const newLikesCount = {
        id: params.id,
        likesCount: likesDataLength?.length + 1,
      };

      postMutation.mutate(newLike);
      likesCountMutation.mutate(newLikesCount);
    }
  };
  //좋아요 Likes 삭제, videos(likesCount)수정
  const likeDelete = () => {
    const newLikesCount = {
      id: params.id,
      likesCount: likesDataLength?.length - 1,
    };

    // 현재 페이지 likes의 id를 넘겨줌
    DeleteMutation.mutate(likesData[0].id);
    likesCountMutation.mutate(newLikesCount);
  };
  //수정페이지로 가는 버튼, editpost/id(uuid)로 이동 + params.id state로 넘겨주기
  const goToEditPage = () => {
    navigate(`/editpost/${params.id}`, {
      state: {
        videoId: params.id,
      },
    });
  };

  return (
    <DetailPageWrapdiv>
      {/* 영상 */}
      <DetailPageVideodiv>
        <YouTube
          videoId={youtubeDataFind ? params?.id : videosFindSplit}
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
          {youtubeDataFind ? youtubeDataFind.snippet?.title : videosFind?.title}
        </DetailPageTItleh1>

        {/* 좋아요 */}
        {/* 유튜브 인기동영상 데이터가 존재할 때는 좋아요 숨김 */}
        {youtubeDataFind ? (
          ""
        ) : (
          <DetailPageLikediv>
            <AiFillHeartdiv>
              {/* likesData가 존재할때만 true */}
              {likesData && likesData[0] ? (
                <AiFillHeart
                  style={{ fontSize: 20, color: "red" }}
                  onClick={likeDelete}
                />
              ) : (
                <AiOutlineHeart
                  style={{ fontSize: 20, color: "red" }}
                  onClick={likeCreate}
                />
              )}
            </AiFillHeartdiv>
            {/* likes의 수 */}
            <DetailPageLikep>{likesDataLength?.length}</DetailPageLikep>
          </DetailPageLikediv>
        )}
      </DetailPageTextTitlediv>

      <DetailPageTextNamediv>
        {/* 닉네임 */}
        <DetailPageNamediv>
          {youtubeDataFind
            ? youtubeDataFind.snippet?.channelTitle
            : videosFind?.nickName}
        </DetailPageNamediv>
        {/* 날짜 */}
        <DetailPageDatediv>
          {youtubeDataFind
            ? youtubeDataFind?.snippet?.publishedAt.substring(
                0,
                youtubeDataFind?.snippet?.publishedAt.indexOf("T", 0)
              )
            : dateSplit}
        </DetailPageDatediv>
      </DetailPageTextNamediv>

      {/* 내용 */}
      <DetailPageContentdiv>
        {youtubeDataFind
          ? youtubeDataFind.snippet?.description
          : videosFind?.content}
      </DetailPageContentdiv>
      {youtubeDataFind ? (
        ""
      ) : (
        <div>
          {userID?.uid === videosFind?.userId ? (
            <DetailPageButtondiv>
              {/* 수정버튼 */}
              <DetailPageEditButton onClick={goToEditPage}>
                수정
              </DetailPageEditButton>
              {/* 삭제버튼 */}
              <DetailPageDeleteButton onClick={textDeleteMutationOnClick}>
                삭제
              </DetailPageDeleteButton>
            </DetailPageButtondiv>
          ) : (
            ""
          )}
        </div>
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
