// import { updateProfile } from "firebase/auth";
// import { useRecoilState } from "recoil";
// import { authService } from "../common/firebase";
// import {UserNinamechangeState } from "../recoil/myPageAtom";

 
//  // 유저 닉네임 변경 함수
//  const [nickName, setNickName] = useRecoilState(UserNinamechangeState);
 
//  const userNickNameChange = () => {
//   updateProfile(authService.currentUser, {
//     // : String
//     displayName: nickName,
//   })
//     .then(() => {
//       // : String
//       setNickName("");
//     })
//     .catch((error) => {
//       // An error occurred
//       // ...
//     });
// };

// export {userNickNameChange}