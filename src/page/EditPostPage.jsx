import styled from 'styled-components';

export default function EditPostPage() {
  return (
    <Container>
      <Text>게시물 수정</Text>
      <Form>
      <Input type={'text'} placeholder='제목' maxLength={'120'} />
      <Textarea type={'text'} placeholder='내용'></Textarea>
      </Form>
      <BtnBox style={{float: 'right', marginRight: '125px'}}>
      <Button className='button' style={{marginRight:'20px'}}>수정</Button>
      <Button className='button'>취소</Button>
      </BtnBox>
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
  float: right;
  margin-right: 125px;
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