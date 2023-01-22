import React from "react";

export default function MyPage() {
  return (
    <>
      {/* 마이페이지 유저 정보 area */}
      <div>
        {/* 유저 이미지 */}
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/14/14660.png" />
        </div>
        {/* 유저 이메일 */}
        <div>
          <h3>test@test.com</h3>
        </div>
        {/* 유저 닉네임 */}
        <div>
          <h4>닉네임</h4>
        </div>
        {/* 유저 닉네임 input */}
        <div>
          <input type="text" />
          <button>수정</button>
        </div>
      </div>
      {/* 유저 좋아요한글 게시한글 area */}
      <div>
        {/* 1. 게시글 상태 관리 해야함 */}
        {/* 메뉴 area */}
        <div>
          <button>좋아요한 글</button>
          <button>게시한 글</button>
        </div>
        {/* video box area */}
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </>
  );
}
