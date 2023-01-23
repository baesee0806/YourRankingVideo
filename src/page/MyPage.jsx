import React from "react";
import styled from "styled-components";

export default function MyPage() {
  return (
    <>
      {/* 마이페이지 유저 정보 area */}
      <UserInfoAreaDiv>
        {/* 유저 이미지 */}
        <div>
          <UserInfoImg src="https://cdn-icons-png.flaticon.com/512/14/14660.png" />
        </div>
        {/* 유저 이메일 */}
        <div>
          <UserInfoEmailH3>test@test.com</UserInfoEmailH3>
        </div>
        {/* 유저 닉네임 */}
        <div>
          <h4>닉네임</h4>
        </div>
        {/* 유저 닉네임 input */}
        <div>
          <input type="text" />
          <button>수정</button>
        </div>
      </UserInfoAreaDiv>
      {/* 유저 좋아요한글 게시한글 area */}
      <div>
        {/* 1. 게시글 상태 관리 해야함 */}
        {/* 메뉴 area */}
        <div>
          <button>좋아요한 글</button>
          <button>게시한 글</button>
        </div>
        {/* video box area */}
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </>
  );
}

const UserInfoAreaDiv = styled.div`
  width: 740px;
  height: 540px;
  margin: 50px auto 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50px;
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
