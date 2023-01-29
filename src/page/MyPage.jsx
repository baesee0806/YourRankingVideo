import React, { useState } from "react";
import styled from "styled-components";
import { UserImgModal } from "../component/UserImgModal";
import { useRecoilState } from "recoil";
import { UserImgModalState } from "../recoil/userImgModalAtom";
import { UserLikePostState } from "../recoil/myPageAtom";
import VideoBox from "../component/VideoBox";
import { authService } from "../common/firebase";
import { updateProfile } from "firebase/auth";
import { useQuery } from "react-query";
import { fetchLikes, fetchPopVideo, fetchVideo } from "../API/youtube";
import axios from "axios";
export default function MyPage(userObj) {
  // user img modal change
  const [userImgModalState, setUserImgModalState] = useRecoilState(UserImgModalState);
  const [nickName, setNickName] = useState(userObj.displayName);
  // 내가쓴글 좋아요 누른글 리스트 change
  const [userList, setUserList] = useRecoilState(UserLikePostState);
  const user = authService?.currentUser;
  const usernickname = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;

  const userNickNameChange = () => {
    updateProfile(authService.currentUser, {
      displayName: nickName,
    })
      .then(() => {
        setNickName("");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const { isLoading, isError, data, error } = useQuery("likes", fetchLikes);

  // 좋아요 누른 비디오
  const MyLikeVideo = data?.filter((el) => el?.userID === user?.uid);

  const LikesVideo = useQuery("videos", fetchPopVideo)?.data?.filter((el) => {
    for (let i = 0; i < MyLikeVideo.length; i++) {
      if (el?.id === MyLikeVideo[i]?.contentID) {
        return el;
      }
    }
  });

  // 내가 쓴글
  const MyWrite = useQuery("videos", fetchPopVideo)?.data?.filter(
    (el) => el?.userId === user?.uid
  );

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return alert("에러", error);
  }

  return (
    <MypageLayoutDiv>
      {userImgModalState ? <UserImgModal /> : null}
      {/* 마이페이지 유저 정보 area */}
      <UserInfoAreaDiv>
        {/* 유저 이미지 */}
        <UserInfoImgDiv
          onClick={() => {
            setUserImgModalState(true);
          }}
        >
          <UserInfoImg src={photoURL} />
        </UserInfoImgDiv>
        {/* 유저 이메일 */}
        <div>
          <UserInfoEmailH3>{email}</UserInfoEmailH3>
        </div>
        {/* 유저 닉네임 */}
        <div>
          <UserNickNameH4>{usernickname}</UserNickNameH4>
        </div>
        {/* 유저 닉네임 input */}
        <UserEditNicknameAreaDiv>
          <UserEditNicknameInput
            type="text"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
          <UserEditNicknameBtn
            onClick={() => {
              userNickNameChange();
            }}
          >
            수정
          </UserEditNicknameBtn>
        </UserEditNicknameAreaDiv>
      </UserInfoAreaDiv>
      {/* 유저 좋아요한글 게시한글 area */}
      <UserLikeWriteAreaDiv>
        {/* 메뉴 area */}
        <UserLikeWriteBtnDiv>
          <UserLikeBtn
            userList={userList}
            onClick={() => {
              setUserList(true);
            }}
          >
            좋아요한 글
          </UserLikeBtn>
          <UserWriteBtn
            userList={userList}
            onClick={() => {
              setUserList(false);
            }}
          >
            게시한 글
          </UserWriteBtn>
        </UserLikeWriteBtnDiv>

        {/* video box area */}

        {userList ? (
          <VideoAreaWrapDiv>
            <VideoAreaDiv>
              {LikesVideo?.map((el) => {
                return (
                  <VideoBox
                    iconSize="17px"
                    style={{
                      height: "200px",
                      width: "350px",
                    }}
                    videoId={el?.videoUrl}
                    item={el}
                    title={el.title}
                  />
                );
              })}
            </VideoAreaDiv>
          </VideoAreaWrapDiv>
        ) : (
          <VideoAreaWrapDiv>
            <VideoAreaDiv>
              {MyWrite?.map((el) => {
                return (
                  <VideoBox
                    iconSize="17px"
                    style={{
                      height: "200px",
                      width: "350px",
                    }}
                    videoId={el?.videoUrl}
                    item={el}
                    title={el.title}
                  />
                );
              })}
            </VideoAreaDiv>
          </VideoAreaWrapDiv>
        )}
      </UserLikeWriteAreaDiv>
    </MypageLayoutDiv>
  );
}
const MypageLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// User info Area
const UserInfoAreaDiv = styled.div`
  height: 540px;
  width: 60%;
  margin: 50px auto 180px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 10px 15px 15px #888;
`;

const UserInfoImgDiv = styled.div`
  margin-top: -50px;
`;

const UserInfoImg = styled.img`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
`;

const UserInfoEmailH3 = styled.h3`
  margin: 15px 0 0 0;
  width: auto;
  font-size: large;
  font-weight: 800;
`;

const UserNickNameH4 = styled.h4`
  margin: 15px 0 0 0;
  width: auto;
  font-size: large;
  color: #555555;
`;

const UserEditNicknameAreaDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserEditNicknameInput = styled.input`
  width: 40%;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 5px;
  font-size: larger;
  &:focus {
    outline: none;
  }
`;

const UserEditNicknameBtn = styled.button`
  background: #fff;
  border: 1px solid black;
  border-radius: 10px;
  width: 50px;
  height: 30px;
  cursor: pointer;
`;

// User Like & post

const UserLikeWriteAreaDiv = styled.div`
  width: 60%;
  margin: 50px auto 180px auto;
  display: flex;
  flex-direction: column;
`;

const UserLikeWriteBtnDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #555555;
  margin-bottom: 30px;
`;

const UserLikeBtn = styled.button`
  border: none;
  background: ${(props) => (props.userList ? "#555555" : "#fff")};
  font-size: larger;
  font-weight: 800;
  border-radius: 3px;
`;
const UserWriteBtn = styled.button`
  border: none;
  background: #fff;
  font-size: larger;
  font-weight: 800;
  background: ${(props) => (props.userList ? "#fff" : "#555555")};
  border-radius: 3px;
`;

const VideoAreaWrapDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const VideoAreaDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
