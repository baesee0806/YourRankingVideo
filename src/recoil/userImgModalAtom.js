import { atom } from "recoil";
// 마이페이지 이미지 모달창 전역 관리
const UserImgModalState = atom({
  key: 'UserImgModalState',
  default:false
})

export {UserImgModalState}