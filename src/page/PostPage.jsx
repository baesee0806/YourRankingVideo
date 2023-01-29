import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { authService } from '../common/firebase';
import { createVideo } from '../API/postApi';

export default function PostPage() {
  const navigate = useNavigate();
  const addVideo = useMutation((video) => createVideo(video), {
    onSuccess: (data) => {
      console.log(data?.data?.id);
      navigate(`/${data?.data?.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { register, handleSubmit } = useForm();
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
      <TextBox>
        <Text>게시물 작성</Text>
      </TextBox>
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
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const TextBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 auto;
`
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
  margin-bottom: 10px;
  position: absolute;
  top: 100%;
  left: 89%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1700px){
    position: absolute;
    top: 100%;
    left: 87%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 1300px){
    position: absolute;
    top: 100%;
    left: 84%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 1000px){
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
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 17px;
  /* hover */
  &:hover {
    background-color: #e73a0fec;
  }
`;
