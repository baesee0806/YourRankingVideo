import React, { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { UserImgModal } from "../component/UserImgModal";
import { useRecoilState } from "recoil";
import { UserImgModalState } from "../recoil/userImgModalAtom";
import { UserLikePostState } from "../recoil/myPageAtom";
export default function MyPage() {
  // user img modal change
  const [userImgModalState, setUserImgModalState] =
    useRecoilState(UserImgModalState);
  const [text, setText] = useState("");
  // 내가쓴글 좋아요 누른글 리스트 change
  const [userList, setUserList] = useRecoilState(UserLikePostState);

  // 로그인한 유저 닉네임 수정 버튼 디자인
  // 로그인한 유저 닉네임 수정 버튼 구현
  // 로그인한 유저 좋아요한글 게시한글 비디오box 적용
  // 유저의 해당글로 navigate

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
          <UserInfoImg src="https://cdn-icons-png.flaticon.com/512/14/14660.png" />
        </UserInfoImgDiv>
        {/* 유저 이메일 */}
        <div>
          <UserInfoEmailH3>test@test.com</UserInfoEmailH3>
        </div>
        {/* 유저 닉네임 */}
        <div>
          <UserNickNameH4>닉네임</UserNickNameH4>
        </div>
        {/* 유저 닉네임 input */}
        <UserEditNicknameAreaDiv>
          <UserEditNicknameInput
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.vlaue);
            }}
          />
          <UserEditNicknameBtn type="button">수정</UserEditNicknameBtn>
        </UserEditNicknameAreaDiv>
      </UserInfoAreaDiv>
      {/* 유저 좋아요한글 게시한글 area */}
      <UserLikeWriteAreaDiv>
        {/* 1. 게시글 상태 관리 해야함 */}
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
          <div>
            <div>
              <YouTube
                videoId="LgbkUZC6P8I"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                //이벤트 리스너
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
              <div>
                <h3>제목</h3>
                <div>❤️20</div>
              </div>
            </div>
            <div>
              <YouTube
                videoId="LlnlpVf7Rpk"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                //이벤트 리스너
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
              <div>
                <h3>제목</h3>
                <div>❤️20</div>
              </div>
            </div>
            <div>
              <YouTube
                videoId="LlnlpVf7Rpk"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                //이벤트 리스너
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
              <div>
                <h3>제목</h3>
                <div>❤️20</div>
              </div>
            </div>
            <div>
              <YouTube
                videoId="LlnlpVf7Rpk"
                opts={{
                  width: "100%",
                  height: "300px",
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                //이벤트 리스너
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
              <div>
                <h3>제목</h3>
                <div>❤️20</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div>내가 쓴글</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
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
