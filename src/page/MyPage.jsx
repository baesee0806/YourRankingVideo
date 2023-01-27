import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserImgModal } from "../component/UserImgModal";
import { useRecoilState } from "recoil";
import { UserImgModalState } from "../recoil/userImgModalAtom";
import { UserLikePostState } from "../recoil/myPageAtom";
import VideoBox from "../component/VideoBox";
import { authService } from "../common/firebase";
import { updateProfile } from "firebase/auth";
export default function MyPage() {
  // user img modal change
  const [userImgModalState, setUserImgModalState] =
    useRecoilState(UserImgModalState);
  const [nickName, setNickName] = useState("");
  // 내가쓴글 좋아요 누른글 리스트 change
  const [userList, setUserList] = useRecoilState(UserLikePostState);

  // 1.onAuthStateChanged
  // 2. useEffect
  // 3. usestate

  const user = authService.currentUser;
  const usernickname = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;

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

  // useEffect(() => {
  //   console.log("2");
  // }, [userNickNameChange]);

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
              <VideoBox
                iconSize="17px"
                style={{
                  height: "200px",
                  width: "350px",
                }}
                videoId="qQrD2BKPApo"
                // item={item}
              />
            </VideoAreaDiv>
            <VideoAreaDiv>
              <VideoBox
                iconSize="17px"
                style={{
                  height: "200px",
                  width: "350px",
                }}
                videoId="qQrD2BKPApo"
                // item={item}
              />
            </VideoAreaDiv>
            <VideoAreaDiv>
              <VideoBox
                iconSize="17px"
                style={{
                  height: "200px",
                  width: "350px",
                }}
                videoId="qQrD2BKPApo"
                // item={item}
              />
            </VideoAreaDiv>
          </VideoAreaWrapDiv>
        ) : (
          <VideoAreaWrapDiv>
            <VideoAreaDiv>
              <VideoBox
                iconSize="17px"
                style={{
                  height: "200px",
                  width: "350px",
                }}
                videoId="qQrD2BKPApo"
                // item={item}
              />
            </VideoAreaDiv>
            <VideoAreaDiv>
              <VideoBox
                iconSize="17px"
                style={{
                  height: "200px",
                  width: "350px",
                }}
                videoId="qQrD2BKPApo"
                // item={item}
              />
            </VideoAreaDiv>
            <VideoAreaDiv>
              <VideoBox
                iconSize="17px"
                style={{
                  height: "200px",
                  width: "350px",
                }}
                videoId="qQrD2BKPApo"
                // item={item}
              />
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
`;
