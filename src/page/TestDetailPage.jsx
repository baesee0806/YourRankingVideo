import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router";

export default function TestDetailPage() {
    const { path } = useParams()
    const location = useLocation();
    const navigate = useNavigate();
    const { videodata } = location.state || {};
    console.log(path)
    console.log('state', videodata)
    console.log('videodata', videodata?.title)
    // const result = useQuery("videos", ()=>
    //     axios.get(`http://localhost:3001/videos/a9edb26d-ad64-40a7-bf16-d3e2bebfbc59`)
    //     .then((a)=>{return a.data})
    // );
    
    const goToeditPost = () => {
        navigate('/editpost', {
            state: {
                videoId: videodata.id,
                videotitle: videodata.title,
                videocontent: videodata.content
            }
        });
    };

    return (
        <div style={{backgroundColor: 'yellow'}}>
        <p>
        제목 : {videodata?.title}
        </p>
        내용 : {videodata?.content}
        <button onClick={goToeditPost}>수정페이지로</button>
        </div>
    );
};