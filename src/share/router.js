import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../page/DetailPage";
import EditPostPage from "../page/EditPostPage";
import PostPage from "../page/PostPage";
import MyPage from "../page/MyPage";
import Home from "../page/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import NewVideo from "../page/NewVideo";
import PopularVideo from "../page/PopularVideo";
import MenuModal from "../component/MenuModal";


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <MenuModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/editpost" element={<EditPostPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/newvideo" element={<NewVideo />} />
        <Route path="/popularVideo" element={<PopularVideo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
