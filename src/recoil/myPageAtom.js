import { atom } from "recoil";

const UserLikePostState = atom({
  key: 'UserLikePostState',
  default:false
})

export {UserLikePostState}