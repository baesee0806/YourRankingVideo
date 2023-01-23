import React from "react";
import styled from "styled-components";

export default function MyPage() {
  return (
    <MypageLayoutDiv>
      {/* 마이페이지 유저 정보 area */}
      <UserInfoAreaDiv>
        {/* 유저 이미지 */}
        <UserInfoImgDiv>
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
          <UserEditNicknameInput type="text" />
          <UserEditNicknameBtn>수정</UserEditNicknameBtn>
        </UserEditNicknameAreaDiv>
      </UserInfoAreaDiv>
      {/* 유저 좋아요한글 게시한글 area */}
      <UserLikeWriteAreaDiv>
        {/* 1. 게시글 상태 관리 해야함 */}
        {/* 메뉴 area */}
        <UserLikeWriteBtnDiv>
          <UserLikeBtn>좋아요한 글</UserLikeBtn>
          <UserWriteBtn>게시한 글</UserWriteBtn>
        </UserLikeWriteBtnDiv>
        {/* video box area */}
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
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
  border: 1px solid black;
  border-radius: 50px;
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
  background: #fff;
  font-size: larger;
  font-weight: 800;
  &:focus {
    background: #555555;
    border-radius: 3px;
  }
`;
const UserWriteBtn = styled.button`
  border: none;
  background: #fff;
  font-size: larger;
  font-weight: 800;
  &:focus {
    background: #555555;
    border-radius: 3px;
  }
`;
