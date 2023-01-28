import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { editVideo } from '../API/postApi';

// videos/각id 데이터 불러오기
export default function EditPostPage() {
  // const { id } = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  // console.log('state', location.state)
  // const { videoId, videotitle, videocontent } = location.state;
  // const videotitle = location.state.title;
  // const { videosId, videostitle, videoscontent } = location.state;
  // const videocontent = location.state.content;
  const { videoId } = location.state;
  // const videoEditData = useQuery("videos", () =>
  //       axios.get(`http://localhost:3001/videos/${videoData.id}`)
  //       .then((a) => a.data)
  //   );
  // console.log(videoData);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const videoEditData = useQuery("videos", () =>
    axios.get(`http://localhost:3001/videos/${videoId}`)
    .then((a)=>a.data)
  )
  // console.log('내 작성글 데이터', videoEditData.data)

  const reviseVideo = useMutation((video) => editVideo(video), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['videos']);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleEdit = (e) => {
    e.preventDefault();
    const editObj = {
      id: videoId,
      title: newTitle,
      content: newContent,
    };
    reviseVideo.mutate(editObj);
    navigate(`/${videoId}`)
  };

  return (
    <Container>
      <Text>게시물 수정</Text>
      {videoEditData.isLoading && 'Loading...'}
      {videoEditData.error && 'error'}
        <Form>
        {/* {placeholder= 받아온 데이터} */}
        <Input 
          type={'text'} 
          maxLength={'120'}  
          placeholder={videoEditData.data.title}
          onChange={(e) => setNewTitle(e.target.value)}
         />
        <Textarea 
          type={'text'} 
          placeholder={videoEditData.data.content}
          onChange={(e) => setNewContent(e.target.value)}
          ></Textarea>
        <BtnBox>
        <Button onClick={handleEdit} style={{marginRight:'20px'}}>
          수정
        </Button>
        <Button type='button' onClick={()=>navigate(-1)}>취소</Button>
        </BtnBox>
        </Form>
    </Container>
  )
}
const Container = styled.div`
  margin-top: 50px;
  margin-left: 160px;
`
const Text = styled.p`
  font-size: 30px;
  font-weight: 600;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 1600px;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid;
  font-size: 25px;
  padding: 10px;
  outline: none;
`
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
`
const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 125px;
  margin-bottom: 10px;
`
const Button = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: #C4302B;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 17px;
`