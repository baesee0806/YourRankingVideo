import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { UserImgModalState } from "../recoil/userImgModalAtom";

export const UserImgModal = () => {
  const setUserImgModalState = useSetRecoilState(UserImgModalState);
  const [imgUrl, setImgUrl] = useState("");

  // img url 변경 json server
  // 취소 완료 버튼 색

  return (
    <>
      <UserImgModalOutsideBackgroudDiv></UserImgModalOutsideBackgroudDiv>
      <UserImgModalLayoutDiv>
        <UserImgModalImgInputAreaDiv>
          <UserImgModalImg
            src={
              imgUrl === ""
                ? "https://cdn-icons-png.flaticon.com/512/14/14660.png"
                : imgUrl
            }
            onError={(e) => {
              e.target.src =
                "https://cdn-icons-png.flaticon.com/512/14/14660.png";
            }}
          />
          <UserImgModalInputAreaDiv>
            <UserImgModalLabel>이미지 URl을 입력해주세요 :</UserImgModalLabel>
            <UserImgModalInput
              type="text"
              value={imgUrl}
              onFocus={() => {
                setImgUrl("");
              }}
              onChange={(e) => {
                setImgUrl(e.target.value);
                console.log(imgUrl.substring(imgUrl.length - 3, imgUrl.length));
              }}
            />
          </UserImgModalInputAreaDiv>
        </UserImgModalImgInputAreaDiv>
        <UserImgModalBtnAreaDiv>
          <UserImgModalBtn>완료</UserImgModalBtn>
          <UserImgModalBtn
            onClick={() => {
              setUserImgModalState(false);
            }}
          >
            취소
          </UserImgModalBtn>
        </UserImgModalBtnAreaDiv>
      </UserImgModalLayoutDiv>
    </>
  );
};
// 영역 밖 색 어두운 효과
const UserImgModalOutsideBackgroudDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

// 박스 레이아웃
const UserImgModalLayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  background: white;
  position: fixed;
  top: 17.3%;
  border-radius: 20px;
`;

// 유저 변경 이미지 url 입력 영역
const UserImgModalImgInputAreaDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const UserImgModalImg = styled.img`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  margin: 50px auto 80px auto;
`;

const UserImgModalLabel = styled.label`
  margin-left: 5px;
`;
// input 영역
// 버튼 색 지정 해야함
const UserImgModalInputAreaDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImgModalInput = styled.input`
  width: 55%;
  margin-left: 10px;
  cursor: text;
`;

// 완료 확인 버튼 영역
const UserImgModalBtnAreaDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UserImgModalBtn = styled.button`
  width: 30%;
  height: 40%;
  background: blue;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
