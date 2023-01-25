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
  max-height: 700px;
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
    width: 800px;
  }
`;
const DetailPageVideodiv = styled.div`
  width: 100%;
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
  @media screen and (max-width: 1024px) {
    font-size: 28px;
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
`;
const DetailPageDatediv = styled.div`
  font-size: 20px;
  line-height: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const DetailPageContentdiv = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
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
