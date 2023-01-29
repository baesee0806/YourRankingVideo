import { atom } from "recoil";
// 마이페이지 유저 좋아요한글 작성한글 버튼 on off 전역 관리
const UserLikePostState = atom({
  key: 'UserLikePostState',
  default:true
})

// 마이페이지 유저 닉네임 변경 state 전역 관리
// api에서 관리하기 위해 전역으로 관리 
const UserNinamechangeState = atom({
  key:'UserNinamechangeState',
  default:''
})


export {UserLikePostState ,UserNinamechangeState}

