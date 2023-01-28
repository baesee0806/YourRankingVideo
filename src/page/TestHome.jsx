import axios from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom";


export default function TestHome() {
    const navigate = useNavigate();
    //result 데이터 : 배열
    const result = useQuery("videos", () =>
        axios.get('http://localhost:3001/videos')
        .then((a) => a.data)
    );
    //http://localhost:3001/videos/${id} -> 객체
    // const resultId = useQuery("videos", (id)=>
    //     axios.get(`http://localhost:3001/videos/${id}`)
    //     .then((b) => b.data)
    // )
    // console.log('resultId', resultId)
    // console.log('video', result.data[0])
    
    

    const goToDetail = (i) => {
        navigate(`/testDetailPage/${result.data[i]?.id}`, {
            state: {
                videodata: result.data[i]
            }
        });
    };

    return (
        // result데이터로 map함수 이용 -> 배열안에 객체별로 navigate state넘겨주기
        <div>
            {result.isLoading && 'Loading...'}
            {result.error && 'error'}
            {result.data?.map((a, i)=>(
                <div key={a.id} style={{backgroundColor: 'skyblue'}}>
                    <p>{result.data[i].title}</p>
                    {result.data[i].content}
                    <button onClick={()=>goToDetail(i)}>상세페이지로</button>
                </div>
            ))}
        </div>
    )
}