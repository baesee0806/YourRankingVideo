import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authService } from "../common/firebase";
import { createVideo } from "../API/postApi";

export default function PostPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const addVideo = useMutation((video) => axios.post('http://localhost:3001/videos', video), {
  //   onSuccess: (data) => {
  //     console.log(data);
  //     queryClient.invalidateQueries(['videos']);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });
  const addVideo = useMutation((video) => createVideo(video), {
    onSuccess: (data) => {
      console.log(data?.data?.id);
      navigate(`/${data?.data?.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    const Video = {
      id: uuidv4(),
      contentId: uuidv4(),
      createAt: Date(),
      time: new Date().toLocaleDateString(),
      userId: authService.currentUser.uid,
      nickName: authService.currentUser.displayName ?? "닉네임없음",
      likesCount: 0,
    };
    const newVideo = Object.assign(Video, data);
    addVideo.mutate(newVideo);
    alert("작성 완료");
  };
  const onError = (error) => {
    console.log(error);
  };

  return (
    <Container>
      <Text>게시물 작성</Text>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          type={"url"}
          maxLength={"120"}
          placeholder="url"
          required
          {...register("videoUrl")}
        />
        <Input
          type={"text"}
          maxLength={"120"}
          placeholder="제목"
          required
          {...register("title")}
        />
        <Textarea
          type={"text"}
          placeholder="내용"
          required
          {...register("content")}
        ></Textarea>
        <BtnBox>
          <Button
            type="submit"
            style={{ marginRight: "20px" }}
            // disabled={isSubmitting}
            // onClick={() => {
            //   isSubmitting();
            //   navigate(`${uuid}`);
            // }}
          >
            완료
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
  margin-top: 50px;
  margin-left: 160px;
`;
const Text = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 1600px;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid;
  font-size: 25px;
  padding: 10px;
  outline: none;
`;
const Textarea = styled.textarea`
  width: 1600px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid;
  margin-bottom: 35px;
  resize: none;
  font-size: 25px;
  padding: 10px;
  outline: none;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 125px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: #c4302b;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 17px;
`;
