import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

export default function DetailPage() {
  return (
    <DetailPageWrapdiv>
      {/* 영상 */}
      <DetailPageVideodiv>영상</DetailPageVideodiv>

      <DetailPageTextTitlediv>
        {/* 제목 */}
        <DetailPageTItleh1>TitleTiTitleTitle</DetailPageTItleh1>

        {/* 좋아요 */}
        <DetailPageLikediv>
          <AiFillHeartdiv>
            <AiFillHeart style={{ fontSize: 20, color: "red" }} />
          </AiFillHeartdiv>
          <DetailPageLikep>9999</DetailPageLikep>
        </DetailPageLikediv>
      </DetailPageTextTitlediv>

      <DetailPageTextNamediv>
        <DetailPageNamediv>name</DetailPageNamediv>
        <DetailPageDatediv>2023.01.21</DetailPageDatediv>
      </DetailPageTextNamediv>

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
        <DetailPageEditButton>수정</DetailPageEditButton>
        <DetailPageDeleteButton>삭제</DetailPageDeleteButton>
      </DetailPageButtondiv>
    </DetailPageWrapdiv>
  );
}

const DetailPageWrapdiv = styled.div`
  width: 1600px;
  height: 700px;
  margin: 0 auto;
`;
const DetailPageVideodiv = styled.div`
  width: 1600px;
  height: 700px;
  background: #ccc;
  font-size: 24px;
  text-align: center;
  line-height: 700px;
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
`;
const DetailPageTextNamediv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;
const DetailPageNamediv = styled.div`
  font-size: 20px;
  line-height: 100%;
`;
const DetailPageDatediv = styled.div`
  font-size: 20px;
  line-height: 100%;
`;
const DetailPageContentdiv = styled.div`
  margin-top: 40px;
`;
const DetailPageButtondiv = styled.div`
  display: flex;
  align-items: center;
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
`;
const DetailPageDeleteButton = styled.button`
  margin-left: 10px;
  color: #fff;
  background-color: #c4302b;
  width: 80px;
  height: 30px;
  border-radius: 15px;
`;
