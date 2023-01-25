import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ModalBtnState } from "../recoil/menuAtoms";
export const MenuModal = () => {
  const [modalHandler, setModalHandler] = useRecoilState(ModalBtnState);

  useEffect(() => {
    if (modalHandler) {
      document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  }, [modalHandler]);

  return (
    <>
      {modalHandler && (
        <MenuModalLayoutDiv>
          {/* 메뉴 창 닫기 */}
          <div>
            <button
              onClick={() => {
                setModalHandler(false);
              }}
            >
              x
            </button>
          </div>
          {/* 페이지 이동 */}
          <div>
            <div>로그아웃</div>
            <div>인기영상</div>
            <div>최신영상</div>
            <div>유튜브 TOP 10</div>
            <img src="" alt="" />
          </div>
        </MenuModalLayoutDiv>
      )}
    </>
  );
};

const MenuModalLayoutDiv = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #c4302b;
`;
// 스크롤 막기
