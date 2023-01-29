import { atom } from "recoil";
// 메뉴 모달창 전역 관리
const ModalBtnState = atom({
  key: 'ModalBtnState',
  default:false
})

export {ModalBtnState}