import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ModalBtnState } from "../recoil/menuAtoms";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { authService } from "../common/firebase";

const MenuModal = () => {
  // 모달창 on off => :boolen
  const [modalHandler, setModalHandler] = useRecoilState(ModalBtnState);
  const navigate = useNavigate();
  const COOKIE_KEY = window.LOGIN_KEY;
  const logoutURL = // 리다이렉트할 URL 을 상수화시켜서 넣어주었다.
    window.LOGIN_SESSION_KEY_URL +
    `/logout?redirect_uri=${window.location.href}`;

  const [, , removeCookie] = useCookies([COOKIE_KEY]); // 쓰지 않는 변수는 (공백),처리해주고 removeCookie 옵션만 사용한다

  // 메뉴 창이 열렸을때 화면을 고정하고 스크롤 못하게 만듬
  // 메뉴창이 닫히면 document.body.style.cssText = ""; 으로 초기화
  useEffect(() => {
    if (modalHandler) {
      document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
    height:100vh;`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  }, [modalHandler]);
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();

    window.alert("로그아웃 성공");
    removeCookie(COOKIE_KEY, { path: "login" }); // 쿠키삭제후
    window.location.href = logoutURL;
  };

  return (
    <>
      {modalHandler && (
        <>
          <ScreenBackgroundDiv
            onClick={() => {
              setModalHandler(false);
            }}
          ></ScreenBackgroundDiv>
          <MenuLayoutDiv>
            {/* 메뉴 창 닫기 */}
            <MenuModalBtnAreaDiv>
              <MenuModalOutBtn
                onClick={() => {
                  setModalHandler(false);
                }}
                style={{ cursor: "pointer" }}
              >
                x
              </MenuModalOutBtn>
            </MenuModalBtnAreaDiv>
            {/* 페이지 이동 */}
            <MenuModalMovePageAreaDiv>
              {/* 유저 정보가 있으면 로그아웃이 안보이게 만듬 */}
              {authService.currentUser !== null ? (
                <MenuModalMovePageDiv
                  onClick={logout}
                  style={{ cursor: "pointer" }}
                >
                  로그아웃
                </MenuModalMovePageDiv>
              ) : null}

              <MenuModalMovePageDiv
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                인기영상
              </MenuModalMovePageDiv>
              <MenuModalMovePageDiv
                onClick={() => {
                  navigate("/newvideo");
                }}
                style={{ cursor: "pointer" }}
              >
                최신영상
              </MenuModalMovePageDiv>
              <MenuModalMovePageDiv
                onClick={() => {
                  navigate("/popularvideo");
                }}
                style={{ cursor: "pointer" }}
              >
                유튜브 TOP 10
              </MenuModalMovePageDiv>
              {/*  */}
              <LogoImg
                src={require("../assets/Logo.png")}
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  width: "100px",
                  cursor: "pointer",
                }}
              />
            </MenuModalMovePageAreaDiv>
          </MenuLayoutDiv>
        </>
      )}
    </>
  );
};

export default MenuModal;

const ScreenBackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const MenuLayoutDiv = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #c4302b;
  animation: fadeInLeft 1s;
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translate3d(50%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

// x Btn Area
const MenuModalBtnAreaDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const MenuModalOutBtn = styled.div`
  border: none;
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;

// Router Btn area

const MenuModalMovePageAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuModalMovePageDiv = styled.div`
  font-size: 25px;
  color: white;
  margin: 0 0 15px 15px;
`;

const LogoImg = styled.img`
  width: 50%;
  margin-left: 25px;
`;
