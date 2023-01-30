import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { editVideo } from "../API/postApi";

export default function EditPostPage() {
  const location = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { videoId } = location.state; // Detailpage에서 params.id 받아옴

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // videos/id(uuid) 데이터 받아오기
  const videoEditData = useQuery("videos", () => axios.get(`http://localhost:3001/videos/${videoId}`).then((a) => a.data));

  // 게시글 수정
  const reviseVideo = useMutation((video) => editVideo(video), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["videos"]); // 쿼리 무효화
    },
    onError: (error) => {},
  });

  const handleEdit = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      alert("수정한 부분이 없습니다(제목, 내용).");
      return;
    }
    const editObj = {
      id: videoId,
      title: newTitle,
      content: newContent,
    };
    reviseVideo.mutate(editObj);
    navigate(`/${videoId}`); // 글 작성 후 해당 상세페이지로 이동
  };

  return (
    <Container>
      {videoEditData.isLoading && "Loading..."}
      {videoEditData.error && "error"}
      <TextBox>
        <Text>게시물 수정</Text>
      </TextBox>
      <Form>
        {/* {placeholder= 받아온 데이터} */}
        <Input type={"text"} maxLength={"120"} placeholder={videoEditData.data.title} onChange={(e) => setNewTitle(e.target.value)} />
        <Textarea type={"text"} placeholder={videoEditData.data.content} onChange={(e) => setNewContent(e.target.value)}></Textarea>
        <BtnBox>
          <Button
            // 버튼 비활성화에 따른 opacity 적용
            opacitybtn={!newTitle || !newContent}
            onClick={handleEdit}
            style={{ marginRight: "20px" }}
          >
            수정
          </Button>
          <Button type="button" onClick={() => navigate(-1)}>
            취소
          </Button>
        </BtnBox>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const TextBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 auto;
`;
const Text = styled.h2`
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 55px;
`;
const Input = styled.input`
  width: 90%;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid;
  font-size: 25px;
  padding: 10px;
  outline: none;
`;
const Textarea = styled.textarea`
  width: 90%;
  height: 500px;
  border-radius: 10px;
  border: 1px solid;
  margin-bottom: 50px;
  resize: none;
  font-size: 25px;
  padding: 10px;
  outline: none;
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 125px; */
  margin-bottom: 10px;
  position: absolute;
  top: 100%;
  left: 89%;
  transform: translate(-50%, -50%);
  /* 화면크기에 따른 버튼 위치 */
  @media screen and (max-width: 1700px) {
    position: absolute;
    top: 100%;
    left: 87%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 1300px) {
    position: absolute;
    top: 100%;
    left: 84%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 1000px) {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: #c4302b;
  /* hover */
  &:hover {
    background-color: #e73a0fec;
  }
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 17px;
  /* 비활성화일 때 버튼 opacity */
  opacity: ${(props) => (props.opacitybtn ? 0.1 : 1)};
`;
